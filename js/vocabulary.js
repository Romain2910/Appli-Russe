/* =========================================================
   VOCABULAIRE — themes, flashcards, quiz
   ========================================================= */

let vocabQuizState = null;

function renderVocabThemes(){
  const el = document.getElementById('view-vocabulaire');
  el.innerHTML = `
    <div class="eyebrow">Module 3</div>
    <h1 class="pagetitle">Vocabulaire</h1>
    <p class="pagesub">353 mots classés par thème. Parcours les listes, écoute la prononciation, et marque les mots que tu connais déjà. Une fois à l'aise, entraîne-toi avec le quiz éclair ⚡ ou passe en révision dans le module Flashcards.</p>
    <div class="theme-grid" id="theme-grid"></div>
  `;
  const grid = document.getElementById('theme-grid');
  DECKS.forEach(d=>{
    const total = d.cards.length;
    const known = d.cards.filter((c,i)=>KNOWN[d.id+'-'+i]).length;
    const pct = total ? Math.round(100*known/total) : 0;
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.innerHTML = `
      <div class="emoji">${THEME_EMOJI[d.id]||'📘'}</div>
      <h3>${d.name}</h3>
      <div class="count">${known}/${total} mots connus</div>
      <div class="bar"><div style="width:${pct}%;"></div></div>
    `;
    card.onclick = ()=>renderVocabTheme(d.id);
    grid.appendChild(card);
  });
}

function renderVocabTheme(deckId){
  const d = DECKS.find(x=>x.id===deckId);
  const el = document.getElementById('view-vocabulaire');
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:16px;" onclick="renderVocabThemes()">← Retour aux thèmes</button>
    <div class="eyebrow">${THEME_EMOJI[d.id]||''} Vocabulaire</div>
    <h1 class="pagetitle" style="font-size:24px;">${d.name}</h1>
    <p class="pagesub">${d.cards.length} mots. Clique sur 🔊 pour écouter, et sur l'étoile quand tu connais le mot.</p>
    <button class="btn amber" style="margin-bottom:18px;" onclick="startVocabQuiz('${d.id}')">⚡ Quiz éclair sur ce thème</button>
    <div class="word-grid" id="word-grid"></div>
  `;
  const grid = document.getElementById('word-grid');
  d.cards.forEach((c,i)=>{
    const cardId = d.id+'-'+i;
    const isKnown = !!KNOWN[cardId];
    const card = document.createElement('div');
    card.className = 'word-card' + (isKnown?' known':'');
    card.innerHTML = `
      <button class="iconbtn" aria-label="Écouter" style="flex-shrink:0;">${ic('headphones',15)}</button>
      <div class="wbody">
        <div class="ru-word">${c[0]}</div>
        <div class="translit-word">${c[1]}</div>
        <div class="fr-word">${c[2]}</div>
      </div>
      <button class="star-btn ${isKnown?'on':''}" aria-label="Marquer comme connu">${isKnown?'★':'☆'}</button>
    `;
    card.querySelector('.iconbtn').onclick = ()=>speak(c[0]);
    const starBtn = card.querySelector('.star-btn');
    starBtn.onclick = ()=>{
      const nowKnown = !KNOWN[cardId];
      if(nowKnown) KNOWN[cardId] = true; else delete KNOWN[cardId];
      sSet('vocab:known', KNOWN);
      card.classList.toggle('known', nowKnown);
      starBtn.classList.toggle('on', nowKnown);
      starBtn.textContent = nowKnown ? '★' : '☆';
    };
    grid.appendChild(card);
  });
}

function startVocabQuiz(deckId){
  const d = DECKS.find(x=>x.id===deckId);
  const pool = shuffle(d.cards.map((c,i)=>({ru:c[0], translit:c[1], fr:c[2]})));
  const n = Math.min(10, pool.length);
  vocabQuizState = {deckId, items:pool.slice(0,n), idx:0, streak:0, best:0, answered:false};
  renderVocabQuizQuestion();
}

function renderVocabQuizQuestion(){
  const el = document.getElementById('view-vocabulaire');
  const st = vocabQuizState;
  const d = DECKS.find(x=>x.id===st.deckId);
  if(st.idx >= st.items.length){
    el.innerHTML = `
      <div class="quiz-flash">
        <div class="badge sage" style="margin-bottom:10px;">Quiz éclair terminé</div>
        <div class="score" style="font-family:'Fraunces',serif; font-size:44px; font-weight:700;">${st.best} 🔥</div>
        <p style="color:var(--slate);">Meilleure série sur ${st.items.length} mots de « ${d.name} ».</p>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:16px;">
          <button class="btn secondary" onclick="renderVocabTheme('${st.deckId}')">Retour à la liste</button>
          <button class="btn amber" onclick="startVocabQuiz('${st.deckId}')">Rejouer</button>
        </div>
      </div>`;
    return;
  }
  st.answered = false;
  const item = st.items[st.idx];
  const distractors = shuffle(ALL_CARDS.filter(c=>c.fr!==item.fr)).slice(0,2).map(c=>c.fr);
  const options = shuffle([item.fr, ...distractors]);
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:16px;" onclick="renderVocabTheme('${st.deckId}')">✕ Quitter</button>
    <div class="quiz-flash">
      <div class="streak">🔥 Série : ${st.streak} &nbsp;·&nbsp; Question ${st.idx+1}/${st.items.length}</div>
      <div class="qword">${item.ru}</div>
      <div id="vq-opts">${options.map(o=>`<button class="opt" data-o="${o.replace(/"/g,'&quot;')}">${o}</button>`).join('')}</div>
    </div>
  `;
  document.querySelectorAll('#vq-opts .opt').forEach(btn=>{
    btn.onclick = ()=>{
      if(st.answered) return;
      st.answered = true;
      const chosen = btn.dataset.o;
      const correct = chosen === item.fr;
      document.querySelectorAll('#vq-opts .opt').forEach(s=>{ s.disabled=true; if(s.dataset.o===item.fr) s.classList.add('correct'); });
      if(!correct) btn.classList.add('wrong');
      st.streak = correct ? st.streak+1 : 0;
      st.best = Math.max(st.best, st.streak);
      setTimeout(()=>{ st.idx += 1; renderVocabQuizQuestion(); }, 700);
    };
  });
}

function renderDecks(){
  const el = document.getElementById('view-flashcards');
  el.innerHTML = `
    <div class="eyebrow">Module 3</div>
    <h1 class="pagetitle">Vocabulaire</h1>
    <p class="pagesub">${DECKS.length} thèmes, ${ALL_CARDS.length} mots. Répétition espacée : les cartes reviennent plus ou moins souvent selon ta réussite.</p>
    <div id="deck-list"></div>
  `;
  const list = document.getElementById('deck-list');
  const allDue = dueCardsIn(null).length;
  const allDiv = document.createElement('div');
  allDiv.className = 'deck-card'; allDiv.style.cursor='pointer';
  allDiv.innerHTML = `<div><div class="deck-name">Toutes les cartes</div><div class="deck-meta">${ALL_CARDS.length} cartes · ${allDue} à réviser</div></div><div>${ic('arrow',16)}</div>`;
  allDiv.onclick = ()=>startReview(null);
  list.appendChild(allDiv);
  DECKS.forEach(d=>{
    const due = dueCardsIn(d.id).length;
    const row = document.createElement('div');
    row.className = 'deck-card'; row.style.cursor='pointer';
    row.innerHTML = `<div><div class="deck-name">${d.name}</div><div class="deck-meta">${d.cards.length} cartes · ${due} à réviser</div></div><div>${ic('arrow',16)}</div>`;
    row.onclick = ()=>startReview(d.id);
    list.appendChild(row);
  });
}

function startReview(deckId){
  currentDeck = deckId;
  reviewQueue = dueCardsIn(deckId);
  if(reviewQueue.length === 0) reviewQueue = ALL_CARDS.filter(c=>!deckId || c.deck===deckId).slice(0,10);
  reviewIdx = 0; cardFlipped = false;
  renderReview();
}

function renderReview(){
  const el = document.getElementById('view-flashcards');
  if(reviewQueue.length === 0){
    el.innerHTML = `<div class="empty">${ic('layers',30)}<p>Aucune carte dans ce paquet.</p><button class="btn secondary" onclick="renderDecks()">Retour</button></div>`;
    return;
  }
  if(reviewIdx >= reviewQueue.length){
    el.innerHTML = `
      <div class="result-hero">
        <div class="badge sage" style="margin-bottom:10px;">Session terminée</div>
        <div class="score">${reviewQueue.length} cartes revues</div>
        <p style="color:var(--slate);">Continue demain pour renforcer ta mémoire.</p>
        <button class="btn amber" onclick="renderDecks()">Retour aux paquets</button>
      </div>`;
    return;
  }
  const c = reviewQueue[reviewIdx];
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:14px;" onclick="renderDecks()">Quitter</button>
    <p style="color:var(--slate); font-size:13px; margin-bottom:10px;">Carte ${reviewIdx+1} / ${reviewQueue.length}</p>
    <div class="flip-stage">
      <div class="flashcard" id="flashcard-el" onclick="flipCard()">
        <div class="big ru">${c.ru}</div>
        <div class="sub">${c.translit}</div>
        <div class="fr" id="fc-fr" style="display:none;">${c.fr}</div>
        <div class="hint" id="fc-hint">Clique pour révéler la traduction</div>
      </div>
      <div class="grade-row" id="grade-row" style="display:none;">
        <button class="btn secondary" onclick="gradeCard(1)">Encore</button>
        <button class="btn secondary" onclick="gradeCard(3)">Bien</button>
        <button class="btn amber" onclick="gradeCard(5)">Facile</button>
      </div>
      <button class="iconbtn" style="margin-top:16px;" onclick="event.stopPropagation(); speak('${c.ru.replace(/'/g,"")}')" aria-label="Écouter">${ic('headphones',16)}</button>
    </div>
  `;
}

function flipCard(){
  if(cardFlipped) return;
  cardFlipped = true;
  document.getElementById('fc-fr').style.display = 'block';
  document.getElementById('fc-hint').style.display = 'none';
  document.getElementById('grade-row').style.display = 'flex';
}

function gradeCard(quality){
  const c = reviewQueue[reviewIdx];
  srsGrade(c.id, quality);
  reviewIdx += 1; cardFlipped = false;
  renderReview();
}
