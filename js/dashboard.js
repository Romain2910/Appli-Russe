/* =========================================================
   TABLEAU DE BORD — parcours du jour, unites, session mixte, revision espacee
   ========================================================= */

function buildUnitTest(unitIdx){
  const content = unitContent(unitIdx);
  const qs = [];
  const vocabCards = ALL_CARDS.filter(c=>content.vocabIds.includes(c.id));
  const vocabPool = vocabCards.length ? vocabCards : ALL_CARDS;
  shuffle(vocabPool).slice(0,6).forEach(c=>{
    const distractors = shuffle(ALL_CARDS.filter(x=>x.id!==c.id)).slice(0,2).map(x=>x.fr);
    const options = shuffle([c.fr, ...distractors]);
    qs.push({skill:'écrit', type:'mcq', text:`Que signifie « ${c.ru} » ?`, options, answer:options.indexOf(c.fr)});
  });
  const lessons = content.lessonIds.map(id=>LESSONS.find(l=>l.id===id)).filter(Boolean);
  const gramPool = lessons.length ? lessons.flatMap(l=>l.quiz) : shuffle(LESSONS).slice(0,3).flatMap(l=>l.quiz);
  shuffle(gramPool).slice(0,4).forEach(q=>{
    qs.push({skill:'écrit', type:'mcq', text:q.q, options:q.o, answer:q.a});
  });
  shuffle(vocabPool).slice(0,3).forEach(c=>{
    const distractors = shuffle(ALL_CARDS.filter(x=>x.id!==c.id)).slice(0,2).map(x=>x.fr);
    const options = shuffle([c.fr, ...distractors]);
    qs.push({skill:'écoute', type:'mcq', text:'Écoute et choisis la bonne traduction.', audio:c.ru, options, answer:options.indexOf(c.fr)});
  });
  const oralPool = ORAL_BANK.filter(o=>content.oralIds.includes(o.id));
  const oralSrc = oralPool.length ? oralPool : shuffle(ORAL_BANK).slice(0,3);
  shuffle(oralSrc).slice(0,3).forEach(o=>{
    qs.push({skill:'oral', type:'speak', text:'Prononce cette phrase à voix haute :', target:o.ru, translit:o.translit, fr:o.fr});
  });
  const readingText = content.readingId ? TEXTS.find(t=>t.id===content.readingId) : null;
  if(readingText && readingText.q && readingText.q.length){
    shuffle(readingText.q).slice(0,2).forEach(q=>{
      qs.push({skill:'lecture', type:'mcq', text:q.q, options:q.o, answer:q.a, passage:readingText});
    });
  }
  const listenText = content.listeningId ? LISTEN_TEXTS.find(t=>t.id===content.listeningId) : null;
  if(listenText && listenText.q && listenText.q.length){
    shuffle(listenText.q).slice(0,2).forEach(q=>{
      qs.push({skill:'écoute-texte', type:'mcq', text:q.q, options:q.o, answer:q.a, passage:listenText});
    });
  }
  return shuffle(qs);
}

function startUnitTest(unitIdx){
  unitTestUnitIdx = unitIdx;
  unitTestQuestions = buildUnitTest(unitIdx);
  unitTestIdx = 0; unitTestScore = 0;
  showSession();
  renderUnitTestQuestion();
}

function renderUnitTestQuestion(){
  const el = document.getElementById('view-mix');
  if(unitTestIdx >= unitTestQuestions.length){
    const total = unitTestQuestions.length;
    const passed = total>0 && (unitTestScore/total) >= 0.7;
    UNIT_RESULTS[unitTestUnitIdx] = { passed, score:unitTestScore, total, date: todayStr() };
    sSet('curriculum:units', UNIT_RESULTS);
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge ${passed?'sage':'rust'}" style="margin-bottom:10px;">${passed ? 'Unité validée ✓' : 'Pas encore validé'}</div>
        <div class="score">${unitTestScore} / ${total}</div>
        <p style="color:var(--slate);">${passed ? "Bravo, l'unité suivante est débloquée !" : 'Il faut au moins 70% pour valider. Retente le test quand tu veux, sans limite.'}</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          ${!passed ? `<button class="btn secondary" onclick="startUnitTest(${unitTestUnitIdx})">Retenter le test</button>` : ''}
          <button class="btn amber" onclick="goTo('dashboard')">Retour au parcours</button>
        </div>
      </div>`;
    return;
  }
  unitTestAnswered = false;
  const q = unitTestQuestions[unitTestIdx];
  const skillBadge = {'écrit':'✍️ Écrit', 'écoute':'🎧 Écoute', 'oral':'🗣️ Oral', 'lecture':'📖 Lecture', 'écoute-texte':'👂 Compréhension orale'}[q.skill];
  const quitBtn = `<button class="btn secondary" style="margin-bottom:14px;" onclick="goTo('dashboard')">Quitter le test</button>`;
  if(q.type === 'mcq'){
    const passageBlock = !q.passage ? '' : q.skill==='lecture'
      ? `<div class="card" style="background:#E9E7DE; margin-bottom:14px;">
           <div class="ru" style="font-size:15px; line-height:1.6; margin-bottom:10px;">${stripGloss(q.passage.ru)}</div>
           <button type="button" class="btn secondary" id="ut-toggle-fr" style="font-size:12.5px;">Voir la traduction</button>
           <div id="ut-fr-text" style="display:none; margin-top:10px; font-size:13px; color:var(--slate);">${q.passage.fr}</div>
         </div>`
      : `<div class="card" style="background:#E9E7DE; margin-bottom:14px; text-align:center;">
           <button type="button" class="btn amber" id="ut-play-audio">${ic('headphones',15)} Écouter le texte</button>
           <p style="font-size:12px; color:var(--slate); margin:10px 0 0;">Réécoute autant de fois que nécessaire avant de répondre.</p>
         </div>`;
    el.innerHTML = `
      ${quitBtn}
      <div class="exam-progress"><div style="width:${(unitTestIdx/unitTestQuestions.length)*100}%;"></div></div>
      <div class="badge amber" style="margin-bottom:10px;">${skillBadge} — question ${unitTestIdx+1}/${unitTestQuestions.length}</div>
      ${passageBlock}
      <div class="card">
        <div class="qtext" style="font-size:17px; margin-bottom:14px;">${q.text}</div>
        ${q.audio ? `<button class="btn secondary" style="margin-bottom:14px;" onclick="speak('${q.audio.replace(/'/g,"")}')">${ic('headphones',14)} Écouter</button>` : ''}
        <div id="ut-opts">${q.options.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join('')}</div>
        <div id="ut-next" style="margin-top:14px;"></div>
      </div>`;
    if(q.audio) setTimeout(()=>speak(q.audio),300);
    if(q.skill==='lecture'){
      document.getElementById('ut-toggle-fr').onclick = ()=>{
        const fr = document.getElementById('ut-fr-text');
        const show = fr.style.display === 'none';
        fr.style.display = show ? 'block' : 'none';
        document.getElementById('ut-toggle-fr').textContent = show ? 'Cacher la traduction' : 'Voir la traduction';
      };
    }
    if(q.skill==='écoute-texte'){
      document.getElementById('ut-play-audio').onclick = ()=>speak(q.passage.ru);
    }
    el.querySelectorAll('#ut-opts .opt').forEach(btn=>{
      btn.onclick = ()=>{
        if(unitTestAnswered) return;
        unitTestAnswered = true;
        const oi = +btn.dataset.oi;
        el.querySelectorAll('#ut-opts .opt').forEach(s=>{ s.disabled=true; if(+s.dataset.oi===q.answer) s.classList.add('correct'); });
        if(oi===q.answer){ unitTestScore += 1; } else btn.classList.add('wrong');
        document.getElementById('ut-next').innerHTML = `<button class="btn amber" onclick="unitTestIdx+=1; renderUnitTestQuestion();">${unitTestIdx+1<unitTestQuestions.length?'Question suivante':'Voir le résultat'}</button>`;
      };
    });
  } else if(q.type === 'speak'){
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    el.innerHTML = `
      ${quitBtn}
      <div class="exam-progress"><div style="width:${(unitTestIdx/unitTestQuestions.length)*100}%;"></div></div>
      <div class="badge amber" style="margin-bottom:10px;">${skillBadge} — question ${unitTestIdx+1}/${unitTestQuestions.length}</div>
      <div class="card">
        <div class="qtext" style="font-size:15.5px; margin-bottom:10px;">${q.text}</div>
        <div class="ru" style="font-size:21px; margin-bottom:4px;">${q.target}</div>
        <div style="font-size:13px; color:var(--slate); margin-bottom:14px;">${q.translit||''} — « ${q.fr} »</div>
        <button class="iconbtn" style="margin-bottom:14px;" onclick="speak('${q.target.replace(/'/g,"")}')">${ic('headphones',15)} Écouter le modèle</button>
        <div id="ut-speak-zone"></div>
      </div>`;
    const zone = document.getElementById('ut-speak-zone');
    if(SR){
      zone.innerHTML = `<button class="iconbtn rec" id="ut-rec" aria-label="S'enregistrer">${ic('mic',18)}</button><div id="ut-speak-fb" style="margin-top:10px; font-size:13.5px;"></div>`;
      document.getElementById('ut-rec').onclick = ()=>{
        const rec = new SR();
        rec.lang = 'ru-RU'; rec.interimResults = false; rec.maxAlternatives = 1;
        const fb = document.getElementById('ut-speak-fb');
        document.getElementById('ut-rec').classList.add('active');
        fb.textContent = 'Écoute en cours...';
        rec.onresult = (e)=>{
          const said = e.results[0][0].transcript;
          const score = similarity(said.replace(/[.,!?]/g,''), q.target.replace(/[.,!?]/g,''));
          fb.innerHTML = `Tu as dit : « ${said} » — <b style="color:${score>=60?'var(--sage)':'var(--rust)'}">${score}%</b>`;
          if(!unitTestAnswered){
            unitTestAnswered = true;
            if(score>=60) unitTestScore += 1;
            zone.innerHTML += `<div style="margin-top:12px;"><button class="btn amber" onclick="unitTestIdx+=1; renderUnitTestQuestion();">${unitTestIdx+1<unitTestQuestions.length?'Question suivante':'Voir le résultat'}</button></div>`;
          }
        };
        rec.onerror = ()=>{ fb.textContent = 'Micro indisponible — vérifie les autorisations du navigateur.'; document.getElementById('ut-rec').classList.remove('active'); };
        rec.onend = ()=>{ document.getElementById('ut-rec').classList.remove('active'); };
        try{ rec.start(); }catch(e){ fb.textContent = 'Erreur au démarrage du micro.'; }
      };
    } else {
      zone.innerHTML = `
        <p style="font-size:13px; color:var(--slate); margin-bottom:10px;">Reconnaissance vocale indisponible sur ce navigateur (essaie Chrome) — dis la phrase à voix haute puis auto-évalue-toi :</p>
        <div style="display:flex; gap:10px;">
          <button class="btn secondary" onclick="gradeSpeakFallback(false)">À retravailler</button>
          <button class="btn amber" onclick="gradeSpeakFallback(true)">Je l'ai bien dit</button>
        </div>`;
    }
  }
}

function gradeSpeakFallback(ok){
  if(unitTestAnswered) return;
  unitTestAnswered = true;
  if(ok) unitTestScore += 1;
  unitTestIdx += 1;
  renderUnitTestQuestion();
}

function buildCurriculumPlan(){
  const lessonsSeq = ['A1','A2','B1'].flatMap(lvl => LESSONS.filter(l=>l.cefr===lvl));
  const vocabSeq = ALL_CARDS;
  const verbSeq = VERBS;
  const oralSeq = ['A1','A2','B1'].flatMap(lvl => ORAL_BANK.filter(o=>o.level===lvl));
  const textSeq = ['A1','A2','B1'].flatMap(lvl => TEXTS.filter(t=>t.level===lvl));
  const listenSeq = ['A1','A2','B1'].flatMap(lvl => LISTEN_TEXTS.filter(t=>t.level===lvl));
  const plan = [];
  let k = 0, consolidationCount = 0;
  while(k < lessonsSeq.length || k*CURRICULUM_NEW_PER_DAY.vocab < vocabSeq.length){
    const lesson = lessonsSeq[k] || null;
    const vocab = vocabSeq.slice(k*CURRICULUM_NEW_PER_DAY.vocab, k*CURRICULUM_NEW_PER_DAY.vocab + CURRICULUM_NEW_PER_DAY.vocab);
    const verb = verbSeq[k] || null;
    const oral = oralSeq.slice(k*CURRICULUM_NEW_PER_DAY.oral, k*CURRICULUM_NEW_PER_DAY.oral + CURRICULUM_NEW_PER_DAY.oral);
    plan.push({
      type:'new',
      lessonId: lesson ? lesson.id : null,
      vocabIds: vocab.map(c=>c.id),
      verbId: verb ? verb.id : null,
      oralIds: oral.map(o=>o.id)
    });
    k++;
    if(k % 5 === 0 && lessonsSeq[k-1]){
      const readingItem = textSeq[consolidationCount % textSeq.length] || null;
      const listenItem = listenSeq[consolidationCount % listenSeq.length] || null;
      plan.push({
        type:'consolidation',
        lessonId: lessonsSeq[k-1].id,
        readingId: readingItem ? readingItem.id : null,
        listeningId: listenItem ? listenItem.id : null
      });
      consolidationCount++;
    }
  }
  return plan;
}

function getCurriculumPlan(){
  if(!CURRICULUM_PLAN) CURRICULUM_PLAN = buildCurriculumPlan();
  return CURRICULUM_PLAN;
}

function registerCurriculumIntroductions(dayEntry, dayIdx){
  const keys = [];
  if(dayEntry.lessonId) keys.push('gram-'+dayEntry.lessonId);
  (dayEntry.vocabIds||[]).forEach(id=>keys.push(id));
  if(dayEntry.verbId) keys.push('verb-'+dayEntry.verbId);
  (dayEntry.oralIds||[]).forEach(id=>keys.push('oral-'+id));
  let changed = false;
  keys.forEach(key=>{
    if(CURRICULUM_INTRODUCED[key] === undefined){
      CURRICULUM_INTRODUCED[key] = dayIdx;
      if(!SRS[key]) srsGrade(key, 3); // amorce dans le magasin SRS unifié
      changed = true;
    }
  });
  if(changed) sSet('curriculum:introduced', CURRICULUM_INTRODUCED);
}

function curriculumReviewsDue(){
  const due = [];
  Object.entries(CURRICULUM_INTRODUCED).forEach(([key, introDay])=>{
    const delta = CURRICULUM_DAY - introDay;
    if(REVIEW_OFFSETS.includes(delta)) due.push({key, delta});
  });
  return due;
}

function curriculumItemForKey(key){
  if(key.startsWith('gram-')){ const id=key.slice(5); return {type:'gram', data: LESSONS.find(l=>l.id===id)}; }
  if(key.startsWith('verb-')){ const id=key.slice(5); return {type:'verb', data: VERBS.find(v=>v.id===id)}; }
  if(key.startsWith('oral-')){ const id=key.slice(5); return {type:'oral', data: ORAL_BANK.find(o=>o.id===id)}; }
  return {type:'flash', data: ALL_CARDS.find(c=>c.id===key)};
}

function showSession(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-mix').classList.add('active');
  window.scrollTo(0,0);
}

function startParcoursReview(){
  const due = curriculumReviewsDue();
  parcoursReviewQueue = shuffle(due.map(d=>curriculumItemForKey(d.key)).filter(it=>it.data));
  parcoursReviewIdx = 0; parcoursReviewFlipped = false; parcoursGramQ = null;
  showSession();
  renderParcoursReview();
}

function renderParcoursReview(){
  const el = document.getElementById('view-mix');
  if(parcoursReviewQueue.length === 0){
    el.innerHTML = `<div class="empty">${ic('refresh',30)}<p>Rien à réviser dans le programme aujourd'hui.</p><button class="btn secondary" onclick="goTo('dashboard')">Retour</button></div>`;
    return;
  }
  if(parcoursReviewIdx >= parcoursReviewQueue.length){
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge sage" style="margin-bottom:10px;">Révision du jour terminée</div>
        <div class="score">${parcoursReviewQueue.length} élément(s) revus</div>
        <p style="color:var(--slate);">À demain pour la suite du programme !</p>
        <button class="btn amber" onclick="goTo('dashboard')">Retour au parcours</button>
      </div>`;
    return;
  }
  const item = parcoursReviewQueue[parcoursReviewIdx];
  const progressHtml = `<p style="color:var(--slate); font-size:13px; margin-bottom:10px;">Révision du programme — ${parcoursReviewIdx+1} / ${parcoursReviewQueue.length}</p>`;
  const quitBtn = `<button class="btn secondary" style="margin-bottom:14px;" onclick="goTo('dashboard')">Quitter</button>`;

  if(item.type === 'flash'){
    const c = item.data;
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge amber" style="margin-bottom:10px;">📇 Vocabulaire</div>
      <div class="flip-stage">
        <div class="flashcard" onclick="flipParcoursCard()">
          <div class="big ru">${c.ru}</div>
          <div class="sub">${c.translit}</div>
          <div class="fr" id="pr-answer" style="display:none;">${c.fr}</div>
          <div class="hint" id="pr-hint">Clique pour révéler la traduction</div>
        </div>
        <div class="grade-row" id="pr-grade-row" style="display:none;">
          <button class="btn secondary" onclick="gradeParcoursItem(1)">Encore</button>
          <button class="btn secondary" onclick="gradeParcoursItem(3)">Bien</button>
          <button class="btn amber" onclick="gradeParcoursItem(5)">Facile</button>
        </div>
        <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${c.ru.replace(/'/g,"")}')" aria-label="Écouter">${ic('headphones',16)}</button>
      </div>`;
  } else if(item.type === 'verb'){
    const v = item.data;
    const presentSample = v.present ? Object.entries(v.present).slice(0,3).map(([p,f])=>`${p} — ${f}`).join(' · ') : (v.presentNote||'');
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge sage" style="margin-bottom:10px;">🔄 Verbe</div>
      <div class="flip-stage">
        <div class="flashcard" onclick="flipParcoursCard()">
          <div class="big" style="font-size:22px;">${v.fr}</div>
          <div class="fr ru" id="pr-answer" style="display:none;">
            <div style="font-size:22px;">${v.ru}</div>
            <div class="sub" style="margin:4px 0 8px;">${v.translit||''}</div>
            <div style="font-size:12.5px; color:var(--slate);">${presentSample}</div>
          </div>
          <div class="hint" id="pr-hint">Clique pour révéler la conjugaison</div>
        </div>
        <div class="grade-row" id="pr-grade-row" style="display:none;">
          <button class="btn secondary" onclick="gradeParcoursItem(1)">Encore</button>
          <button class="btn secondary" onclick="gradeParcoursItem(3)">Bien</button>
          <button class="btn amber" onclick="gradeParcoursItem(5)">Facile</button>
        </div>
        <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${v.ru}')" aria-label="Écouter">${ic('headphones',16)}</button>
      </div>`;
  } else if(item.type === 'oral'){
    const o = item.data;
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge" style="margin-bottom:10px; background:var(--ink); color:#fff;">🎙️ Oral</div>
      <div class="flip-stage">
        <div class="flashcard" onclick="flipParcoursCard()">
          <div class="big" style="font-size:20px;">${o.fr}</div>
          <div class="fr ru" id="pr-answer" style="display:none;">
            <div style="font-size:20px;">${o.ru}</div>
            <div class="sub" style="margin:4px 0 0;">${o.translit||''}</div>
          </div>
          <div class="hint" id="pr-hint">Clique pour révéler la phrase russe</div>
        </div>
        <div class="grade-row" id="pr-grade-row" style="display:none;">
          <button class="btn secondary" onclick="gradeParcoursItem(1)">Encore</button>
          <button class="btn secondary" onclick="gradeParcoursItem(3)">Bien</button>
          <button class="btn amber" onclick="gradeParcoursItem(5)">Facile</button>
        </div>
        <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${o.ru.replace(/'/g,"")}')" aria-label="Écouter">${ic('headphones',16)}</button>
      </div>`;
  } else if(item.type === 'gram'){
    const l = item.data;
    const _pex = lessonExercises(l).filter(x=>x.kind==='qcm'); parcoursGramQ = _pex[Math.floor(Math.random()*_pex.length)];
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge" style="margin-bottom:10px; background:var(--ink); color:#fff;">📖 Grammaire — ${l.title}</div>
      <div class="quiz-q" id="pr-gram-block">
        <div class="qtext">${parcoursGramQ.q}</div>
        ${parcoursGramQ.o.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join('')}
      </div>`;
    el.querySelectorAll('#pr-gram-block .opt').forEach(btn=>{
      btn.onclick = ()=>{
        const oi = +btn.dataset.oi;
        const correct = (oi === parcoursGramQ.a);
        el.querySelectorAll('#pr-gram-block .opt').forEach(s=>{
          s.disabled = true;
          if(+s.dataset.oi === parcoursGramQ.a) s.classList.add('correct');
        });
        if(!correct) btn.classList.add('wrong');
        srsGrade('gram-'+l.id, correct ? 5 : 1);
        setTimeout(()=>{ parcoursReviewIdx += 1; renderParcoursReview(); }, correct ? 500 : 1400);
      };
    });
  }
}

function flipParcoursCard(){
  if(parcoursReviewFlipped) return;
  parcoursReviewFlipped = true;
  document.getElementById('pr-answer').style.display = 'block';
  document.getElementById('pr-hint').style.display = 'none';
  document.getElementById('pr-grade-row').style.display = 'flex';
}

function gradeParcoursItem(quality){
  const item = parcoursReviewQueue[parcoursReviewIdx];
  const key = item.type==='flash' ? item.data.id : item.type==='verb' ? 'verb-'+item.data.id : item.type==='oral' ? 'oral-'+item.data.id : null;
  if(key) srsGrade(key, quality);
  parcoursReviewIdx += 1; parcoursReviewFlipped = false;
  renderParcoursReview();
}

function startTodayVocabPractice(){
  const plan = getCurriculumPlan();
  const dayIdx = Math.min(CURRICULUM_DAY, plan.length-1);
  const ids = plan[dayIdx].vocabIds || [];
  reviewQueue = ALL_CARDS.filter(c=>ids.includes(c.id));
  reviewIdx = 0; cardFlipped = false;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-flashcards').classList.add('active');
  window.scrollTo(0,0);
  renderReview();
}

function startExampleDrill(lessonId){
  const l = LESSONS.find(x=>x.id===lessonId);
  if(!l || !l.examples || l.examples.length===0){ goTo('dashboard'); return; }
  exampleDrillLessonId = lessonId;
  exampleDrillQueue = shuffle(l.examples.slice());
  exampleDrillIdx = 0; exampleDrillFlipped = false;
  showSession();
  renderExampleDrill();
}

function renderExampleDrill(){
  const el = document.getElementById('view-mix');
  const l = LESSONS.find(x=>x.id===exampleDrillLessonId);
  if(exampleDrillIdx >= exampleDrillQueue.length){
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge sage" style="margin-bottom:10px;">Renforcement terminé</div>
        <div class="score">${l.title}</div>
        <p style="color:var(--slate);">Encore quelques exemples ancrés — bien joué.</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button class="btn secondary" onclick="goTo('grammar'); renderLessonDetail('${l.id}')">Revoir la leçon complète</button>
          <button class="btn amber" onclick="goTo('dashboard')">Retour au parcours</button>
        </div>
      </div>`;
    return;
  }
  const ex = exampleDrillQueue[exampleDrillIdx];
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:14px;" onclick="goTo('dashboard')">Quitter</button>
    <div class="badge" style="margin-bottom:10px; background:var(--ink); color:#fff;">🔁 Renforcement — ${l.title}</div>
    <p style="color:var(--slate); font-size:13px; margin-bottom:10px;">Exemple ${exampleDrillIdx+1} / ${exampleDrillQueue.length}</p>
    <div class="flip-stage">
      <div class="flashcard" onclick="flipExampleDrill()">
        <div class="big" style="font-size:19px;">${ex[1]}</div>
        <div class="fr ru" id="ed-answer" style="display:none; font-size:20px;">${ex[0]}</div>
        <div class="hint" id="ed-hint">Essaie de formuler la phrase en russe, puis clique</div>
      </div>
      <div class="grade-row" id="ed-grade-row" style="display:none;">
        <button class="btn secondary" onclick="gradeExampleDrill(1)">Encore</button>
        <button class="btn secondary" onclick="gradeExampleDrill(3)">Bien</button>
        <button class="btn amber" onclick="gradeExampleDrill(5)">Facile</button>
      </div>
      <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${ex[0].replace(/'/g,"")}')" aria-label="Écouter">${ic('headphones',16)}</button>
    </div>
  `;
}

function flipExampleDrill(){
  if(exampleDrillFlipped) return;
  exampleDrillFlipped = true;
  document.getElementById('ed-answer').style.display = 'block';
  document.getElementById('ed-hint').style.display = 'none';
  document.getElementById('ed-grade-row').style.display = 'flex';
}

function gradeExampleDrill(quality){
  srsGrade('gram-'+exampleDrillLessonId, quality);
  exampleDrillIdx += 1; exampleDrillFlipped = false;
  renderExampleDrill();
}

function todayCounts(){
  const flashRev = ALL_CARDS.filter(c=>SRS[c.id] && SRS[c.id].next<=todayStr()).length;
  const flashNew = ALL_CARDS.filter(c=>!SRS[c.id]).length;
  const gramRev = LESSONS.filter(l=>SRS['gram-'+l.id] && SRS['gram-'+l.id].next<=todayStr()).length;
  const gramNew = LESSONS.filter(l=>!SRS['gram-'+l.id]).length;
  const verbRev = VERBS.filter(v=>SRS['verb-'+v.id] && SRS['verb-'+v.id].next<=todayStr()).length;
  const verbNew = VERBS.filter(v=>!SRS['verb-'+v.id]).length;
  return { reviews: flashRev+gramRev+verbRev, fresh: flashNew+gramNew+verbNew };
}

function buildMixQueue(limit){
  const t = todayStr();
  const flashRev = ALL_CARDS.filter(c=>SRS[c.id] && SRS[c.id].next<=t).map(c=>({type:'flash', data:c}));
  const gramRev = LESSONS.filter(l=>SRS['gram-'+l.id] && SRS['gram-'+l.id].next<=t).map(l=>({type:'gram', data:l}));
  const verbRev = VERBS.filter(v=>SRS['verb-'+v.id] && SRS['verb-'+v.id].next<=t).map(v=>({type:'verb', data:v}));
  let pool = shuffle(flashRev.concat(gramRev).concat(verbRev));
  if(pool.length < limit){
    const flashNew = ALL_CARDS.filter(c=>!SRS[c.id]).map(c=>({type:'flash', data:c}));
    const gramNew = LESSONS.filter(l=>!SRS['gram-'+l.id]).map(l=>({type:'gram', data:l}));
    const verbNew = VERBS.filter(v=>!SRS['verb-'+v.id]).map(v=>({type:'verb', data:v}));
    pool = pool.concat(shuffle(flashNew.concat(gramNew).concat(verbNew)));
  }
  return pool.slice(0, limit);
}

function startMixSession(){
  mixQueue = buildMixQueue(MIX_SESSION_SIZE);
  mixIdx = 0; mixFlipped = false; mixGramQ = null;
  goTo('mix');
}

function renderMixSession(){
  const el = document.getElementById('view-mix');
  if(mixQueue.length === 0){
    el.innerHTML = `<div class="empty">${ic('refresh',30)}<p>Rien à réviser pour l'instant — reviens plus tard !</p><button class="btn secondary" onclick="goTo('dashboard')">Retour au tableau de bord</button></div>`;
    return;
  }
  if(mixIdx >= mixQueue.length){
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge sage" style="margin-bottom:10px;">Session mix terminée</div>
        <div class="score">${mixQueue.length} élément(s) revus</div>
        <p style="color:var(--slate);">Un mélange de vocabulaire, grammaire et verbes — continue demain !</p>
        <button class="btn amber" onclick="goTo('dashboard')">Retour au tableau de bord</button>
      </div>`;
    return;
  }
  const item = mixQueue[mixIdx];
  const progressHtml = `<p style="color:var(--slate); font-size:13px; margin-bottom:10px;">Session mix — ${mixIdx+1} / ${mixQueue.length}</p>`;
  const quitBtn = `<button class="btn secondary" style="margin-bottom:14px;" onclick="goTo('dashboard')">Quitter</button>`;

  if(item.type === 'flash'){
    const c = item.data;
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge amber" style="margin-bottom:10px;">📇 Vocabulaire</div>
      <div class="flip-stage">
        <div class="flashcard" id="mix-card-el" onclick="flipMixCard()">
          <div class="big ru">${c.ru}</div>
          <div class="sub">${c.translit}</div>
          <div class="fr" id="mix-answer" style="display:none;">${c.fr}</div>
          <div class="hint" id="mix-hint">Clique pour révéler la traduction</div>
        </div>
        <div class="grade-row" id="mix-grade-row" style="display:none;">
          <button class="btn secondary" onclick="gradeMixItem(1)">Encore</button>
          <button class="btn secondary" onclick="gradeMixItem(3)">Bien</button>
          <button class="btn amber" onclick="gradeMixItem(5)">Facile</button>
        </div>
        <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${c.ru.replace(/'/g,"")}')" aria-label="Écouter">${ic('headphones',16)}</button>
      </div>`;
  } else if(item.type === 'verb'){
    const v = item.data;
    const presentSample = v.present ? Object.entries(v.present).slice(0,3).map(([p,f])=>`${p} — ${f}`).join(' · ') : (v.presentNote||'');
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge sage" style="margin-bottom:10px;">🔄 Verbe</div>
      <div class="flip-stage">
        <div class="flashcard" id="mix-card-el" onclick="flipMixCard()">
          <div class="big" style="font-size:22px;">${v.fr}</div>
          <div class="fr ru" id="mix-answer" style="display:none;">
            <div style="font-size:22px;">${v.ru}</div>
            <div class="sub" style="margin:4px 0 8px;">${v.translit||''}</div>
            <div style="font-size:12.5px; color:var(--slate);">${presentSample}</div>
          </div>
          <div class="hint" id="mix-hint">Clique pour révéler la conjugaison</div>
        </div>
        <div class="grade-row" id="mix-grade-row" style="display:none;">
          <button class="btn secondary" onclick="gradeMixItem(1)">Encore</button>
          <button class="btn secondary" onclick="gradeMixItem(3)">Bien</button>
          <button class="btn amber" onclick="gradeMixItem(5)">Facile</button>
        </div>
        <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${v.ru}')" aria-label="Écouter">${ic('headphones',16)}</button>
      </div>`;
  } else if(item.type === 'gram'){
    const l = item.data;
    const _mex = lessonExercises(l).filter(x=>x.kind==='qcm'); mixGramQ = _mex[Math.floor(Math.random()*_mex.length)];
    el.innerHTML = `${quitBtn}${progressHtml}
      <div class="badge" style="margin-bottom:10px; background:var(--ink); color:#fff;">📖 Grammaire — ${l.title}</div>
      <div class="quiz-q" id="mix-gram-block">
        <div class="qtext">${mixGramQ.q}</div>
        ${mixGramQ.o.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join('')}
      </div>`;
    el.querySelectorAll('#mix-gram-block .opt').forEach(btn=>{
      btn.onclick = ()=>{
        const oi = +btn.dataset.oi;
        const correct = (oi === mixGramQ.a);
        el.querySelectorAll('#mix-gram-block .opt').forEach(s=>{
          s.disabled = true;
          if(+s.dataset.oi === mixGramQ.a) s.classList.add('correct');
        });
        if(!correct) btn.classList.add('wrong');
        srsGrade('gram-'+l.id, correct ? 5 : 1);
        setTimeout(()=>{ mixIdx += 1; renderMixSession(); }, correct ? 500 : 1400);
      };
    });
  }
}

function flipMixCard(){
  if(mixFlipped) return;
  mixFlipped = true;
  document.getElementById('mix-answer').style.display = 'block';
  document.getElementById('mix-hint').style.display = 'none';
  document.getElementById('mix-grade-row').style.display = 'flex';
}

function gradeMixItem(quality){
  const item = mixQueue[mixIdx];
  const key = item.type==='flash' ? item.data.id : item.type==='verb' ? 'verb-'+item.data.id : null;
  if(key) srsGrade(key, quality);
  mixIdx += 1; mixFlipped = false;
  renderMixSession();
}

function caseWheelSVG(masteredSet){
  const cx=110, cy=110, R=76, nodeR=27;
  const keys = Object.keys(CASE_LABELS);
  let nodes='', spokes='';
  keys.forEach((k,i)=>{
    const ang = (Math.PI*2*i/6) - Math.PI/2;
    const x = cx + R*Math.cos(ang), y = cy + R*Math.sin(ang);
    const done = masteredSet.has(k);
    spokes += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${done?'#B3202F':'#D7D4C8'}" stroke-width="2"/>`;
    nodes += `<g class="wheel-node">
      <circle cx="${x}" cy="${y}" r="${nodeR}" fill="${done?'#B3202F':'#FBFAF7'}" stroke="${done?'#8C1824':'#D7D4C8'}" stroke-width="1.5"/>
      <text x="${x}" y="${y+4}" text-anchor="middle" font-family="PT Serif, serif" font-size="12" fill="${done?'#fff':'#16181F'}">${CASE_LABELS[k].slice(0,4)}.</text>
    </g>`;
  });
  return `<svg viewBox="0 0 220 220" width="220" height="220">
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="30" fill="#16181F"/>
    <text x="${cx}" y="${cy-2}" text-anchor="middle" fill="#F0EFEA" font-family="Fraunces, serif" font-size="12" font-weight="600">Падежи</text>
    <text x="${cx}" y="${cy+12}" text-anchor="middle" fill="#9A9AA5" font-size="9">les cas</text>
    ${nodes}
  </svg>`;
}

function renderUnitsOverview(currentUnitIdx){
  const total = totalUnitsCount();
  const unlockedCount = getUnlockedUnitCount();
  let html = '<div class="units-path">';
  for(let u=0; u<total; u++){
    const locked = u >= unlockedCount;
    const result = UNIT_RESULTS[u];
    const passed = result && result.passed;
    const isCurrent = u === currentUnitIdx;
    html += `<div class="unit-chip ${locked?'locked':''} ${passed?'passed':''} ${isCurrent?'current':''}" ${locked?'':`onclick="viewUnitDetail(${u})"`} title="${unitTitle(u).replace(/"/g,'')}">
      <div class="unit-chip-icon">${passed?ic('check',15):locked?'🔒':(u+1)}</div>
      <div class="unit-chip-label">U${u+1}</div>
    </div>`;
  }
  html += '</div>';
  return html;
}

function viewUnitDetail(unitIdx){
  const content = unitContent(unitIdx);
  const lessons = content.lessonIds.map(id=>LESSONS.find(l=>l.id===id)).filter(Boolean);
  const result = UNIT_RESULTS[unitIdx];
  showSession();
  const el = document.getElementById('view-mix');
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:14px;" onclick="goTo('dashboard')">← Retour au parcours</button>
    <div class="eyebrow">${unitTitle(unitIdx)}</div>
    <h1 class="pagetitle" style="font-size:24px;">Contenu de l'unité</h1>
    <div class="card" style="margin-bottom:18px;">
      <h3 style="margin:0 0 8px;">Leçons de grammaire</h3>
      <div style="display:flex; flex-direction:column; gap:6px; font-size:13.5px;">
        ${lessons.map(l=>`<div>• ${l.title}</div>`).join('') || '<div style="color:var(--slate);">Aucune</div>'}
      </div>
    </div>
    <div class="card" style="margin-bottom:18px;">
      <h3 style="margin:0 0 4px;">Vocabulaire, verbes, oral</h3>
      <p style="color:var(--slate); font-size:13px; margin:0;">${content.vocabIds.length} mots · ${content.verbIds.length} verbe(s) · ${content.oralIds.length} phrase(s) orales</p>
    </div>
    ${result ? `
    <div class="card" style="margin-bottom:18px;">
      <h3 style="margin:0 0 4px;">Dernier test</h3>
      <p style="color:var(--slate); font-size:13px; margin:0;">${result.score}/${result.total} le ${result.date} — ${result.passed?'validé ✓':'non validé'}</p>
    </div>` : ''}
    <button class="btn amber" onclick="startUnitTest(${unitIdx})">${result ? 'Retenter le test' : 'Passer le test de cette unité'}</button>
  `;
}

function renderDashboard(){
  const el = document.getElementById('view-dashboard');
  const plan = getCurriculumPlan();
  const dayIdx = Math.min(CURRICULUM_DAY, plan.length-1);
  const dayEntry = plan[dayIdx];
  registerCurriculumIntroductions(dayEntry, dayIdx);
  const reviews = curriculumReviewsDue();
  const masteredCases = new Set();
  LESSONS.forEach(l=>{ if(GDONE.includes(l.id)) l.cases.forEach(c=>masteredCases.add(c)); });

  const unitIdx = unitIndexForDay(dayIdx);
  const [uStart, uEnd] = unitDayRange(unitIdx);
  const dayInUnit = dayIdx - uStart + 1;
  const totalDaysInUnit = uEnd - uStart + 1;
  const unitPassed = !!(UNIT_RESULTS[unitIdx] && UNIT_RESULTS[unitIdx].passed);
  const awaitingTest = (dayIdx === uEnd) && !unitPassed;
  const finished = (dayIdx === plan.length-1) && unitPassed;

  el.innerHTML = `
    <div class="eyebrow">Ton parcours</div>
    <h1 class="pagetitle">${unitTitle(unitIdx)} · Jour ${dayInUnit}/${totalDaysInUnit}${finished?' · Programme terminé 🎉':''}</h1>
    <p class="pagesub">${finished ? "Tu as parcouru tout le programme structuré ! Continue avec les révisions et explore librement les modules ci-dessous." : "Environ 15–20 minutes aujourd'hui : un peu de nouveau, un peu de révision."}</p>

    ${renderUnitsOverview(unitIdx)}

    <div class="card" style="margin-bottom:22px; display:flex; align-items:center; justify-content:space-between; gap:18px; flex-wrap:wrap; background:var(--ink); color:#fff;">
      <div>
        <h3 style="margin:0 0 4px; color:#fff;">${reviews.length>0 ? reviews.length+" révision(s) programmée(s) aujourd'hui" : "Aucune révision programmée aujourd'hui"}</h3>
        <p style="margin:0; font-size:13.5px; color:#C7C7CF;">Espacement J1 · J3 · J5 · J8 · J13 depuis la première rencontre.${STREAK.count>0 ? ` 🔥 Série de ${STREAK.count} jour(s).` : ''}</p>
      </div>
      ${reviews.length>0 ? `<button class="btn amber" onclick="startParcoursReview()">${ic('refresh',15)} Réviser le programme</button>` : ''}
    </div>

    ${awaitingTest ? `
    <div class="card" style="margin-bottom:22px; border:2px solid var(--amber);">
      <div class="badge amber" style="margin-bottom:8px;">🏁 Fin de l'unité ${unitIdx+1}</div>
      <h3 style="margin:0 0 6px;">Teste-toi pour débloquer la suite</h3>
      <p style="color:var(--slate); font-size:13px; margin:0 0 14px;">Un test complet — écrit, écoute et oral — sur tout ce que tu as vu dans cette unité. Il faut 70% pour valider, et tu peux retenter autant de fois que nécessaire.</p>
      <button class="btn amber" onclick="startUnitTest(${unitIdx})">${ic('award',15)} Passer le test de l'unité ${unitIdx+1}</button>
    </div>` : ''}

    ${dayEntry.type==='new' ? renderNewDayBlock(dayEntry) : renderConsolidationBlock(dayEntry)}

    <details style="margin:30px 0 22px;">
      <summary style="cursor:pointer; font-weight:700; font-size:15px; color:var(--ink);">Explorer librement tous les modules</summary>
      <div class="grid grid-3" style="margin-top:16px;">
        ${MODULES.filter(m=>m.id!=='dashboard').map(m=>`
          <div class="modulecard" style="cursor:pointer;" onclick="goTo('${m.id}')">
            <div class="top"><div class="icon">${ic(m.icon,18)}</div></div>
            <h3>${m.label}</h3>
            <p>${moduleDesc(m.id)}</p>
          </div>
        `).join('')}
      </div>
    </details>

    <div class="card">
      <h3 style="margin:0 0 4px;">Le compas des cas</h3>
      <p style="color:var(--slate); font-size:13px; margin:0 0 14px;">La grammaire russe repose sur 6 cas. Chaque leçon de cas validée éclaire un repère.</p>
      <div class="wheelwrap">
        ${caseWheelSVG(masteredCases)}
        <div class="wheel-legend">
          ${Object.entries(CASE_LABELS).map(([k,v])=>`<div><span class="dot" style="background:${masteredCases.has(k)?'#B3202F':'#D7D4C8'}"></span>${v} ${masteredCases.has(k)?'✓':''}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderNewDayBlock(dayEntry){
  const lesson = dayEntry.lessonId ? LESSONS.find(l=>l.id===dayEntry.lessonId) : null;
  const vocab = ALL_CARDS.filter(c=>(dayEntry.vocabIds||[]).includes(c.id));
  const verb = dayEntry.verbId ? VERBS.find(v=>v.id===dayEntry.verbId) : null;
  const oral = ORAL_BANK.filter(o=>(dayEntry.oralIds||[]).includes(o.id));
  return `
    <h3 style="margin:0 0 12px;">Nouveau aujourd'hui</h3>
    <div class="grid grid-2" style="margin-bottom:22px; align-items:stretch;">
      ${lesson ? `
      <div class="card">
        <div class="badge" style="margin-bottom:8px; background:var(--ink); color:#fff;">📖 Grammaire</div>
        <h3 style="margin:0 0 6px;">${lesson.title}</h3>
        <p style="color:var(--slate); font-size:13px; margin:0 0 14px;">${lesson.level} · ${CEFR_INFO[lesson.cefr].label}</p>
        <button class="btn amber" onclick="goTo('grammar'); renderLessonDetail('${lesson.id}')">Commencer la leçon</button>
      </div>` : `<div class="card"><p style="color:var(--slate); font-size:13px;">Pas de nouvelle leçon aujourd'hui — le programme de grammaire est terminé, tu continues en révision.</p></div>`}
      <div class="card">
        <div class="badge amber" style="margin-bottom:8px;">📇 Vocabulaire</div>
        <h3 style="margin:0 0 6px;">${vocab.length} nouveau(x) mot(s)</h3>
        <div style="display:flex; flex-direction:column; gap:6px; margin:0 0 14px; font-size:13.5px;">
          ${vocab.map(c=>`<div><b class="ru">${c.ru}</b> <span style="color:var(--slate);">— ${c.fr}</span></div>`).join('')}
        </div>
        <button class="btn amber" onclick="startTodayVocabPractice()">S'entraîner sur ces mots</button>
      </div>
    </div>
    <div class="grid grid-2" style="margin-bottom:26px; align-items:stretch;">
      ${verb ? `
      <div class="card">
        <div class="badge sage" style="margin-bottom:8px;">🔄 Verbe du jour</div>
        <h3 style="margin:0 0 4px;">${verb.fr}</h3>
        <p class="ru" style="margin:0 0 14px; font-size:16px;">${verb.ru} <span style="color:var(--slate); font-size:13px;">${verb.translit||''}</span></p>
        <button class="btn secondary" onclick="goTo('verbes'); setTimeout(()=>renderVerbDetail('${verb.id}'),50);">Voir la conjugaison</button>
      </div>` : `<div class="card"><p style="color:var(--slate); font-size:13px;">Pas de nouveau verbe aujourd'hui.</p></div>`}
      ${oral.length>0 ? `
      <div class="card">
        <div class="badge" style="margin-bottom:8px; background:var(--ink); color:#fff;">🎙️ Oral</div>
        <div style="display:flex; flex-direction:column; gap:6px; margin:0 0 14px; font-size:13.5px;">
          ${oral.map(o=>`<div><span style="color:var(--slate);">${o.fr}</span></div>`).join('')}
        </div>
        <button class="btn secondary" onclick="oralLevel='${oral[0].level}'; oralTheme='${(oral[0].theme||'').replace(/'/g,"\\'")}'; goTo('oral');">S'entraîner à l'oral</button>
      </div>` : ''}
    </div>
  `;
}

function renderConsolidationBlock(dayEntry){
  const lesson = LESSONS.find(l=>l.id===dayEntry.lessonId);
  const text = dayEntry.readingId ? TEXTS.find(t=>t.id===dayEntry.readingId) : null;
  const audio = dayEntry.listeningId ? LISTEN_TEXTS.find(t=>t.id===dayEntry.listeningId) : null;
  return `
    <h3 style="margin:0 0 12px;">Renforcement aujourd'hui</h3>
    <div class="card" style="margin-bottom:22px;">
      <div class="badge" style="margin-bottom:8px; background:var(--ink); color:#fff;">🔁 2e regard sur une notion récente</div>
      <h3 style="margin:0 0 6px;">${lesson.title}</h3>
      <p style="color:var(--slate); font-size:13px; margin:0 0 14px;">Pas de nouvelle leçon aujourd'hui — on revoit cette notion sous un autre angle, avec d'autres exemples, pour bien l'ancrer.</p>
      <button class="btn amber" onclick="startExampleDrill('${lesson.id}')">Démarrer le renforcement</button>
    </div>
    <div class="grid grid-2" style="margin-bottom:26px; align-items:stretch;">
      ${text ? `
      <div class="card">
        <div class="badge amber" style="margin-bottom:8px;">📄 Lecture du jour</div>
        <h3 style="margin:0 0 4px;">${text.title}</h3>
        <p style="color:var(--slate); font-size:12.5px; margin:0 0 14px;">${text.level} · ${text.theme}</p>
        <button class="btn secondary" onclick="goTo('reading'); renderReadingText('${text.id}');">Lire le texte</button>
      </div>` : ''}
      ${audio ? `
      <div class="card">
        <div class="badge sage" style="margin-bottom:8px;">🎧 Écoute du jour</div>
        <h3 style="margin:0 0 4px;">${audio.title}</h3>
        <p style="color:var(--slate); font-size:12.5px; margin:0 0 14px;">${audio.level} · ${audio.theme}</p>
        <button class="btn secondary" onclick="goTo('listening'); renderListeningText('${audio.id}');">Écouter</button>
      </div>` : ''}
    </div>
  `;
}

function moduleDesc(id){
  return ({
    alphabet:'Les 33 lettres cyrilliques et leur prononciation.',
    grammar:`${LESSONS.length} leçons, niveaux A1 à B1 : cas, aspects, participes. Révision espacée incluse.`,
    vocabulaire:`${ALL_CARDS.length} mots, ${DECKS.length} thèmes : listes, prononciation, quiz éclair.`,
    verbes:`${VERBS.length} verbes essentiels (avec SRS) + liste étendue de ${FREQ_VERBS.length}.`,
    flashcards:'Révision en répétition espacée (SRS) des mots déjà connus.',
    reading:`${TEXTS.length} textes, ${THEME_ORDER.length} thèmes × 3 niveaux, avec questions de compréhension.`,
    listening:`${LISTEN_TEXTS.length} audios, mêmes thèmes/niveaux, avec questions de compréhension.`,
    oral:`${ORAL_BANK.length} phrases par niveau/thème, avec reconnaissance vocale.`,
    exam:'Quiz mêlant vocabulaire, grammaire et écoute.'
  })[id] || '';
}
