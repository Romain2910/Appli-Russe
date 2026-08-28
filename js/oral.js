/* =========================================================
   ORAL — conversation, phrases, reconnaissance vocale
   ========================================================= */

function renderConversation(){
  const el = document.getElementById('view-conversation');
  el.innerHTML = `
    <div class="eyebrow">Module 6</div>
    <h1 class="pagetitle">Conversation</h1>
    <p class="pagesub">Discute en russe avec un partenaire virtuel adapté à ton niveau. Il corrige tes erreurs et traduit.</p>
    <div class="chatwrap">
      <div class="chatlog" id="chatlog"></div>
      <div class="chat-input-row">
        <input type="text" id="chat-input" placeholder="Écris en russe ou en français..." onkeydown="if(event.key==='Enter') sendConvMessage();" />
        <button class="btn amber" onclick="sendConvMessage()">Envoyer</button>
      </div>
    </div>
  `;
  const log = document.getElementById('chatlog');
  if(convHistory.length === 0){
    log.innerHTML = `<div class="bubble bot"><span class="ru">Привет! Как тебя зовут?</span><br><span style="color:var(--slate); font-size:12.5px;">(Salut ! Comment tu t'appelles ?)</span></div>`;
    convHistory.push({role:'assistant', content:'Привет! Как тебя зовут? (Salut ! Comment tu t\'appelles ?)'});
  } else {
    log.innerHTML = '';
    convHistory.forEach(m=>{
      const b = document.createElement('div');
      b.className = 'bubble ' + (m.role==='user'?'user':'bot');
      b.innerHTML = m.role==='user' ? m.content : `<span class="ru">${m.content}</span>`;
      log.appendChild(b);
    });
  }
  log.scrollTop = log.scrollHeight;
}

async function sendConvMessage(){
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if(!text) return;
  input.value = '';
  const log = document.getElementById('chatlog');
  const ub = document.createElement('div'); ub.className='bubble user'; ub.textContent = text;
  log.appendChild(ub); log.scrollTop = log.scrollHeight;
  convHistory.push({role:'user', content:text});

  const typ = document.createElement('div'); typ.className='typing'; typ.id='typing-ind'; typ.textContent='Il écrit...';
  log.appendChild(typ); log.scrollTop = log.scrollHeight;

  try{
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:400,
        system: CONV_SYSTEM,
        messages: convHistory.map(m=>({role:m.role, content:m.content}))
      })
    });
    const data = await res.json();
    const reply = (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\\n') || 'Извини, попробуй ещё раз.';
    document.getElementById('typing-ind')?.remove();
    const bb = document.createElement('div'); bb.className='bubble bot'; bb.innerHTML = `<span class="ru">${reply}</span>`;
    log.appendChild(bb); log.scrollTop = log.scrollHeight;
    convHistory.push({role:'assistant', content:reply});
  }catch(e){
    document.getElementById('typing-ind')?.remove();
    const bb = document.createElement('div'); bb.className='bubble bot'; bb.textContent = 'Connexion impossible pour le moment. Réessaie.';
    log.appendChild(bb);
  }
}

function renderOral(){
  const el = document.getElementById('view-oral');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const levels = ['Tous','A1','A2','B1'];
  el.innerHTML = `
    <div class="eyebrow">Module 7</div>
    <h1 class="pagetitle">Prononciation</h1>
    <p class="pagesub">Écoute chaque phrase, puis enregistre-toi pour comparer ta prononciation. ${ORAL_BANK.length} phrases classées par niveau et par thème, des formules du quotidien aux nuances B1.${SR? '' : ' <span style="color:var(--rust);">(Reconnaissance vocale non disponible sur ce navigateur — utilise Chrome pour cette fonction.)</span>'}</p>
    <div class="level-tabs" id="oral-tabs"></div>
    <div class="level-tabs" id="oral-theme-tabs" style="margin-top:8px;"></div>
    <div style="display:flex; align-items:center; gap:8px; margin:14px 0 4px; flex-wrap:wrap;">
      <span style="font-size:12.5px; opacity:.65;">Vitesse d'écoute :</span>
      <button class="btn secondary" data-orate="0.7">Lent</button>
      <button class="btn amber" data-orate="0.9">Normal</button>
      <button class="btn secondary" data-orate="1.1">Rapide</button>
    </div>
    <div id="oral-list" style="margin-top:12px;"></div>
  `;
  el.querySelectorAll('[data-orate]').forEach(b=>{
    b.onclick = ()=>{
      oralRate = parseFloat(b.dataset.orate);
      el.querySelectorAll('[data-orate]').forEach(x=>{ x.classList.remove('amber'); x.classList.add('secondary'); });
      b.classList.remove('secondary'); b.classList.add('amber');
    };
  });
  const tabs = document.getElementById('oral-tabs');
  levels.forEach(lv=>{
    const count = lv==='Tous' ? ORAL_BANK.length : ORAL_BANK.filter(p=>p.level===lv).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (oralLevel===lv ? ' active' : '');
    b.textContent = `${lv} (${count})`;
    b.onclick = ()=>{ oralLevel = lv; renderOral(); };
    tabs.appendChild(b);
  });
  const byLevel = oralLevel==='Tous' ? ORAL_BANK : ORAL_BANK.filter(p=>p.level===oralLevel);
  const themesHere = ['Tous', ...Array.from(new Set(byLevel.map(p=>p.theme||'Autre'))).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b))];
  if(!themesHere.includes(oralTheme)) oralTheme = 'Tous';
  const themeTabs = document.getElementById('oral-theme-tabs');
  themesHere.forEach(th=>{
    const count = th==='Tous' ? byLevel.length : byLevel.filter(p=>(p.theme||'Autre')===th).length;
    const b = document.createElement('button');
    b.className = 'level-tab' + (oralTheme===th ? ' active' : '');
    b.style.fontSize = '13px';
    b.textContent = `${th} (${count})`;
    b.onclick = ()=>{ oralTheme = th; renderOral(); };
    themeTabs.appendChild(b);
  });
  const list = document.getElementById('oral-list');
  const filtered = oralTheme==='Tous' ? byLevel : byLevel.filter(p=>(p.theme||'Autre')===oralTheme);
  const levelRank = {A1:0, A2:1, B1:2};
  const groups = {};
  filtered.forEach(p=>{ (groups[p.theme||'Autre'] = groups[p.theme||'Autre'] || []).push(p); });
  const themeNames = Object.keys(groups).sort((a,b)=>themeSortIndex(a)-themeSortIndex(b));
  if(themeNames.length===0){
    list.innerHTML = `<div class="empty">${ic('mic',30)}<p>Aucune phrase à ce niveau / thème.</p></div>`;
  }
  themeNames.forEach(th=>{
    const items = groups[th].slice().sort((a,b)=>(levelRank[a.level]??9)-(levelRank[b.level]??9));
    const header = document.createElement('div');
    header.style.cssText = 'margin:18px 0 8px; font-weight:700; font-size:14px; opacity:.75;';
    header.textContent = `${th} — ${items.length} phrase${items.length>1?'s':''}`;
    list.appendChild(header);
    items.forEach(p=>{
      const done = ORALDONE.includes(p.id);
      const row = document.createElement('div');
      row.className = 'phrase-row';
      row.innerHTML = `
        <div class="lesson-check ${done?'done':''}" style="flex-shrink:0;">${done?ic('check',13):''}</div>
        <button class="iconbtn" aria-label="Écouter">${ic('headphones',15)}</button>
        <div style="flex:1;">
          <div class="ru">${p.ru} <span class="badge amber" style="font-size:10.5px; vertical-align:middle;">${p.level}</span></div>
          <div style="font-size:12px; color:var(--amber-deep);">${p.translit}</div>
          <div id="oral-fb-${p.id}" style="font-size:12.5px; margin-top:4px;"></div>
        </div>
        <button class="iconbtn rec" id="rec-${p.id}" aria-label="S'enregistrer" ${SR?'':'disabled'}>${ic('mic',16)}</button>
      `;
      row.querySelector('.iconbtn:not(.rec)').onclick = ()=>speak(p.ru, oralRate);
      if(SR){
        row.querySelector('#rec-'+p.id).onclick = ()=>startRecognition(p.ru, p.id);
      }
      list.appendChild(row);
    });
  });
}

function startRecognition(target, id){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return;
  const rec = new SR();
  rec.lang = 'ru-RU'; rec.interimResults = false; rec.maxAlternatives = 1;
  const btn = document.getElementById('rec-'+id);
  const fb = document.getElementById('oral-fb-'+id);
  btn.classList.add('active'); fb.textContent = 'Écoute en cours...';
  rec.onresult = (e)=>{
    const said = e.results[0][0].transcript;
    const score = similarity(said.replace(/[.,!?]/g,''), target.replace(/[.,!?]/g,''));
    fb.innerHTML = `Tu as dit : « ${said} » — <b style="color:${score>=70?'var(--sage)':score>=40?'var(--amber-deep)':'var(--rust)'}">${score}% de correspondance</b>`;
    if(score>=70 && !ORALDONE.includes(id)){
      ORALDONE.push(id); sSet('progress:oral', ORALDONE);
      const row = btn.closest('.phrase-row');
      const check = row.querySelector('.lesson-check');
      if(check){ check.classList.add('done'); check.innerHTML = ic('check',13); }
    }
  };
  rec.onerror = ()=>{ fb.textContent = 'Impossible de capter le micro. Vérifie les autorisations du navigateur.'; };
  rec.onend = ()=>{ btn.classList.remove('active'); };
  try{ rec.start(); }catch(e){ fb.textContent = 'Erreur au démarrage du micro.'; btn.classList.remove('active'); }
}
