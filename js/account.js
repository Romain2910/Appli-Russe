/* =========================================================
   COMPTE, AIDE, MENTIONS LEGALES, PAGE D'ACCUEIL
   ========================================================= */

function renderAccount(){
  const el = document.getElementById('view-account');
  const email = (sb.auth.getUser ? '' : '');
  el.innerHTML = `
    <div class="eyebrow">Paramètres</div>
    <h1 class="pagetitle">Mon compte</h1>
    <p class="pagesub">Gère ton compte : email, mot de passe, et suppression de tes données.</p>

    <div class="grid" style="max-width:520px; gap:18px;">
      <div class="card">
        <div style="font-weight:700; margin-bottom:4px;">Email connecté</div>
        <div id="account-email-value" style="color:var(--slate);">…</div>
      </div>

      <div class="card">
        <div style="font-weight:700; margin-bottom:10px;">Changer de mot de passe</div>
        <input id="account-current-password" type="password" placeholder="Mot de passe actuel" style="display:block; width:100%; margin-bottom:8px; padding:10px; box-sizing:border-box; border-radius:8px; border:1px solid var(--line); font-family:inherit;">
        <input id="account-new-password" type="password" placeholder="Nouveau mot de passe (8 caractères min.)" style="display:block; width:100%; margin-bottom:8px; padding:10px; box-sizing:border-box; border-radius:8px; border:1px solid var(--line); font-family:inherit;">
        <button class="btn" onclick="handleChangePasswordLoggedIn()">Mettre à jour le mot de passe</button>
        <p id="account-password-feedback" style="font-size:13px; margin-top:8px; min-height:1.2em;"></p>
      </div>

      <div class="card">
        <button class="btn secondary" onclick="handleSignOut()">Se déconnecter</button>
      </div>

      <div class="card" style="border-color:var(--rust);">
        <div style="font-weight:700; margin-bottom:4px; color:var(--rust);">Zone dangereuse</div>
        <p style="font-size:13.5px; color:var(--slate); margin-bottom:10px;">
          Supprime définitivement toute ta progression (grammaire, vocabulaire, examens, etc.).
          Cette action est irréversible.
        </p>
        <p style="font-size:13px; margin-bottom:6px;">Tape <b>SUPPRIMER</b> pour confirmer :</p>
        <input id="account-delete-confirm" type="text" placeholder="SUPPRIMER" style="display:block; width:100%; margin-bottom:8px; padding:10px; box-sizing:border-box; border-radius:8px; border:1px solid var(--line); font-family:inherit;">
        <button class="btn" style="background:var(--rust); border-color:var(--rust);" onclick="handleDeleteAccount()">Supprimer mon compte et mes données</button>
        <p id="account-delete-feedback" style="font-size:13px; margin-top:8px; min-height:1.2em;"></p>
      </div>
    </div>
  `;
  sb.auth.getUser().then(({data})=>{
    const v = document.getElementById('account-email-value');
    if(v && data && data.user) v.textContent = data.user.email;
  });
}

async function handleChangePasswordLoggedIn(){
  const currentPassword = document.getElementById('account-current-password').value;
  const newPassword = document.getElementById('account-new-password').value;
  const feedback = document.getElementById('account-password-feedback');
  feedback.style.color = '';
  if(!currentPassword){
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Entre ton mot de passe actuel.';
    return;
  }
  if(!newPassword || newPassword.length < 8){
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Le mot de passe doit faire au moins 8 caractères.';
    return;
  }
  const { error } = await sb.auth.updateUser({ password: newPassword, current_password: currentPassword });
  if(error){
    feedback.style.color = '#c0392b';
    feedback.textContent = error.message;
    return;
  }
  feedback.style.color = '#2e7d32';
  feedback.textContent = 'Mot de passe mis à jour.';
  document.getElementById('account-current-password').value = '';
  document.getElementById('account-new-password').value = '';
}

async function handleDeleteAccount(){
  const confirmVal = document.getElementById('account-delete-confirm').value.trim();
  const feedback = document.getElementById('account-delete-feedback');
  feedback.style.color = '#c0392b';
  if(confirmVal !== 'SUPPRIMER'){
    feedback.textContent = 'Tape exactement SUPPRIMER dans le champ pour confirmer.';
    return;
  }
  if(!currentUserId){ feedback.textContent = 'Erreur : utilisateur non identifié.'; return; }
  feedback.style.color = '';
  feedback.textContent = 'Suppression en cours…';
  try{
    const { data, error } = await sb.functions.invoke('delete-account', { method: 'POST' });
    if(error || (data && data.error)) throw new Error((data && data.error) || error.message || 'Erreur serveur');

    feedback.style.color = '#2e7d32';
    feedback.textContent = 'Ton compte et tes données ont été supprimés. Déconnexion…';
    setTimeout(()=>{ handleSignOut(); }, 1500);
  }catch(e){
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Erreur lors de la suppression : ' + (e.message || e);
  }
}

function renderHelp(){
  const el = document.getElementById('view-help');
  el.innerHTML = `
    <div class="eyebrow">Support</div>
    <h1 class="pagetitle">Aide</h1>
    <p class="pagesub">Une question, un bug, une suggestion ?</p>
    <div class="card" style="max-width:520px;">
      <p style="margin-bottom:10px;">Écris-nous à :</p>
      <p style="font-weight:700; font-size:16px;">contact@spasibapp.study</p>
    </div>
  `;
}

function renderLegal(targetId){
  targetId = targetId || 'view-legal';
  const el = document.getElementById(targetId);
  el.innerHTML = `
    <div class="eyebrow">Informations</div>
    <h1 class="pagetitle">Mentions légales</h1>
    <p class="pagesub">Mentions légales, conditions d'utilisation et politique de confidentialité de Spasibapp.</p>

    <div style="display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap;">
      <button class="btn secondary" id="legal-tab-mentions-${targetId}" onclick="showLegalTab('mentions','${targetId}')">Mentions légales</button>
      <button class="btn secondary" id="legal-tab-cgu-${targetId}" onclick="showLegalTab('cgu','${targetId}')">CGU</button>
      <button class="btn secondary" id="legal-tab-confid-${targetId}" onclick="showLegalTab('confid','${targetId}')">Confidentialité</button>
    </div>

    <div class="card" id="legal-panel-mentions-${targetId}" style="max-width:700px; line-height:1.75; font-size:14.5px; display:none;">
      <h3 style="margin-top:0;">Éditeur du site</h3>
      <p>Le site <b>Spasibapp</b> (spasibapp.study) est un projet personnel, non commercial, édité à titre individuel et sans structure juridique (aucune société). Il n'y a aucun paiement ni monétisation sur ce site.</p>
      <p>Contact : <b>contact@spasibapp.study</b></p>
      <p>Directeur de la publication : l'éditeur du site, joignable à l'adresse ci-dessus. Conformément à la loi, ses coordonnées complètes peuvent être communiquées aux autorités compétentes qui en feraient la demande auprès de l'hébergeur.</p>

      <h3>Hébergement du site</h3>
      <p>Vercel Inc.<br>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br>https://vercel.com — privacy@vercel.com</p>

      <h3>Hébergement des données (base de données et authentification)</h3>
      <p>Supabase — infrastructure hébergée dans l'Union Européenne (région eu-west-1, Dublin, Irlande).</p>

      <h3>Envoi d'emails</h3>
      <p>Resend, utilisé pour l'envoi des emails transactionnels (confirmation de compte, réinitialisation de mot de passe).</p>

      <h3>Propriété intellectuelle</h3>
      <p>Le contenu pédagogique du site (textes, exercices, structure du cours) est la propriété de l'éditeur du site, sauf mention contraire. Toute reproduction sans autorisation est interdite.</p>
    </div>

    <div class="card" id="legal-panel-cgu-${targetId}" style="max-width:700px; line-height:1.75; font-size:14.5px; display:none;">
      <h3 style="margin-top:0;">Objet</h3>
      <p>Spasibapp est un site gratuit d'auto-apprentissage du russe. Aucun paiement n'est demandé, sur aucune fonctionnalité du site à ce jour.</p>

      <h3>Accès au service</h3>
      <p>L'accès nécessite la création d'un compte (email + mot de passe). L'inscription est ouverte à tous. Si vous êtes mineur, l'inscription doit se faire avec l'accord d'un parent ou tuteur légal.</p>

      <h3>Utilisation</h3>
      <p>Le service est fourni à des fins d'apprentissage personnel. Vous vous engagez à ne pas détourner le service de son usage normal (tentative d'accès non autorisé, perturbation du service, usage automatisé abusif, etc.).</p>

      <h3>Disponibilité</h3>
      <p>Le site est fourni "en l'état", sans garantie de disponibilité continue. Des interruptions peuvent survenir (maintenance, panne, limites du plan d'hébergement gratuit utilisé). L'éditeur ne saurait être tenu responsable des conséquences d'une indisponibilité temporaire.</p>

      <h3>Contenu pédagogique</h3>
      <p>Le contenu est produit avec le plus grand soin mais n'a pas fait l'objet d'une relecture par un locuteur natif certifié. Il est fourni à titre d'aide à l'apprentissage, sans garantie d'exhaustivité ou d'absence d'erreur.</p>

      <h3>Suppression de compte</h3>
      <p>Vous pouvez supprimer votre compte et vos données à tout moment depuis la page "Mon compte".</p>

      <h3>Modification des CGU</h3>
      <p>Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle publiée sur cette page.</p>

      <h3>Droit applicable</h3>
      <p>Les présentes CGU sont soumises au droit français.</p>
    </div>

    <div class="card" id="legal-panel-confid-${targetId}" style="max-width:700px; line-height:1.75; font-size:14.5px; display:none;">
      <h3 style="margin-top:0;">Responsable du traitement</h3>
      <p>L'éditeur de Spasibapp, contact : contact@spasibapp.study.</p>

      <h3>Données collectées</h3>
      <ul style="margin:0 0 0 18px; padding:0;">
        <li>Adresse email (identifiant de connexion)</li>
        <li>Mot de passe (jamais stocké en clair, géré et chiffré par Supabase Auth)</li>
        <li>Données de progression pédagogique (résultats d'exercices, niveaux atteints, historique d'apprentissage)</li>
      </ul>

      <h3>Finalité</h3>
      <p>Ces données servent uniquement à faire fonctionner le service : authentification, sauvegarde et restitution de votre progression d'un appareil à l'autre.</p>

      <h3>Base légale</h3>
      <p>Exécution du service demandé par l'utilisateur lors de la création de son compte.</p>

      <h3>Sous-traitants</h3>
      <ul style="margin:0 0 0 18px; padding:0;">
        <li><b>Vercel</b> — hébergement du site</li>
        <li><b>Supabase</b> — base de données et authentification (données hébergées dans l'UE, Dublin)</li>
        <li><b>Resend</b> — envoi des emails transactionnels</li>
        <li><b>Cloudflare (Turnstile)</b> — protection anti-robot au moment de l'inscription/connexion</li>
      </ul>

      <h3>Cookies et stockage local</h3>
      <p>Le site utilise uniquement le stockage technique nécessaire au fonctionnement (jeton de connexion sécurisé). Aucun cookie publicitaire ni traceur tiers n'est utilisé.</p>

      <h3>Durée de conservation</h3>
      <p>Vos données sont conservées tant que votre compte existe. Vous pouvez les supprimer à tout moment depuis la page "Mon compte".</p>

      <h3>Vos droits</h3>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité de vos données. Vous pouvez les exercer en nous écrivant à contact@spasibapp.study, ou directement en supprimant votre compte depuis le site.</p>

      <h3>Sécurité</h3>
      <p>L'accès à vos données est protégé par des règles de sécurité au niveau de la base de données (chaque utilisateur ne peut accéder qu'à ses propres données), et les échanges avec le site sont chiffrés (HTTPS).</p>
    </div>
  `;
  showLegalTab('mentions', targetId);
}

function showLegalTab(tab, targetId){
  targetId = targetId || 'view-legal';
  ['mentions','cgu','confid'].forEach(t=>{
    const panel = document.getElementById('legal-panel-'+t+'-'+targetId);
    if(panel) panel.style.display = (t===tab) ? 'block' : 'none';
    const btn = document.getElementById('legal-tab-'+t+'-'+targetId);
    if(btn){
      if(t===tab){ btn.classList.remove('secondary'); }
      else{ btn.classList.add('secondary'); }
    }
  });
}

function renderLandingFeatures(){
  const grid = document.getElementById('land-feature-grid');
  if(!grid) return;
  grid.innerHTML = LANDING_FEATURES.map(f => `
    <div class="feature-card">
      <div class="n">${f.n}</div>
      <div class="icn">${ic(f.icon, 18)}</div>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
      <div class="fp-preview">${f.preview}</div>
    </div>
  `).join('');
}

function showLanding(){
  document.getElementById('landing-screen').style.display = '';
  document.getElementById('auth-screen').style.display = 'none';
}

function goToAuth(){
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'block';
  document.getElementById('auth-fields-block').style.display = 'block';
  document.getElementById('auth-confirm-block').style.display = 'none';
  window.scrollTo(0,0);
}

function openLegalOverlay(tab){
  renderLegal('landing-legal-content');
  showLegalTab(tab || 'mentions', 'landing-legal-content');
  document.getElementById('legal-overlay').style.display = 'flex';
}
