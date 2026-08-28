/* =========================================================
   AUTH (Supabase)
   ========================================================= */
const SUPABASE_URL = 'https://nwljpddjtkqycibltybl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_vtmJpBmw_SdJ6EnxalPwfQ_0csSK8Sc';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let appInitialized = false;
let turnstileToken = null;

function onTurnstileSuccess(token){
  turnstileToken = token;
}
function onTurnstileExpired(){
  turnstileToken = null;
}
function resetTurnstile(){
  turnstileToken = null;
  if(window.turnstile){ turnstile.reset(); }
}

let pendingConfirmEmail = null;

async function handleSignUp(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  errEl.style.color = '';
  errEl.textContent = '';
  if(!email || !password){ errEl.textContent = 'Email et mot de passe requis.'; return; }
  if(!turnstileToken){ errEl.textContent = 'Merci de valider le captcha.'; return; }
  const { data, error } = await sb.auth.signUp({ email, password, options: { captchaToken: turnstileToken } });
  resetTurnstile();
  if(error){ errEl.textContent = error.message; return; }
  if(data.user){
    const { error: profileError } = await sb.from('profiles').insert({ id: data.user.id, username: email });
    if(profileError) console.warn('Profil non créé :', profileError.message);
  }
  if(!data.session){
    pendingConfirmEmail = email;
    document.getElementById('confirm-target-email').textContent = email;
    document.getElementById('auth-fields-block').style.display = 'none';
    document.getElementById('auth-confirm-block').style.display = 'block';
    document.getElementById('confirm-feedback').textContent = '';
    document.getElementById('confirm-code').value = '';
    document.getElementById('confirm-code').focus();
  }
}

async function handleConfirmCode(){
  const code = document.getElementById('confirm-code').value.trim();
  const feedback = document.getElementById('confirm-feedback');
  feedback.style.color = '';
  feedback.textContent = '';
  if(!pendingConfirmEmail){ feedback.textContent = 'Session expirée, recommence l\'inscription.'; return; }
  if(!code){ feedback.textContent = 'Entre le code reçu par email.'; return; }
  const { error } = await sb.auth.verifyOtp({ email: pendingConfirmEmail, token: code, type: 'signup' });
  if(error){ feedback.textContent = error.message; return; }
  feedback.style.color = '#2e7d32';
  feedback.textContent = 'Compte validé ! Connexion…';
  // onAuthStateChange prendra le relais automatiquement une fois la session établie
}

async function handleResendCode(){
  const feedback = document.getElementById('confirm-feedback');
  if(!pendingConfirmEmail){ feedback.textContent = 'Session expirée, recommence l\'inscription.'; return; }
  feedback.style.color = '';
  feedback.textContent = 'Renvoi du code…';
  const { error } = await sb.auth.resend({ type: 'signup', email: pendingConfirmEmail });
  if(error){ feedback.style.color = '#c0392b'; feedback.textContent = error.message; return; }
  feedback.style.color = '#2e7d32';
  feedback.textContent = 'Nouveau code envoyé.';
}

async function handleSignIn(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  errEl.textContent = '';
  if(!email || !password){ errEl.textContent = 'Email et mot de passe requis.'; return; }
  if(!turnstileToken){ errEl.textContent = 'Merci de valider le captcha.'; return; }
  const { error } = await sb.auth.signInWithPassword({ email, password, options: { captchaToken: turnstileToken } });
  resetTurnstile();
  if(error){ errEl.textContent = error.message; }
}

async function handleSignOut(){
  await sb.auth.signOut();
  location.reload();
}

async function handleForgotPassword(){
  const email = document.getElementById('forgot-email').value.trim();
  const feedback = document.getElementById('forgot-feedback');
  feedback.style.color = '';
  if(!email){ feedback.style.color = '#c0392b'; feedback.textContent = 'Entre ton email.'; return; }
  if(!turnstileToken){ feedback.style.color = '#c0392b'; feedback.textContent = 'Merci de valider le captcha.'; return; }
  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://spasibapp.study/',
    captchaToken: turnstileToken
  });
  resetTurnstile();
  if(error){ feedback.style.color = '#c0392b'; feedback.textContent = error.message; return; }
  feedback.style.color = '#2e7d32';
  feedback.textContent = 'Email envoyé — vérifie ta boîte de réception (et les spams).';
}

async function handleUpdatePassword(){
  const newPassword = document.getElementById('recovery-password').value;
  const feedback = document.getElementById('recovery-feedback');
  if(!newPassword || newPassword.length < 8){
    feedback.style.color = '#c0392b';
    feedback.textContent = 'Le mot de passe doit faire au moins 8 caractères.';
    return;
  }
  const { error } = await sb.auth.updateUser({ password: newPassword });
  if(error){
    feedback.style.color = '#c0392b';
    feedback.textContent = error.message;
    return;
  }
  feedback.style.color = '#2e7d32';
  feedback.textContent = 'Mot de passe mis à jour ! Redirection...';
  setTimeout(()=>{ location.href = 'https://spasibapp.study/'; }, 1500);
}

async function ensureProfile(user){
  const { error } = await sb.from('profiles')
    .upsert({ id: user.id, username: user.email }, { onConflict: 'id' });
  if(error) console.error('ensureProfile a échoué', error);
}

renderLandingFeatures();

sb.auth.onAuthStateChange((event, session) => {
  const landingScreen = document.getElementById('landing-screen');
  const authScreen = document.getElementById('auth-screen');
  const recoveryScreen = document.getElementById('recovery-screen');
  const appScreen = document.getElementById('app');

  if(event === 'PASSWORD_RECOVERY'){
    landingScreen.style.display = 'none';
    authScreen.style.display = 'none';
    appScreen.style.display = 'none';
    recoveryScreen.style.display = 'block';
    return;
  }

  if(session){
    currentUserId = session.user.id;
    landingScreen.style.display = 'none';
    authScreen.style.display = 'none';
    recoveryScreen.style.display = 'none';
    appScreen.style.display = '';
    const emailDisplay = document.getElementById('user-email-display');
    if(emailDisplay) emailDisplay.textContent = session.user.email;
    ensureProfile(session.user).then(()=>{
      if(!appInitialized){
        appInitialized = true;
        init();
      }
    });
  } else {
    currentUserId = null;
    recoveryScreen.style.display = 'none';
    authScreen.style.display = 'none';
    appScreen.style.display = 'none';
    landingScreen.style.display = '';
  }
});