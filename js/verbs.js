/* =========================================================
   VERBES — revision, fiches, recherche IA
   ========================================================= */

function startVerbReview(){
  verbReviewQueue = shuffle(dueVerbs());
  if(verbReviewQueue.length === 0) verbReviewQueue = shuffle(VERBS.slice()).slice(0,10);
  verbReviewIdx = 0; verbReviewFlipped = false;
  renderVerbReview();
}

function renderVerbReview(){
  const el = document.getElementById('view-verbes');
  if(verbReviewQueue.length === 0){
    el.innerHTML = `<div class="empty">${ic('refresh',30)}<p>Aucun verbe à réviser pour l'instant.</p><button class="btn secondary" onclick="renderVerbsHome()">Retour</button></div>`;
    return;
  }
  if(verbReviewIdx >= verbReviewQueue.length){
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge sage" style="margin-bottom:10px;">Session terminée</div>
        <div class="score">${verbReviewQueue.length} verbe(s) revus</div>
        <p style="color:var(--slate);">Continue demain pour renforcer ta mémoire.</p>
        <button class="btn amber" onclick="renderVerbsHome()">Retour aux verbes</button>
      </div>`;
    return;
  }
  const v = verbReviewQueue[verbReviewIdx];
  const presentSample = v.present ? Object.entries(v.present).slice(0,3).map(([p,f])=>`${p} — ${f}`).join(' · ') : (v.presentNote||'');
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:14px;" onclick="renderVerbsHome()">Quitter</button>
    <p style="color:var(--slate); font-size:13px; margin-bottom:10px;">Verbe ${verbReviewIdx+1} / ${verbReviewQueue.length}</p>
    <div class="flip-stage">
      <div class="flashcard" id="verb-review-card-el" onclick="flipVerbReviewCard()">
        <div class="big" style="font-size:22px;">${v.fr}</div>
        <div class="sub" id="vrc-hint-tag">${v.tag ? (v.tag==='mouvement'?'🏃 verbe de mouvement':'🔄 verbe réfléchi') : (v.cat==='1'?'Groupe 1':v.cat==='2'?'Groupe 2':'Irrégulier')}</div>
        <div class="fr ru" id="vrc-answer" style="display:none;">
          <div style="font-size:22px;">${v.ru}</div>
          <div class="sub" style="margin:4px 0 8px;">${v.translit||''}</div>
          <div style="font-size:12.5px; color:var(--slate);">${presentSample}</div>
        </div>
        <div class="hint" id="vrc-hint">Clique pour révéler la conjugaison</div>
      </div>
      <div class="grade-row" id="verb-review-grade-row" style="display:none;">
        <button class="btn secondary" onclick="gradeVerbReview(1)">Encore</button>
        <button class="btn secondary" onclick="gradeVerbReview(3)">Bien</button>
        <button class="btn amber" onclick="gradeVerbReview(5)">Facile</button>
      </div>
      <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${v.ru}')" aria-label="Écouter">${ic('headphones',16)}</button>
    </div>
  `;
}

function flipVerbReviewCard(){
  if(verbReviewFlipped) return;
  verbReviewFlipped = true;
  document.getElementById('vrc-answer').style.display = 'block';
  document.getElementById('vrc-hint').style.display = 'none';
  document.getElementById('verb-review-grade-row').style.display = 'flex';
}

function gradeVerbReview(quality){
  const v = verbReviewQueue[verbReviewIdx];
  srsGrade('verb-'+v.id, quality);
  verbReviewIdx += 1; verbReviewFlipped = false;
  renderVerbReview();
}

function deburr(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim(); }

function renderVerbsHome(){
  const el = document.getElementById('view-verbes');
  const dueN = dueVerbs().length;
  el.innerHTML = `
    <div class="eyebrow">Module</div>
    <h1 class="pagetitle">Verbes</h1>
    <p class="pagesub">Comme en français (1er groupe, 2e groupe, verbes irréguliers), le russe classe ses verbes en <b>3 grandes familles selon leur conjugaison</b>. Voici les bases, puis un moteur de recherche pour trouver n'importe quel verbe.</p>

    <div class="card" style="margin-bottom:22px; display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
      <div>
        <h3 style="margin:0 0 4px;">Révision espacée (SRS)</h3>
        <p style="margin:0; font-size:13px; color:var(--slate);">${dueN>0 ? `${dueN} verbe(s) essentiel(s) à réviser aujourd'hui.` : "Rien de programmé aujourd'hui — révise quand même une sélection au hasard."}</p>
      </div>
      <button class="btn amber" onclick="startVerbReview()">${ic('refresh',15)} Réviser mes verbes</button>
    </div>

    <div class="verb-intro">
      <h3>Comment marchent les verbes russes, en 5 points</h3>
      <div class="verb-intro-step"><div class="n">1</div><div>Chaque verbe existe presque toujours en <b>deux versions</b> : imperfectif (action habituelle, en cours, répétée) et perfectif (action ponctuelle, avec un résultat). <a onclick="goTo('grammar'); setTimeout(()=>renderLessonDetail('aspect-verbal'),50);">Voir la leçon complète →</a></div></div>
      <div class="verb-intro-step"><div class="n">2</div><div>Le <b>présent</b> n'existe que pour l'aspect imperfectif. Comme en français, il y a des groupes réguliers : <b>Groupe 1</b> (-ю/-ешь/-ет...) et <b>Groupe 2</b> (-ю/-ишь/-ит...), plus des <b>irréguliers</b> à mémoriser tels quels — comme "go/went/gone" en anglais. <a onclick="goTo('grammar'); setTimeout(()=>renderLessonDetail('conj1'),50);">Groupe 1 →</a> · <a onclick="goTo('grammar'); setTimeout(()=>renderLessonDetail('conj2'),50);">Groupe 2 →</a></div></div>
      <div class="verb-intro-step"><div class="n">3</div><div>Le <b>futur</b> a deux formes : буду + infinitif imperfectif (durée), ou la conjugaison directe du perfectif (résultat). <a onclick="goTo('grammar'); setTimeout(()=>renderLessonDetail('futur'),50);">Voir la leçon →</a></div></div>
      <div class="verb-intro-step"><div class="n">4</div><div>Le <b>passé</b> ne change pas selon la personne, mais selon le genre et le nombre du sujet (-л / -ла / -ло / -ли). <a onclick="goTo('grammar'); setTimeout(()=>renderLessonDetail('passe'),50);">Voir la leçon →</a></div></div>
      <div class="verb-intro-step"><div class="n">5</div><div>Deux petites familles à part, signalées par une étiquette 🏃 ou 🔄 sur les fiches : les <b>verbes de mouvement</b> (aller, courir... deux formes selon l'habitude ou non) et les <b>verbes réfléchis</b> (-ся). Elles se répartissent aussi dans les 3 groupes ci-dessus.</div></div>
    </div>

    <h3 style="margin:0 0 10px;">Rechercher un verbe (en français)</h3>
    <div class="verb-search">
      <input type="text" id="verb-search-input" placeholder="Tape un verbe français, ex. « manger », « aller »..." autocomplete="off" onkeydown="if(event.key==='Enter'){ const q=this.value.trim(); if(q) searchVerbWithAI(q); document.getElementById('verb-results').style.display='none'; }" />
      <div class="verb-results" id="verb-results" style="display:none;"></div>
    </div>

    <h3 style="margin:26px 0 12px;">Parcourir les verbes</h3>
    <div class="level-tabs" id="verb-tier-tabs" style="margin-bottom:14px;"></div>
    <div id="verb-tier-body"></div>
  `;

  const tierTabs = document.getElementById('verb-tier-tabs');
  const tEssential = document.createElement('button');
  tEssential.className = 'level-tab' + (verbTier==='essential' ? ' active' : '');
  tEssential.textContent = `100 verbes essentiels (fiches complètes)`;
  tEssential.onclick = ()=>{ verbTier='essential'; renderVerbsHome(); };
  const tExtended = document.createElement('button');
  tExtended.className = 'level-tab' + (verbTier==='extended' ? ' active' : '');
  tExtended.textContent = `Liste étendue (${VERBS.length + FREQ_VERBS.length} verbes)`;
  tExtended.onclick = ()=>{ verbTier='extended'; renderVerbsHome(); };
  tierTabs.appendChild(tEssential);
  tierTabs.appendChild(tExtended);

  if(verbTier==='essential'){
    renderEssentialVerbsBody();
  } else {
    renderExtendedVerbsBody();
  }

  const input = document.getElementById('verb-search-input');
  const results = document.getElementById('verb-results');
  input.addEventListener('input', ()=>{
    const q = deburr(input.value);
    if(!q){ results.style.display='none'; return; }
    const matches = ALL_VERBS.filter(v=> deburr(v.fr).includes(q));
    if(matches.length===0){
      results.innerHTML = `
        <div class="verb-result-row" style="cursor:default; color:var(--slate);">Aucun verbe trouvé pour « ${escapeHTML(input.value)} » dans les ${ALL_VERBS.length} verbes de base.</div>
        <div class="verb-result-row" id="verb-ai-search" style="cursor:pointer; color:var(--amber-deep); font-weight:600;">🌐 Chercher « ${escapeHTML(input.value)} » (traduction + conjugaison estimée) →</div>
      `;
      const aiRow = document.getElementById('verb-ai-search');
      if(aiRow) aiRow.onclick = ()=>{ searchVerbWithAI(input.value.trim()); results.style.display='none'; input.value=''; };
    } else {
      results.innerHTML = matches.map(v=>`<div class="verb-result-row" data-id="${v.id}"><span class="fr">${v.fr}</span><span class="ru">${v.ru}</span></div>`).join('')
        + `<div class="verb-result-row" id="verb-ai-search" style="cursor:pointer; color:var(--amber-deep); font-weight:600;">🌐 Pas le bon résultat ? Chercher « ${escapeHTML(input.value)} » (traduction estimée) →</div>`;
      results.querySelectorAll('.verb-result-row[data-id]').forEach(row=>{
        row.onclick = ()=>{ goToVerbById(row.dataset.id); results.style.display='none'; input.value=''; };
      });
      const aiRow = document.getElementById('verb-ai-search');
      if(aiRow) aiRow.onclick = ()=>{ searchVerbWithAI(input.value.trim()); results.style.display='none'; input.value=''; };
    }
    results.style.display = 'block';
  });
  document.addEventListener('click', (e)=>{
    if(e.target.id !== 'verb-search-input' && !e.target.closest('#verb-results')) results.style.display='none';
  });
}

function goToVerbById(id){
  if(id.startsWith('f')){
    const v = FREQ_VERBS.find(x=>x.id===id);
    if(v) showFreqVerb(v.ru, v.fr);
  } else {
    renderVerbDetail(id);
  }
}

function renderEssentialVerbsBody(){
  const body = document.getElementById('verb-tier-body');
  body.innerHTML = `
    <div id="verb-cat-desc" style="font-size:12.5px; color:var(--slate); margin:0 0 12px;"></div>
    <div class="level-tabs" id="verb-cat-tabs"></div>
    <div class="verb-chip-grid" id="verb-chip-grid"></div>
  `;
  const CAT_ORDER = ['Tous','1','2','irr'];
  const CAT_INFO = {
    Tous:{label:'Tous', desc:`Les ${VERBS.length} verbes essentiels, tous groupes confondus.`},
    '1':{label:'Groupe 1', desc:'Comme le 1er groupe français (-er) : infinitif en -ать/-ять/-овать, présent en -ю/-ешь/-ет/-ем/-ете/-ют. Le groupe le plus fréquent.'},
    '2':{label:'Groupe 2', desc:'Comme le 2e groupe français (-ir) : infinitif en -ить (+ quelques exceptions en -еть/-ать), présent en -ю/-ишь/-ит/-им/-ите/-ят.'},
    irr:{label:'Irréguliers', desc:"Comme « go / went / gone » en anglais : leur radical change de façon imprévisible, impossible à deviner depuis l'infinitif — ça se mémorise verbe par verbe."}
  };
  const tabs = document.getElementById('verb-cat-tabs');
  CAT_ORDER.forEach(key=>{
    const info = CAT_INFO[key];
    const count = key==='Tous' ? VERBS.length : VERBS.filter(v=>v.cat===key).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (verbCatFilter===key ? ' active' : '');
    b.textContent = `${info.label} (${count})`;
    b.onclick = ()=>{ verbCatFilter = key; renderVerbsHome(); };
    tabs.appendChild(b);
  });
  document.getElementById('verb-cat-desc').textContent = CAT_INFO[verbCatFilter].desc;
  const grid = document.getElementById('verb-chip-grid');
  const shown = verbCatFilter==='Tous' ? VERBS : VERBS.filter(v=>v.cat===verbCatFilter);
  shown.forEach(v=>{
    const chip = document.createElement('div');
    chip.className = 'verb-chip';
    chip.innerHTML = `<div class="fr">${v.fr} ${v.tag ? `<span title="${v.tag==='mouvement'?'Verbe de mouvement':'Verbe réfléchi'}">${TAG_ICON[v.tag]}</span>` : ''}</div><div class="ru">${v.ru}</div>`;
    chip.onclick = ()=>renderVerbDetail(v.id);
    grid.appendChild(chip);
  });
}

function renderExtendedVerbsBody(){
  const body = document.getElementById('verb-tier-body');
  body.innerHTML = `
    <p style="font-size:12.5px; color:var(--slate); margin:0 0 14px;">Liste de référence façon dictionnaire, compilée à partir du vocabulaire courant (pas une fiche vérifiée verbe par verbe). Clique sur un verbe : s'il fait partie des 100 essentiels, tu retrouves sa fiche complète ; sinon, la conjugaison est estimée automatiquement par les mêmes règles que la recherche.</p>
    <div class="verb-chip-grid" id="verb-chip-grid-ext"></div>
  `;
  const grid = document.getElementById('verb-chip-grid-ext');
  const all = VERBS.concat(FREQ_VERBS).slice().sort((a,b)=>a.fr.localeCompare(b.fr));
  all.forEach(v=>{
    const chip = document.createElement('div');
    chip.className = 'verb-chip';
    chip.innerHTML = `<div class="fr">${v.fr}</div><div class="ru">${v.ru}</div>`;
    chip.onclick = ()=>{
      if(v.present || v.presentNote){ renderVerbDetail(v.id); }
      else { showFreqVerb(v.ru, v.fr); }
    };
    grid.appendChild(chip);
  });
}

function showFreqVerb(ru, fr){
  const curated = VERBS.find(v => v.ru===ru || (v.perfectif && v.perfectif.ru===ru));
  if(curated){
    renderVerbCard(Object.assign({}, curated, {fr}), null);
    return;
  }
  const guessed = guessRussianVerbData(ru, fr);
  renderVerbCard(guessed, guessed.estimated ? 'estimated' : null);
}

function conjRow(pron, form){
  return `<tr><td class="pron">${pron}</td><td class="form">${form}</td></tr>`;
}

function renderVerbDetail(verbId){
  const v = ALL_VERBS.find(x=>x.id===verbId);
  renderVerbCard(v, v.estimated ? 'estimated' : null);
}

function renderVerbCard(v, badgeType){
  const el = document.getElementById('view-verbes');
  let badgeHtml = '';
  if(badgeType === 'estimated'){
    badgeHtml = `<div class="badge sage" style="margin-bottom:12px;">🌐 Traduction + conjugaison estimées automatiquement (règles de grammaire, sans IA) — vérifie avant d'apprendre par cœur</div>`;
  }
  let html = `
    <button class="btn secondary" style="margin-bottom:18px;" onclick="renderVerbsHome()">← Retour aux verbes</button>
    <div class="card">
      ${badgeHtml}
      <div class="verb-detail-head">
        <div class="ru-big">${v.ru}</div>
        <div class="translit">${v.translit||''}</div>
        <span class="badge amber">${v.group}</span>
        ${v.tag ? `<span class="badge sage">${v.tag==='mouvement' ? '🏃 verbe de mouvement' : '🔄 verbe réfléchi'}</span>` : ''}
      </div>
      <p style="color:var(--slate); font-size:14px; margin:2px 0 0;">${v.fr}${v.perfectif ? ` &nbsp;·&nbsp; perfectif : <b class="ru" style="font-family:'PT Serif',serif;">${v.perfectif.ru}</b> (${v.perfectif.translit||''})` : ' · pas de perfectif courant'}</p>
  `;
  if(v.present){
    html += `<div class="verb-section-title">${ic('type',14)} Présent (imperfectif)</div><table class="conj-table">${Object.entries(v.present).map(([p,f])=>conjRow(p,f)).join('')}</table>`;
  } else if(v.presentNote){
    html += `<div class="verb-section-title">${ic('type',14)} Présent</div><p style="font-size:13.5px; color:var(--slate);">${v.presentNote}</p>`;
  }
  html += `<div class="verb-section-title">${ic('refresh',14)} Passé</div>`;
  if(v.past){
    html += `<table class="conj-table">${Object.entries(v.past).map(([p,f])=>conjRow(p,f)).join('')}</table>`;
  } else {
    html += `<p style="font-size:13.5px; color:var(--slate);">${v.pastNote||'Non disponible.'}</p>`;
  }
  html += `<div class="verb-section-title">${ic('arrow',14)} Futur</div>`;
  if(v.futurePerfectif){
    html += `<p style="font-size:12.5px; color:var(--slate); margin:0 0 6px;">Conjugaison directe du perfectif (${v.perfectif.ru}) :</p><table class="conj-table">${Object.entries(v.futurePerfectif).map(([p,f])=>conjRow(p,f)).join('')}</table>`;
  } else if(v.future){
    html += `<table class="conj-table">${Object.entries(v.future).filter(([p])=>p!=='note').map(([p,f])=>conjRow(p,f)).join('')}</table>`;
  }
  html += `<div class="verb-section-title">${ic('check',14)} Impératif</div>`;
  if(v.imperative){
    html += `<table class="conj-table">${conjRow('tu (informel)', v.imperative.tu)}${conjRow('vous (poli/pluriel)', v.imperative.vous)}</table>`;
  } else {
    html += `<p style="font-size:13.5px; color:var(--slate);">${v.imperativeNote||'Impératif rarement utilisé pour ce verbe.'}</p>`;
  }
  if(v.examples && v.examples.length){
    html += `<div class="verb-section-title">💬 Exemples</div><table class="ex-table">${v.examples.map(e=>`<tr><td class="ru ru">${e[0]}</td><td class="fr">${e[1]}</td></tr>`).join('')}</table>`;
  }
  html += `<button class="btn secondary" style="margin-top:16px;" onclick="speak('${v.ru}')">${ic('headphones',14)} Écouter l'infinitif</button>`;
  html += `</div>`;
  el.innerHTML = html;
}

function guessRussianVerbData(ruRaw, frWord){
  const ru = ruRaw.trim().toLowerCase();
  // Si ce mot correspond déjà à un verbe (ou son perfectif) de la base curatée, on réutilise ces données fiables
  const curated = VERBS.find(v => v.ru === ru || (v.perfectif && v.perfectif.ru === ru));
  if(curated) return Object.assign({}, curated, {fr: frWord, estimated:false});

  let cat='irr', group='terminaison irrégulière (estimation limitée)';
  let present=null, presentNote=null;

  if(ru.endsWith('овать') || ru.endsWith('евать')){
    const base = ru.slice(0,-4); // garde la consonne avant -овать/-евать, ex: рисовать -> рис + "ов" retiré... on retire 4 lettres "овать"->garder "-у-"
    const stem = ru.slice(0,-5); // radical avant "овать"/"евать"
    cat='1'; group='1er groupe (-овать/-евать, estimé)';
    present = {'я':stem+'ую','ты':stem+'уешь','он/она':stem+'ует','мы':stem+'уем','вы':stem+'уете','они':stem+'уют'};
  } else if(ru.endsWith('ить')){
    const stem = ru.slice(0,-3);
    cat='2'; group='2e groupe (-ить, estimé)';
    present = {'я':stem+'ю','ты':stem+'ишь','он/она':stem+'ит','мы':stem+'им','вы':stem+'ите','они':stem+'ят'};
    presentNote = "Estimation : certains verbes ont une mutation de consonne à la 1ère personne (ex. любить → люблю) non prise en compte ici.";
  } else if(ru.endsWith('ать') || ru.endsWith('ять')){
    const stem = ru.slice(0,-2);
    cat='1'; group='1er groupe (-ать/-ять, estimé)';
    present = {'я':stem+'ю','ты':stem+'ешь','он/она':stem+'ет','мы':stem+'ем','вы':stem+'ете','они':stem+'ют'};
  } else if(ru.endsWith('еть')){
    const stem = ru.slice(0,-3);
    cat='2'; group='infinitif en -еть (souvent proche du 2e groupe, estimé)';
    present = {'я':stem+'ю','ты':stem+'ишь','он/она':stem+'ит','мы':stem+'им','вы':stem+'ите','они':stem+'ят'};
    presentNote = "Estimation approximative : les infinitifs en -еть suivent parfois le 1er groupe, parfois le 2e.";
  } else {
    presentNote = "Ce verbe a une terminaison peu courante (-ти, -чь...) : la conjugaison ne peut pas être devinée de façon fiable par une simple règle. Vérifie sur un dictionnaire de conjugaison russe (ex. Wiktionnaire, Reverso Conjugation).";
  }

  let past=null, pastNote=null;
  if(ru.endsWith('ть')){
    const pstem = ru.slice(0,-2);
    past = {'masculin':pstem+'л','féminin':pstem+'ла','neutre':pstem+'ло','pluriel':pstem+'ли'};
  } else {
    pastNote = "Passé probablement irrégulier pour cette terminaison : non généré automatiquement.";
  }

  const future = {'я':'буду '+ru, note:true};

  let imperative=null, imperativeNote=null;
  if(present){
    const ty = present['ты'];
    let base2 = null;
    if(ty.endsWith('ешь') || ty.endsWith('ишь')) base2 = ty.slice(0,-3);
    if(base2){
      const last = base2.slice(-1);
      if(VOWELS_RU.includes(last)){
        imperative = {tu:base2+'й', vous:base2+'йте'};
      } else {
        imperative = {tu:base2+'и', vous:base2+'ите'};
      }
    }
  }
  if(!imperative) imperativeNote = "Impératif non généré automatiquement pour ce verbe.";

  return {
    ru: ruRaw, translit:'', group, cat, tag:null, perfectif:null,
    present, presentNote, past, pastNote, future, imperative, imperativeNote,
    examples: [], fr: frWord, estimated:true
  };
}

async function fetchFreeTranslationFR2RU(text){
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fr|ru`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('Service de traduction indisponible (code ' + res.status + ')');
  const data = await res.json();
  const translated = data && data.responseData && data.responseData.translatedText;
  if(!translated) throw new Error('Aucune traduction trouvée pour ce mot.');
  return translated.trim();
}

async function searchVerbWithAI(frWord){
  const results = document.getElementById('verb-results');
  if(results) results.style.display = 'none';
  const el = document.getElementById('view-verbes');

  // Si déjà présent (base locale, liste étendue, ou déjà cherché précédemment), on l'affiche directement sans re-solliciter le service
  const q = deburr(frWord);
  const existing = ALL_VERBS.find(v => deburr(v.fr) === q);
  if(existing){
    if(existing.present || existing.presentNote || existing.past || existing.pastNote){
      renderVerbCard(existing, existing.estimated ? 'estimated' : null);
    } else {
      showFreqVerb(existing.ru, existing.fr);
    }
    return;
  }

  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:18px;" onclick="renderVerbsHome()">← Retour aux verbes</button>
    <div class="card" style="text-align:center; padding:40px 20px;">
      <p style="color:var(--slate);">Recherche de « ${frWord} »...</p>
    </div>`;
  try{
    const ru = await fetchFreeTranslationFR2RU(frWord);
    // Un verbe russe traduit ne se termine presque jamais par un simple point ou une majuscule parasite
    const cleanedRu = ru.replace(/[.!?]+$/,'').trim().toLowerCase();
    const looksLikeVerbInfinitive = /^[а-яё\-]+(ться|тся|ть|ти|чь)$/.test(cleanedRu);

    if(!looksLikeVerbInfinitive){
      el.innerHTML = `
        <button class="btn secondary" style="margin-bottom:18px;" onclick="renderVerbsHome()">← Retour aux verbes</button>
        <div class="card">
          <p style="color:var(--rust); margin-bottom:10px;">Le mot trouvé pour « ${frWord} » est <b class="ru" style="font-family:'PT Serif',serif; font-size:18px;">${cleanedRu}</b>, mais ça ne ressemble pas à un infinitif verbal russe (il ne se termine pas en -ть/-ти/-чь).</p>
          <p style="color:var(--slate); font-size:13.5px; line-height:1.6;">Deux explications possibles :<br>
          • Le russe n'a pas de verbe simple pour cette idée, et utilise un nom ou une expression à la place (ex. « procrastiner » → « прокрастинация », un nom).<br>
          • Le service de traduction gratuit s'est trompé sur ce mot précis.</p>
          <p style="color:var(--slate); font-size:13.5px; margin-top:10px;">Essaie une formulation plus simple ou un synonyme (ex. « retarder », « reporter »), ou vérifie ce mot sur <a href="https://fr.wiktionary.org" target="_blank" style="color:var(--amber-deep);">Wiktionnaire</a>.</p>
        </div>`;
      return;
    }

    const guessed = guessRussianVerbData(cleanedRu, frWord);
    guessed.id = 'c-' + deburr(frWord).replace(/[^a-z0-9]+/g,'-') + '-' + Date.now();

    CUSTOM_VERBS.push(guessed);
    ALL_VERBS.push(guessed);
    sSet('verbs:custom', CUSTOM_VERBS);

    renderVerbCard(guessed, guessed.estimated ? 'estimated' : null);
  }catch(e){
    el.innerHTML = `
      <button class="btn secondary" style="margin-bottom:18px;" onclick="renderVerbsHome()">← Retour aux verbes</button>
      <div class="card">
        <p style="color:var(--rust); margin-bottom:6px;">La recherche a échoué.</p>
        <p style="color:var(--slate); font-size:12.5px; font-family:monospace; word-break:break-word;">${(e.message||String(e)).replace(/</g,'&lt;')}</p>
        <button class="btn amber" style="margin-top:14px;" onclick="searchVerbWithAI('${frWord.replace(/'/g,"\\'")}')">Réessayer</button>
      </div>`;
  }
}
