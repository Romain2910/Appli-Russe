/* =========================================================
   LECTURE
   ========================================================= */

function renderReadingList(){
  const el = document.getElementById('view-reading');
  const levels = ['Tous','A1','A2','B1'];
  el.innerHTML = `
    <div class="eyebrow">Module 4</div>
    <h1 class="pagetitle">Compréhension écrite</h1>
    <p class="pagesub">Lis le texte russe (survole n'importe quel mot souligné avec la souris pour voir sa traduction, ou touche-le sur mobile), puis vérifie ta compréhension avec les questions. ${TEXTS.length} textes disponibles, regroupés par niveau puis par thème — plusieurs textes d'un même thème partagent souvent le même vocabulaire avec des phrases différentes, pour le réviser sous plusieurs angles.</p>
    <div class="level-tabs" id="reading-tabs"></div>
    <div class="level-tabs" id="reading-theme-tabs" style="margin-top:8px;"></div>
    <div id="text-list"></div>
  `;
  const tabs = document.getElementById('reading-tabs');
  levels.forEach(lv=>{
    const count = lv==='Tous' ? TEXTS.length : TEXTS.filter(t=>t.level===lv).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (readingLevel===lv ? ' active' : '');
    b.textContent = `${lv} (${count})`;
    b.onclick = ()=>{ readingLevel = lv; renderReadingList(); };
    tabs.appendChild(b);
  });
  const byLevel = readingLevel==='Tous' ? TEXTS : TEXTS.filter(t=>t.level===readingLevel);
  const themesHere = ['Tous', ...Array.from(new Set(byLevel.map(t=>t.theme||'Autre'))).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b))];
  if(!themesHere.includes(readingTheme)) readingTheme = 'Tous';
  const themeTabs = document.getElementById('reading-theme-tabs');
  themesHere.forEach(th=>{
    const count = th==='Tous' ? byLevel.length : byLevel.filter(t=>(t.theme||'Autre')===th).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (readingTheme===th ? ' active' : '');
    b.style.fontSize = '13px';
    b.textContent = `${th} (${count})`;
    b.onclick = ()=>{ readingTheme = th; renderReadingList(); };
    themeTabs.appendChild(b);
  });
  const list = document.getElementById('text-list');
  const filtered = readingTheme==='Tous' ? byLevel : byLevel.filter(t=>(t.theme||'Autre')===readingTheme);
  if(filtered.length===0){
    list.innerHTML = `<div class="empty">${ic('file',30)}<p>Aucun texte à ce niveau / thème.</p></div>`;
    return;
  }
  // Group by theme, in THEME_ORDER, then within a theme keep level order A1/A2/B1
  const levelRank = {A1:0, A2:1, B1:2};
  const groups = {};
  filtered.forEach(t=>{
    const th = t.theme || 'Autre';
    (groups[th] = groups[th] || []).push(t);
  });
  const themeNames = Object.keys(groups).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b));
  themeNames.forEach(th=>{
    const items = groups[th].slice().sort((a,b)=>(levelRank[a.level]??9)-(levelRank[b.level]??9));
    const header = document.createElement('div');
    header.className = 'theme-tag';
    header.style.cssText = 'margin:18px 0 8px; font-weight:700; font-size:14px; opacity:.75;';
    header.textContent = `${th} — ${items.length} texte${items.length>1?'s':''}`;
    list.appendChild(header);
    items.forEach(t=>{
      const done = READDONE.includes(t.id);
      const row = document.createElement('div');
      row.className = 'lesson-row'; row.style.cursor='pointer';
      row.innerHTML = `<div class="li-left"><div class="lesson-check ${done?'done':''}">${done?ic('check',13):''}</div><div><div class="lesson-title">${t.title}</div><div class="lesson-sub"><span class="badge amber">${t.level}</span></div></div></div><div>${ic('arrow',16)}</div>`;
      row.onclick = ()=>renderReadingText(t.id);
      list.appendChild(row);
    });
  });
}

function renderReadingText(id){
  const t = TEXTS.find(x=>x.id===id);
  const el = document.getElementById('view-reading');
  const levelRank = {A1:0, A2:1, B1:2};
  const related = TEXTS.filter(x=>x.id!==t.id && x.theme===t.theme)
    .sort((a,b)=>(levelRank[a.level]??9)-(levelRank[b.level]??9));
  const relatedHtml = related.length ? `
    <div class="card" style="margin-top:16px;">
      <h3 style="margin:0 0 10px;">Autres textes sur « ${t.theme||''} »</h3>
      <p style="margin:0 0 10px; font-size:13px; opacity:.7;">Même thème, souvent le même vocabulaire — des phrases différentes pour le revoir sous un autre angle.</p>
      <div id="related-list"></div>
    </div>` : '';
  el.innerHTML = `
    <button class="btn secondary" style="margin-bottom:16px;" onclick="renderReadingList()">← Retour</button>
    <div class="eyebrow">${t.level} · ${t.theme||''}</div>
    <h1 class="pagetitle" style="font-size:24px;">${t.title}</h1>
    <div class="text-card">
      <div class="ru-text">${renderGlossedText(t.ru)}</div>
      <button class="btn secondary" style="margin-top:14px;" id="toggle-fr">Afficher la traduction</button>
      <div class="fr-text" id="fr-block" style="display:none;">${t.fr}</div>
    </div>
    <div class="card" id="reading-quiz">
      <h3 style="margin:0 0 14px;">Compréhension</h3>
      <div id="rq-questions"></div>
      <div id="rq-result"></div>
    </div>
    ${relatedHtml}
  `;
  if(related.length){
    const rl = document.getElementById('related-list');
    related.forEach(rt=>{
      const done = READDONE.includes(rt.id);
      const row = document.createElement('div');
      row.className = 'lesson-row'; row.style.cursor='pointer';
      row.innerHTML = `<div class="li-left"><div class="lesson-check ${done?'done':''}">${done?ic('check',13):''}</div><div><div class="lesson-title">${rt.title}</div><div class="lesson-sub"><span class="badge amber">${rt.level}</span></div></div></div><div>${ic('arrow',16)}</div>`;
      row.onclick = ()=>renderReadingText(rt.id);
      rl.appendChild(row);
    });
  }
  document.getElementById('toggle-fr').onclick = ()=>{
    const b = document.getElementById('fr-block');
    b.style.display = b.style.display==='none' ? 'block' : 'none';
  };
  const qz = document.getElementById('rq-questions');
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
        document.getElementById('rq-result').innerHTML = `<p style="font-weight:700; margin-top:10px;">Score : ${good}/${t.q.length}</p>`;
        if(good === t.q.length && !READDONE.includes(t.id)){
          READDONE.push(t.id); sSet('progress:reading', READDONE);
          document.getElementById('rq-result').innerHTML += `<span class="badge sage">Texte validé ✓</span>`;
        }
      }
    };
  });
}

function stripGloss(text){
  return text.replace(/\[\[[^\]]*\]\]/g, '');
}
