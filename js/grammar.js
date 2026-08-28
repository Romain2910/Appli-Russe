/* =========================================================
   GRAMMAIRE — alphabet, lecons, exercices
   ========================================================= */

function renderAlphabet(){
  const el = document.getElementById('view-alphabet');
  el.innerHTML = `
    <div class="eyebrow">Module 1</div>
    <h1 class="pagetitle">Alphabet cyrillique</h1>
    <p class="pagesub">33 lettres. Clique sur une lettre pour l'entendre.</p>
    <div class="letter-grid" id="letter-grid"></div>
  `;
  const grid = document.getElementById('letter-grid');
  ALPHABET.forEach(l=>{
    const d = document.createElement('div');
    d.className = 'letter-card';
    d.style.cursor = 'pointer';
    d.innerHTML = `<div class="cyr">${l.c}</div><div class="translit">${l.t}</div><div class="note">${l.n}</div>`;
    d.onclick = ()=>speak(l.c.split(' ')[0]);
    grid.appendChild(d);
  });
}

let grammarTab = 'A1';

let refTablesOpen = false;

function renderDeclTables(){
  return `<div class="grid grid-2">${REF_TABLES.map(t=>`
    <div class="card" style="padding:14px 16px;">
      <div style="font-weight:700; font-size:13px; margin-bottom:8px;">${t.title}</div>
      <table class="decl-table">
        <tr>${t.cols.map(c=>`<th>${c}</th>`).join('')}</tr>
        ${t.rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}
      </table>
      ${t.note?`<div style="font-size:11.5px; color:var(--slate); margin-top:8px;">${t.note}</div>`:''}
    </div>`).join('')}</div>`;
}

function renderGrammarList(){
  const el = document.getElementById('view-grammar');
  const due = dueGrammarLessons().filter(l=>GDONE.includes(l.id));
  el.innerHTML = `
    <div class="eyebrow">Module 2</div>
    <h1 class="pagetitle">Grammaire</h1>
    <p class="pagesub">${LESSONS.length} leçons progressives, de la structure de base (A1) à la lecture d'articles (B1). Chaque leçon se termine par un mini-quiz.</p>

    ${due.length>0 ? `<div class="card" style="margin-bottom:18px; background:var(--ink); color:#fff;">
      <h3 style="margin:0 0 4px; color:#fff;">${due.length} leçon(s) à réviser aujourd'hui</h3>
      <p style="margin:0 0 12px; font-size:13px; color:#C7C7CF;">Refais le mini-quiz pour renforcer ta mémoire — ça reprogramme automatiquement la prochaine révision.</p>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${due.slice(0,6).map(l=>`<button class="btn secondary" style="font-size:12.5px;" onclick="renderLessonDetail('${l.id}')">${l.title}</button>`).join('')}
      </div>
    </div>` : ''}

    <div class="card" style="margin-bottom:22px;">
      <div style="display:flex; align-items:center; justify-content:space-between; cursor:pointer;" id="ref-toggle">
        <div><h3 style="margin:0 0 3px;">Tableau de référence des déclinaisons</h3><p style="margin:0; font-size:12.5px; color:var(--slate);">Les 6 cas, noms et adjectifs, singulier et pluriel — à garder sous les yeux.</p></div>
        <span id="ref-arrow">${ic('arrow',16)}</span>
      </div>
      <div id="ref-body" style="display:${refTablesOpen?'block':'none'}; margin-top:16px;">${renderDeclTables()}</div>
    </div>

    <div id="cefr-tabs" style="display:flex; gap:8px; margin-bottom:18px; flex-wrap:wrap;"></div>
    <div id="lesson-list"></div>
  `;
  document.getElementById('ref-toggle').onclick = ()=>{
    refTablesOpen = !refTablesOpen;
    document.getElementById('ref-body').style.display = refTablesOpen ? 'block' : 'none';
  };
  const tabs = document.getElementById('cefr-tabs');
  Object.keys(CEFR_INFO).forEach(lvl=>{
    const total = LESSONS.filter(l=>l.cefr===lvl).length;
    const done = LESSONS.filter(l=>l.cefr===lvl && GDONE.includes(l.id)).length;
    const b = document.createElement('button');
    b.className = 'btn ' + (grammarTab===lvl ? 'amber' : 'secondary');
    b.style.fontSize = '13px';
    b.innerHTML = `${CEFR_INFO[lvl].label} <span style="opacity:.75;">(${done}/${total})</span>`;
    b.onclick = ()=>{ grammarTab = lvl; renderGrammarList(); };
    tabs.appendChild(b);
  });
  const list = document.getElementById('lesson-list');
  const sub = document.createElement('p');
  sub.style.cssText = 'color:var(--slate); font-size:13px; margin:-8px 0 16px;';
  sub.textContent = CEFR_INFO[grammarTab].desc;
  list.appendChild(sub);
  LESSONS.filter(l=>l.cefr===grammarTab).forEach(l=>{
    const done = GDONE.includes(l.id);
    const row = document.createElement('div');
    row.className = 'lesson-row';
    row.style.cursor = 'pointer';
    row.innerHTML = `
      <div class="li-left">
        <div class="lesson-check ${done?'done':''}">${done?ic('check',13):''}</div>
        <div><div class="lesson-title">${l.title}</div><div class="lesson-sub">${l.level}</div></div>
      </div>
      <div>${ic('arrow',16)}</div>
    `;
    row.onclick = ()=>renderLessonDetail(l.id);
    list.appendChild(row);
  });
}

function formatRu(text){
  return text.replace(/[А-Яа-яЁё][А-Яа-яЁё\-]*/g, m => `<b class="ru">${m}</b>`);
}

function renderLessonTheory(content){
  const blocks = content.split('\n\n').map(b=>b.trim()).filter(Boolean);
  return blocks.map(block=>{
    if(block.startsWith('⚠')){
      return `<div class="lesson-warn"><div class="lw-icon">⚠️</div><p>${formatRu(block.replace(/^⚠\s*/,''))}</p></div>`;
    }
    const lines = block.split('\n').map(x=>x.trim()).filter(Boolean);
    const bulletLines = lines.filter(x=>/^(—|\d+\.)\s/.test(x));
    if(lines.length>1 && bulletLines.length===lines.length){
      return `<ul class="lesson-rule">${lines.map(x=>`<li>${formatRu(x.replace(/^(—|\d+\.)\s*/,''))}</li>`).join('')}</ul>`;
    }
    return `<p>${formatRu(block)}</p>`;
  }).join('');
}

function stripPunct(s){ return (s||'').replace(/[«»,.!?()]/g,'').trim(); }

function wordCount(s){ return stripPunct(s).split(/\s+/).filter(Boolean).length; }

function buildExerciseItem(kind, p, allPairs, idx){
  if(kind==='qcm'){
    const others = Array.from(new Set(allPairs.filter((_,j)=>j!==idx).map(e=>e.fr)));
    const distractors = shuffle(others).slice(0,2);
    const options = shuffle([p.fr, ...distractors]);
    return { kind:'qcm', q:`Que signifie « ${p.ru} » ?`, o:options, a:options.indexOf(p.fr) };
  }
  if(kind==='translate') return { kind:'translate', prompt:p.fr, answer:p.ru };
  if(kind==='dictation') return { kind:'dictation', audio:p.ru, answer:p.ru, prompt:p.fr };
  if(kind==='blank'){
    const words = p.ru.split(/\s+/);
    const bi = Math.floor(Math.random()*words.length);
    const answer = stripPunct(words[bi]);
    const display = words.map((w,i)=>i===bi?'____':w).join(' ');
    return { kind:'blank', prompt:p.fr, display, answer };
  }
  if(kind==='order'){
    const words = p.ru.split(/\s+/);
    return { kind:'order', prompt:p.fr, words: shuffle(words), answer: stripPunct(words.join(' ')) };
  }
}

function buildVariedExercises(rawPairs){
  const pairs = rawPairs.map(p=>Array.isArray(p)?{ru:p[0],fr:p[1]}:p).filter(p=>p.ru && p.fr);
  return pairs.map((p,i)=>{
    let pool = ['qcm','translate','dictation'];
    if(wordCount(p.ru) >= 3) pool = pool.concat(['blank','order']);
    const kind = pool[i % pool.length];
    return buildExerciseItem(kind, p, pairs, i);
  });
}

function lessonExercises(l){
  const quizItems = l.quiz.map(q=>({kind:'qcm', q:q.q, o:q.o, a:q.a}));
  return quizItems.concat(buildVariedExercises(l.examples));
}

function attachRuKeyboard(block, input){
  const toggle = block.querySelector('.ru-kbd-toggle');
  if(!toggle) return;
  let kbdEl = null;
  toggle.onclick = ()=>{
    if(kbdEl){ kbdEl.remove(); kbdEl = null; toggle.textContent = '⌨ Afficher le clavier russe'; return; }
    kbdEl = document.createElement('div');
    kbdEl.className = 'ru-kbd';
    kbdEl.innerHTML = RU_KBD_ROWS.map(row=>row.map(l=>`<button type="button" class="ru-kbd-key">${l}</button>`).join('')).join('') +
      `<button type="button" class="ru-kbd-key wide" data-space="1">espace</button>` +
      `<button type="button" class="ru-kbd-key wide" data-back="1">⌫ effacer</button>`;
    toggle.insertAdjacentElement('afterend', kbdEl);
    toggle.textContent = '⌨ Masquer le clavier';
    kbdEl.querySelectorAll('.ru-kbd-key').forEach(btn=>{
      btn.onclick = ()=>{
        if(input.disabled) return;
        if(btn.dataset.back) input.value = input.value.slice(0,-1);
        else if(btn.dataset.space) input.value += ' ';
        else input.value += btn.textContent;
        input.focus();
      };
    });
  };
}

function mountExercise(container, qi, q, scores, onAnswered){
  const block = document.createElement('div');
  block.className = 'quiz-q';
  if(q.kind==='qcm'){
    block.innerHTML = `<div class="qtext">${qi+1}. ${q.q}</div>` + q.o.map((o,oi)=>`<button type="button" class="opt" data-oi="${oi}">${o}</button>`).join('');
    container.appendChild(block);
    block.querySelectorAll('.opt').forEach(btn=>{
      btn.onclick = ()=>{
        if(scores[qi]!==null) return;
        const oi = +btn.dataset.oi;
        const correct = oi===q.a;
        scores[qi]=correct;
        block.querySelectorAll('.opt').forEach(s=>{ s.disabled=true; if(+s.dataset.oi===q.a) s.classList.add('correct'); });
        if(!correct) btn.classList.add('wrong');
        onAnswered();
      };
    });
  } else if(q.kind==='translate' || q.kind==='blank' || q.kind==='dictation'){
    const label = q.kind==='translate' ? `${qi+1}. Traduis en russe : « ${q.prompt} »`
      : q.kind==='blank' ? `${qi+1}. Complète la phrase : <span class="ru" style="font-size:15px;">${q.display}</span> <span style="color:var(--slate); font-size:12px;">(${q.prompt})</span>`
      : `${qi+1}. Écoute et écris ce que tu entends`;
    block.innerHTML = `
      <div class="qtext">${label}</div>
      ${q.kind==='dictation' ? `<button type="button" class="btn secondary ex-replay" style="margin-bottom:8px;">${ic('headphones',14)} Écouter</button>` : ''}
      <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
        <input type="text" class="ex-input" placeholder="Tape ta réponse en russe..." style="flex:1; min-width:180px; padding:9px 12px; border:1px solid var(--line); border-radius:8px; font-family:'PT Serif',serif; font-size:15px;">
        <button type="button" class="btn amber ex-submit">Valider</button>
      </div>
      <button type="button" class="ru-kbd-toggle">⌨ Afficher le clavier russe</button>
      <div class="ex-feedback" style="margin-top:8px; font-size:13px;"></div>
    `;
    container.appendChild(block);
    if(q.kind==='dictation'){
      setTimeout(()=>speak(q.audio),300);
      block.querySelector('.ex-replay').onclick = ()=>speak(q.audio);
    }
    const input = block.querySelector('.ex-input');
    const submit = block.querySelector('.ex-submit');
    const feedback = block.querySelector('.ex-feedback');
    attachRuKeyboard(block, input);
    const submitFn = ()=>{
      if(scores[qi]!==null) return;
      const typed = input.value.trim();
      const answerClean = q.answer.trim();
      let correct;
      if(answerClean.replace(/\s/g,'').length <= 6){
        /* Mot court : correspondance exacte requise (pas de tolérance aux fautes) */
        correct = typed.toLowerCase() === answerClean.toLowerCase();
      } else {
        /* Phrase plus longue (dictée) : tolérance légère aux fautes de frappe uniquement */
        correct = similarity(typed, answerClean) >= 92;
      }
      scores[qi] = correct;
      input.disabled = true; submit.disabled = true;
      if(correct){
        feedback.innerHTML = `<span style="color:var(--sage);">✓ Correct — <b class="ru">${q.answer}</b></span>`;
        onAnswered();
      } else {
        feedback.innerHTML = `
          <span style="color:var(--rust);">✗ Réponse attendue : <b class="ru">${q.answer}</b>${typed?` (toi : ${typed})`:''}</span>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <input type="text" class="ex-retry-input" placeholder="Réécris le mot correctement..." style="flex:1; min-width:180px; padding:9px 12px; border:1px solid var(--line); border-radius:8px; font-family:'PT Serif',serif; font-size:15px;">
            <button type="button" class="btn secondary ex-retry-submit">Vérifier</button>
          </div>
          <div class="ex-retry-feedback" style="margin-top:6px; font-size:13px;"></div>
        `;
        const retryInput = feedback.querySelector('.ex-retry-input');
        const retrySubmit = feedback.querySelector('.ex-retry-submit');
        const retryFeedback = feedback.querySelector('.ex-retry-feedback');
        attachRuKeyboard(feedback, retryInput);
        const retryFn = ()=>{
          const ok = retryInput.value.trim().toLowerCase() === answerClean.toLowerCase();
          retryFeedback.innerHTML = ok
            ? `<span style="color:var(--sage);">✓ Bien recopié.</span>`
            : `<span style="color:var(--rust);">Pas encore — réessaie.</span>`;
          if(ok){ retryInput.disabled = true; retrySubmit.disabled = true; }
        };
        retrySubmit.onclick = retryFn;
        retryInput.onkeydown = (e)=>{ if(e.key==='Enter'){ e.preventDefault(); retryFn(); } };
        onAnswered();
      }
    };
    submit.onclick = submitFn;
    input.onkeydown = (e)=>{ if(e.key==='Enter'){ e.preventDefault(); submitFn(); } };
  } else if(q.kind==='order'){
    block.innerHTML = `
      <div class="qtext">${qi+1}. Remets les mots dans l'ordre : « ${q.prompt} »</div>
      <div class="order-answer" style="min-height:38px; border:1px dashed var(--line); border-radius:8px; padding:8px; margin-bottom:8px; display:flex; gap:6px; flex-wrap:wrap;"></div>
      <div class="order-bank" style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px;">
        ${q.words.map((w,wi)=>`<button type="button" class="btn secondary order-tile ru" data-wi="${wi}">${w}</button>`).join('')}
      </div>
      <button type="button" class="btn amber order-submit">Valider</button>
      <div class="ex-feedback" style="margin-top:8px; font-size:13px;"></div>
    `;
    container.appendChild(block);
    const bank = block.querySelector('.order-bank');
    const answerZone = block.querySelector('.order-answer');
    const chosen = [];
    bank.querySelectorAll('.order-tile').forEach(btn=>{
      btn.onclick = ()=>{
        if(scores[qi]!==null) return;
        btn.disabled = true; btn.style.display='none';
        chosen.push(btn.textContent);
        const chip = document.createElement('span');
        chip.textContent = btn.textContent;
        chip.className = 'badge amber ru';
        answerZone.appendChild(chip);
      };
    });
    block.querySelector('.order-submit').onclick = ()=>{
      if(scores[qi]!==null) return;
      const built = stripPunct(chosen.join(' ')).toLowerCase();
      const correct = built === q.answer.toLowerCase();
      scores[qi] = correct;
      block.querySelector('.ex-feedback').innerHTML = correct
        ? `<span style="color:var(--sage);">✓ Correct</span>`
        : `<span style="color:var(--rust);">✗ Ordre attendu : <b class="ru">${q.answer}</b></span>`;
      onAnswered();
    };
  }
}

function renderLessonDetail(id){
  currentLessonId = id;
  const l = LESSONS.find(x=>x.id===id);
  const el = document.getElementById('view-grammar');
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:18px;" onclick="renderGrammarList()">← Retour aux leçons</button>
    <div class="eyebrow">${CEFR_INFO[l.cefr].label} · ${l.level}</div>
    <h1 class="pagetitle" style="font-size:26px;">${l.title}</h1>
    <div class="lesson-detail">
      ${renderLessonTheory(l.content)}
      <table class="ex-table">
        ${l.examples.map(e=>`<tr><td class="ru ru">${e[0]}</td><td class="fr">${e[1]}</td></tr>`).join('')}
      </table>
      ${l.declTable !== undefined ? `<div style="margin:18px 0;"><div style="font-weight:700; font-size:13px; margin-bottom:8px;">${REF_TABLES[l.declTable].title}</div><table class="decl-table"><tr>${REF_TABLES[l.declTable].cols.map(c=>`<th>${c}</th>`).join('')}</tr>${REF_TABLES[l.declTable].rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</table></div>` : ''}
      <div id="quiz-zone" style="margin-top:22px;"></div>
    </div>
  `;
  renderQuiz(l);
}

function renderQuiz(l){
  const exercises = lessonExercises(l);
  const zone = document.getElementById('quiz-zone');
  zone.innerHTML = `<h3 style="margin:0 0 14px;">Exercices (${exercises.length})</h3><div id="quiz-questions"></div><div id="quiz-result" style="margin-top:8px;"></div>`;
  const qz = document.getElementById('quiz-questions');
  let scores = new Array(exercises.length).fill(null);
  const onAnswered = ()=>{
    if(!scores.every(s=>s!==null)) return;
    const good = scores.filter(Boolean).length;
    const res = document.getElementById('quiz-result');
    res.innerHTML = `<p style="font-weight:700;">Score : ${good}/${exercises.length}</p>`;
    const quality = good === exercises.length ? 5 : (good/exercises.length >= 0.6 ? 3 : 1);
    srsGrade('gram-'+l.id, quality);
    if(good/exercises.length >= 0.8 && !GDONE.includes(l.id)){
      GDONE.push(l.id); sSet('progress:grammar', GDONE);
      res.innerHTML += `<span class="badge sage">Leçon validée ✓</span>`;
    } else if(good/exercises.length < 0.8){
      res.innerHTML += `<button class="btn secondary" onclick="renderLessonDetail('${l.id}')">Réessayer</button>`;
    }
    res.innerHTML += `<div style="margin-top:12px;"><button class="btn amber" onclick="goTo('dashboard')">← Retour au parcours</button></div>`;
  };
  exercises.forEach((q,qi)=> mountExercise(qz, qi, q, scores, onAnswered));
}
