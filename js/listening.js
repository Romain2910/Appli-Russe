/* =========================================================
   ECOUTE
   ========================================================= */

function speak(text, rate){
  try{
    if(!('speechSynthesis' in window)){ alert('La synthèse vocale n\'est pas disponible sur ce navigateur.'); return; }
    window.speechSynthesis.cancel();
    const clean = stripGloss(text);
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'ru-RU'; u.rate = rate || 0.9;
    const voices = window.speechSynthesis.getVoices();
    const ru = voices.find(v=>v.lang && v.lang.toLowerCase().startsWith('ru'));
    if(ru) u.voice = ru;
    window.speechSynthesis.speak(u);
  }catch(e){ console.error(e); }
}

function renderListening(){
  const el = document.getElementById('view-listening');
  const levels = ['Tous','A1','A2','B1'];
  el.innerHTML = `
    <div class="eyebrow">Module 5</div>
    <h1 class="pagetitle">Compréhension orale</h1>
    <p class="pagesub">Écoute d'abord sans regarder le texte, puis vérifie ta compréhension avec les questions. ${LISTEN_TEXTS.length} audios longs classés par niveau et par thème, plus des phrases courtes à décoder ci-dessous.</p>
    <div class="level-tabs" id="listen-tabs"></div>
    <div class="level-tabs" id="listen-theme-tabs" style="margin-top:8px;"></div>
    <div id="listen-text-list" style="margin-top:10px;"></div>
    <h3 style="margin:30px 0 12px;">Phrases courtes à décoder</h3>
    <p class="pagesub" style="margin-top:-6px;">Écoute puis essaie de deviner la phrase avant de la révéler.</p>
    <div id="listen-list"></div>
  `;
  const tabs = document.getElementById('listen-tabs');
  levels.forEach(lv=>{
    const count = lv==='Tous' ? LISTEN_TEXTS.length : LISTEN_TEXTS.filter(t=>t.level===lv).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (listeningLevel===lv ? ' active' : '');
    b.textContent = `${lv} (${count})`;
    b.onclick = ()=>{ listeningLevel = lv; renderListening(); };
    tabs.appendChild(b);
  });
  const byLevel = listeningLevel==='Tous' ? LISTEN_TEXTS : LISTEN_TEXTS.filter(t=>t.level===listeningLevel);
  const themesHere = ['Tous', ...Array.from(new Set(byLevel.map(t=>t.theme||'Autre'))).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b))];
  if(!themesHere.includes(listeningTheme)) listeningTheme = 'Tous';
  const themeTabs = document.getElementById('listen-theme-tabs');
  themesHere.forEach(th=>{
    const count = th==='Tous' ? byLevel.length : byLevel.filter(t=>(t.theme||'Autre')===th).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (listeningTheme===th ? ' active' : '');
    b.style.fontSize = '13px';
    b.textContent = `${th} (${count})`;
    b.onclick = ()=>{ listeningTheme = th; renderListening(); };
    themeTabs.appendChild(b);
  });
  const list = document.getElementById('listen-text-list');
  const filtered = listeningTheme==='Tous' ? byLevel : byLevel.filter(t=>(t.theme||'Autre')===listeningTheme);
  const levelRank = {A1:0, A2:1, B1:2};
  const groups = {};
  filtered.forEach(t=>{ (groups[t.theme||'Autre'] = groups[t.theme||'Autre'] || []).push(t); });
  const themeNames = Object.keys(groups).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b));
  if(themeNames.length===0){
    list.innerHTML = `<div class="empty">${ic('headphones',30)}<p>Aucun audio à ce niveau / thème.</p></div>`;
  }
  themeNames.forEach(th=>{
    const items = groups[th].slice().sort((a,b)=>(levelRank[a.level]??9)-(levelRank[b.level]??9));
    const header = document.createElement('div');
    header.style.cssText = 'margin:18px 0 8px; font-weight:700; font-size:14px; opacity:.75;';
    header.textContent = `${th} — ${items.length} audio${items.length>1?'s':''}`;
    list.appendChild(header);
    items.forEach(t=>{
      const done = LISTENDONE.includes(t.id);
      const row = document.createElement('div');
      row.className = 'lesson-row'; row.style.cursor='pointer';
      row.innerHTML = `<div class="li-left"><div class="lesson-check ${done?'done':''}">${done?ic('check',13):''}</div><div><div class="lesson-title">${t.title}</div><div class="lesson-sub"><span class="badge amber">${t.level}</span></div></div></div><div>${ic('headphones',18)}</div>`;
      row.onclick = ()=>renderListeningText(t.id);
      list.appendChild(row);
    });
  });
  const plist = document.getElementById('listen-list');
  ORAL_PHRASES.forEach((p,i)=>{
    const row = document.createElement('div');
    row.className = 'phrase-row';
    row.innerHTML = `
      <button class="iconbtn" aria-label="Écouter">${ic('play',15)}</button>
      <div class="ru" id="lp-${i}" style="filter:blur(5px); cursor:pointer;">${p[0]}</div>
    `;
    row.querySelector('.iconbtn').onclick = ()=>speak(p[0]);
    row.querySelector('.ru').onclick = (e)=>{ e.target.style.filter='none'; };
    plist.appendChild(row);
  });
}

function renderListeningText(id){
  const t = LISTEN_TEXTS.find(x=>x.id===id);
  const el = document.getElementById('view-listening');
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:16px;" onclick="renderListening()">← Retour</button>
    <div class="eyebrow">${t.level} · ${t.theme||''}</div>
    <h1 class="pagetitle" style="font-size:24px;">${t.title}</h1>
    <div class="text-card">
      <p style="margin:0 0 14px; font-size:13.5px; opacity:.7;">Écoute autant de fois que nécessaire avant de regarder le texte. Choisis une vitesse si besoin.</p>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px;">
        <button class="btn amber" id="listen-play-btn">${ic('play',15)} Écouter</button>
        <button class="btn secondary" data-rate="0.65">Très lent</button>
        <button class="btn secondary" data-rate="0.85">Normal</button>
        <button class="btn secondary" data-rate="1.05">Rapide</button>
      </div>
      <button class="btn secondary" id="toggle-ru" style="margin-bottom:10px;">Afficher le texte russe</button>
      <div class="ru-text" id="listen-ru-block" style="display:none;">${renderGlossedText(t.ru)}</div>
      <button class="btn secondary" id="listen-toggle-fr" style="margin-top:10px; display:none;">Afficher la traduction</button>
      <div class="fr-text" id="listen-fr-block" style="display:none;">${t.fr}</div>
    </div>
    <div class="card" id="listening-quiz">
      <h3 style="margin:0 0 14px;">Compréhension orale</h3>
      <div id="lq-questions"></div>
      <div id="lq-result"></div>
    </div>
  `;
  document.getElementById('listen-play-btn').onclick = ()=>speak(t.ru, listenRate);
  el.querySelectorAll('[data-rate]').forEach(b=>{
    b.onclick = ()=>{
      listenRate = parseFloat(b.dataset.rate);
      el.querySelectorAll('[data-rate]').forEach(x=>x.classList.remove('amber'));
      el.querySelectorAll('[data-rate]').forEach(x=>x.classList.add('secondary'));
      b.classList.remove('secondary'); b.classList.add('amber');
      speak(t.ru, listenRate);
    };
  });
  document.getElementById('toggle-ru').onclick = ()=>{
    const b = document.getElementById('listen-ru-block');
    const showing = b.style.display !== 'none';
    b.style.display = showing ? 'none' : 'block';
    document.getElementById('toggle-ru').textContent = showing ? 'Afficher le texte russe' : 'Masquer le texte russe';
    document.getElementById('listen-toggle-fr').style.display = showing ? 'none' : 'inline-block';
  };
  document.getElementById('listen-toggle-fr').onclick = ()=>{
    const b = document.getElementById('listen-fr-block');
    b.style.display = b.style.display==='none' ? 'block' : 'none';
  };
  const qz = document.getElementById('lq-questions');
  let scores = new Array(t.q.length).fill(null);
  t.q.forEach((q,qi)=>{
    const block = document.createElement('div');
    block.className = 'quiz-q';
    block.innerHTML = `<div class="qtext">${qi+1}. ${q.q}</div>` + q.o.map((o,oi)=>`<button class="opt" data-qi="${qi}" data-oi="${oi}">${o}</button>`).join('');
    qz.appendChild(block);
  });
  qz.querySelectorAll('.opt').forEach(btn=>{
    btn.onclick = ()=>{
      const qi = +btn.dataset.qi, oi = +btn.dataset.oi;
      if(scores[qi] !== null) return;
      const q = t.q[qi];
      scores[qi] = (oi === q.a);
      qz.querySelectorAll(`.opt[data-qi="${qi}"]`).forEach(s=>{ s.disabled=true; if(+s.dataset.oi===q.a) s.classList.add('correct'); });
      if(oi !== q.a) btn.classList.add('wrong');
      if(scores.every(s=>s!==null)){
        const good = scores.filter(Boolean).length;
        document.getElementById('lq-result').innerHTML = `<p style="font-weight:700; margin-top:10px;">Score : ${good}/${t.q.length}</p>`;
        if(good === t.q.length && !LISTENDONE.includes(t.id)){
          LISTENDONE.push(t.id); sSet('progress:listening', LISTENDONE);
          document.getElementById('lq-result').innerHTML += `<span class="badge sage">Audio validé ✓</span>`;
        }
      }
    };
  });
}
