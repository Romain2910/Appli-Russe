/* =========================================================
   CORE — stockage, etat global, moteur SRS/curriculum, navigation, utilitaires partages, init
   ========================================================= */

const LS_PREFIX = 'russe:';

let currentUserId = null;

async function sGet(key, fallback){
  try{
    if(!currentUserId) return fallback;
    const { data, error } = await sb.from('user_state')
      .select('value').eq('user_id', currentUserId).eq('key', key).maybeSingle();
    if(error){ console.error('storage get failed', key, error); return fallback; }
    if(!data) return fallback;
    return data.value;
  }catch(e){ console.error('storage get failed', key, e); return fallback; }
}

async function sSet(key, value){
  try{
    if(!currentUserId) return;
    const { error } = await sb.from('user_state')
      .upsert({ user_id: currentUserId, key, value, updated_at: new Date().toISOString() }, { onConflict: 'user_id,key' });
    if(error) console.error('storage set failed (progression non sauvegardée)', key, error);
  }catch(e){ console.error('storage set failed (progression non sauvegardée)', key, e); }
}

function todayStr(){ return new Date().toISOString().slice(0,10); }

function addDays(dateStr, n){ const d = new Date(dateStr+'T00:00:00'); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }

let ALL_CARDS = [];

DECKS.forEach(d=>d.cards.forEach((c,i)=>ALL_CARDS.push({id:d.id+'-'+i, deck:d.id, ru:c[0], translit:c[1], fr:c[2]})));

let SRS = {};

let KNOWN = {};

let GDONE = [];

let EXAMS = [];

let STREAK = {last:null, count:0};

let currentDeck = null, reviewQueue = [], reviewIdx = 0, cardFlipped = false;

let currentLessonId = null;

let readingLevel = 'Tous';

let readingTheme = 'Tous';

let listeningLevel = 'Tous';

let listeningTheme = 'Tous';

let listenRate = 0.85;

let oralLevel = 'Tous';

let oralTheme = 'Tous';

let oralRate = 0.9;

let verbCatFilter = 'Tous';

let verbTier = 'essential';

let READDONE = [];

let LISTENDONE = [];

let ORALDONE = [];

let CUSTOM_VERBS = [];

let ALL_VERBS = [];

let convHistory = [];

let recognizer = null, recognizing = false;

let verbReviewQueue = [], verbReviewIdx = 0, verbReviewFlipped = false;

let mixQueue = [], mixIdx = 0, mixFlipped = false, mixGramQ = null;

const MIX_SESSION_SIZE = 15;

let CURRICULUM_DAY = 0;

let CURRICULUM_LAST_DATE = null;

let CURRICULUM_INTRODUCED = {};

let CURRICULUM_PLAN = null;

let UNIT_RESULTS = {};

let unitTestQuestions = [], unitTestIdx = 0, unitTestScore = 0, unitTestAnswered = false, unitTestUnitIdx = null;

let parcoursReviewQueue = [], parcoursReviewIdx = 0, parcoursReviewFlipped = false, parcoursGramQ = null;

let exampleDrillQueue = [], exampleDrillIdx = 0, exampleDrillFlipped = false, exampleDrillLessonId = null;

async function loadState(){
  SRS = await sGet('srs:cards', {});
  KNOWN = await sGet('vocab:known', {});
  GDONE = await sGet('progress:grammar', []);
  EXAMS = await sGet('progress:exams', []);
  STREAK = await sGet('progress:streak', {last:null, count:0});
  READDONE = await sGet('progress:reading', []);
  LISTENDONE = await sGet('progress:listening', []);
  ORALDONE = await sGet('progress:oral', []);
  CUSTOM_VERBS = await sGet('verbs:custom', []);
  ALL_VERBS = VERBS.concat(FREQ_VERBS).concat(CUSTOM_VERBS);
  CURRICULUM_DAY = await sGet('curriculum:day', 0);
  CURRICULUM_LAST_DATE = await sGet('curriculum:lastDate', null);
  CURRICULUM_INTRODUCED = await sGet('curriculum:introduced', {});
  UNIT_RESULTS = await sGet('curriculum:units', {});
  bumpStreak();
  bumpCurriculumDay();
}

function bumpCurriculumDay(){
  const t = todayStr();
  if(CURRICULUM_LAST_DATE === t) return; // déjà avancé aujourd'hui
  if(CURRICULUM_LAST_DATE !== null){ CURRICULUM_DAY = Math.min(CURRICULUM_DAY+1, maxAllowedDayIndex()); }
  CURRICULUM_LAST_DATE = t;
  sSet('curriculum:day', CURRICULUM_DAY);
  sSet('curriculum:lastDate', CURRICULUM_LAST_DATE);
}

function bumpStreak(){
  const t = todayStr();
  if(STREAK.last === t) return;
  if(STREAK.last === addDays(t,-1)){ STREAK.count += 1; }
  else if(STREAK.last === null){ STREAK.count = 1; }
  else { STREAK.count = 1; }
  STREAK.last = t;
  sSet('progress:streak', STREAK);
}

const CURRICULUM_NEW_PER_DAY = { vocab: 6, oral: 2 };

const REVIEW_OFFSETS = [1,3,5,8,13];

const UNIT_SIZE_DAYS = 6;

function unitIndexForDay(dayIdx){ return Math.floor(dayIdx / UNIT_SIZE_DAYS); }

function unitDayRange(unitIdx){
  const plan = getCurriculumPlan();
  const start = unitIdx * UNIT_SIZE_DAYS;
  const end = Math.min(plan.length-1, start + UNIT_SIZE_DAYS - 1);
  return [start, end];
}

function totalUnitsCount(){
  const plan = getCurriculumPlan();
  return Math.ceil(plan.length / UNIT_SIZE_DAYS);
}

function unitContent(unitIdx){
  const plan = getCurriculumPlan();
  const [start,end] = unitDayRange(unitIdx);
  const days = plan.slice(start, end+1);
  const consolidationDay = days.find(d=>d.type==='consolidation');
  return {
    lessonIds: Array.from(new Set(days.map(d=>d.lessonId).filter(Boolean))),
    vocabIds: days.flatMap(d=>d.vocabIds||[]),
    verbIds: Array.from(new Set(days.map(d=>d.verbId).filter(Boolean))),
    oralIds: days.flatMap(d=>d.oralIds||[]),
    readingId: consolidationDay ? consolidationDay.readingId : null,
    listeningId: consolidationDay ? consolidationDay.listeningId : null
  };
}

function unitTitle(unitIdx){
  const content = unitContent(unitIdx);
  const firstLesson = content.lessonIds[0] ? LESSONS.find(l=>l.id===content.lessonIds[0]) : null;
  return firstLesson ? `Unité ${unitIdx+1} — ${CEFR_INFO[firstLesson.cefr].label}` : `Unité ${unitIdx+1}`;
}

function getUnlockedUnitCount(){
  let count = 1;
  while(UNIT_RESULTS[count-1] && UNIT_RESULTS[count-1].passed) count++;
  return count;
}

function isUnitUnlocked(unitIdx){ return unitIdx < getUnlockedUnitCount(); }

function maxAllowedDayIndex(){
  const plan = getCurriculumPlan();
  const unlocked = getUnlockedUnitCount();
  return Math.min(plan.length-1, unlocked*UNIT_SIZE_DAYS - 1);
}

const BOX_INTERVALS = [0,1,2,4,7,15];

function srsIsDue(key){
  const t = todayStr();
  return !SRS[key] || SRS[key].next <= t;
}

function srsGrade(key, quality){
  const cur = SRS[key] || {box:0, next:todayStr()};
  let box = cur.box;
  if(quality <= 1) box = 1;
  else if(quality === 3) box = Math.min(box+1, 5);
  else box = Math.min(box+2, 5);
  const next = addDays(todayStr(), BOX_INTERVALS[box]);
  SRS[key] = {box, next};
  sSet('srs:cards', SRS);
  return SRS[key];
}

function dueCardsIn(deckId){
  const t = todayStr();
  return ALL_CARDS.filter(c => (!deckId || c.deck===deckId) && (!SRS[c.id] || SRS[c.id].next <= t));
}

function dueGrammarLessons(){
  return LESSONS.filter(l => srsIsDue('gram-'+l.id));
}

function dueVerbs(){
  return VERBS.filter(v => srsIsDue('verb-'+v.id));
}

function masteredCount(){
  return Object.values(SRS).filter(s=>s.box>=5).length;
}

function buildNav(){
  const nav = document.getElementById('navlist');
  const mob = document.getElementById('mobilenav');
  nav.innerHTML = ''; mob.innerHTML = '';
  MODULES.forEach(m=>{
    const b1 = document.createElement('button');
    b1.className = 'navbtn'; b1.id = 'nav-'+m.id;
    b1.innerHTML = ic(m.icon) + '<span>'+m.label+'</span>';
    b1.onclick = ()=>goTo(m.id);
    nav.appendChild(b1);
    const b2 = b1.cloneNode(true);
    b2.onclick = ()=>goTo(m.id);
    mob.appendChild(b2);
  });
  const navSec = document.getElementById('navlist-secondary');
  navSec.innerHTML = '';
  SECONDARY_PAGES.forEach(m=>{
    const b = document.createElement('button');
    b.className = 'navbtn'; b.id = 'nav-'+m.id;
    b.style.fontSize = '13px'; b.style.padding = '7px 10px';
    b.innerHTML = ic(m.icon, 15) + '<span>'+m.label+'</span>';
    b.onclick = ()=>goTo(m.id);
    navSec.appendChild(b);
  });
}

function goTo(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
  document.querySelectorAll('.navbtn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('#nav-'+id).forEach(b=>b.classList.add('active'));
  window.scrollTo(0,0);
  if(id==='dashboard') renderDashboard();
  if(id==='alphabet') renderAlphabet();
  if(id==='grammar') renderGrammarList();
  if(id==='vocabulaire') renderVocabThemes();
  if(id==='verbes') renderVerbsHome();
  if(id==='flashcards') renderDecks();
  if(id==='reading') renderReadingList();
  if(id==='listening') renderListening();
  if(id==='oral') renderOral();
  if(id==='exam') renderExamHome();
  if(id==='mix') renderMixSession();
  if(id==='account') renderAccount();
  if(id==='help') renderHelp();
  if(id==='legal') renderLegal();
}

function renderGlossedText(raw){
  return raw.replace(/([\u0400-\u04FF\-]+)(\[\[([^\]]+)\]\])?/g, (m, word, bracket, explicit)=>{
    const t = explicit || COMMON_GLOSS[word.toLowerCase()];
    if(t) return `<span class="gloss" data-t="${t.replace(/"/g,'&quot;')}">${word}</span>`;
    return word;
  });
}

function showGlossTooltip(el){
  const tip = document.getElementById('gloss-tooltip');
  tip.textContent = el.dataset.t;
  const rect = el.getBoundingClientRect();
  tip.style.display = 'block';
  const tw = tip.offsetWidth || 150;
  let left = rect.left + rect.width/2 - tw/2;
  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  tip.style.left = left + 'px';
  tip.style.top = Math.max(8, rect.top - 40) + 'px';
}

function hideGlossTooltip(){
  const tip = document.getElementById('gloss-tooltip');
  if(tip) tip.style.display = 'none';
}

document.addEventListener('mouseover', (e)=>{
  if(e.target.classList && e.target.classList.contains('gloss')) showGlossTooltip(e.target);
});

document.addEventListener('mouseout', (e)=>{
  if(e.target.classList && e.target.classList.contains('gloss')) hideGlossTooltip();
});

document.addEventListener('click', (e)=>{
  if(e.target.classList && e.target.classList.contains('gloss')){
    showGlossTooltip(e.target);
  } else {
    hideGlossTooltip();
  }
});

function themeSortIndex(theme){
  const i = THEME_ORDER.indexOf(theme);
  return i===-1 ? THEME_ORDER.length : i;
}

function levenshtein(a,b){
  a=a.toLowerCase(); b=b.toLowerCase();
  const m=a.length, n=b.length;
  const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++){
    dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  }
  return dp[m][n];
}

function similarity(a,b){
  const d = levenshtein(a,b);
  const maxLen = Math.max(a.length,b.length,1);
  return Math.max(0, Math.round((1 - d/maxLen)*100));
}

function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

async function init(){
  buildNav();
  await loadState();
  document.getElementById('streak-n').textContent = STREAK.count;
  goTo('dashboard');
  if('speechSynthesis' in window){ window.speechSynthesis.onvoiceschanged = ()=>{}; }
}
