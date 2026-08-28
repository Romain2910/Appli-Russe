/* =========================================================
   EXAMENS
   ========================================================= */

let examQuestions = [], examIdx = 0, examScore = 0, examAnswered = false;

function buildExam(){
  const qs = [];
  const vocab = shuffle(ALL_CARDS).slice(0,6);
  vocab.forEach(c=>{
    const distractors = shuffle(ALL_CARDS.filter(x=>x.id!==c.id)).slice(0,2).map(x=>x.fr);
    const options = shuffle([c.fr, ...distractors]);
    qs.push({type:'vocab', text:`Que signifie « ${c.ru} » ?`, options, answer: options.indexOf(c.fr)});
  });
  const gram = shuffle(LESSONS.flatMap(l=>l.quiz)).slice(0,4);
  gram.forEach(q=> qs.push({type:'grammaire', text:q.q, options:q.o, answer:q.a}));
  const listen = shuffle(ALL_CARDS).slice(0,2);
  listen.forEach(c=>{
    const distractors = shuffle(ALL_CARDS.filter(x=>x.id!==c.id)).slice(0,2).map(x=>x.fr);
    const options = shuffle([c.fr, ...distractors]);
    qs.push({type:'écoute', text:`Écoute et choisis la bonne traduction.`, audio:c.ru, options, answer: options.indexOf(c.fr)});
  });
  return shuffle(qs);
}

function renderExamHome(){
  const el = document.getElementById('view-exam');
  const last = EXAMS[EXAMS.length-1];
  el.innerHTML = `
    <div class="eyebrow">Module 8</div>
    <h1 class="pagetitle">Examens</h1>
    <p class="pagesub">Un quiz de 12 questions mêlant vocabulaire, grammaire et écoute pour tester ton niveau global.</p>
    <div class="card" style="margin-bottom:20px;">
      <h3 style="margin:0 0 6px;">Historique</h3>
      ${EXAMS.length===0 ? '<p style="color:var(--slate); font-size:13.5px;">Aucun examen passé pour l\'instant.</p>' :
        `<p style="color:var(--slate); font-size:13.5px;">${EXAMS.length} examen(s) passé(s). Dernier score : <b>${last.score}/${last.total}</b> (${last.date}).</p>`}
    </div>
    <button class="btn amber" onclick="startExam()">${ic('award',15)} Commencer un nouvel examen</button>
  `;
}

function startExam(){
  examQuestions = buildExam(); examIdx = 0; examScore = 0;
  renderExamQuestion();
}

function renderExamQuestion(){
  const el = document.getElementById('view-exam');
  if(examIdx >= examQuestions.length){
    const t = todayStr();
    EXAMS.push({date:t, score:examScore, total:examQuestions.length});
    sSet('progress:exams', EXAMS);
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge ${examScore/examQuestions.length>=0.7?'sage':'rust'}" style="margin-bottom:10px;">Examen terminé</div>
        <div class="score">${examScore} / ${examQuestions.length}</div>
        <p style="color:var(--slate);">${examScore/examQuestions.length>=0.7 ? 'Excellent travail, continue ainsi !' : 'Encore un peu de pratique et ça viendra.'}</p>
        <button class="btn amber" onclick="renderExamHome()">Retour</button>
      </div>`;
    return;
  }
  examAnswered = false;
  const q = examQuestions[examIdx];
  el.innerHTML = `
    <div class="exam-progress"><div style="width:${(examIdx/examQuestions.length)*100}%;"></div></div>
    <div class="badge amber" style="margin-bottom:10px;">${q.type}</div>
    <div class="card">
      <div class="qtext" style="font-size:17px; margin-bottom:14px;">${q.text}</div>
      ${q.audio ? `<button class="btn secondary" style="margin-bottom:14px;" onclick="speak('${q.audio.replace(/'/g,"")}')">${ic('headphones',14)} Écouter</button>` : ''}
      <div id="exam-opts">${q.options.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join('')}</div>
      <div id="exam-next" style="margin-top:14px;"></div>
    </div>
  `;
  if(q.audio) setTimeout(()=>speak(q.audio),300);
  document.querySelectorAll('#exam-opts .opt').forEach(btn=>{
    btn.onclick = ()=>{
      if(examAnswered) return;
      examAnswered = true;
      const oi = +btn.dataset.oi;
      document.querySelectorAll('#exam-opts .opt').forEach(s=>{ s.disabled=true; if(+s.dataset.oi===q.answer) s.classList.add('correct'); });
      if(oi === q.answer) examScore += 1; else btn.classList.add('wrong');
      document.getElementById('exam-next').innerHTML = `<button class="btn amber" onclick="examIdx+=1; renderExamQuestion();">${examIdx+1<examQuestions.length?'Question suivante':'Voir le résultat'}</button>`;
    };
  });
}
