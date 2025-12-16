// ====== SECTIONS COMMANDES ======
const historiqueBtn = document.getElementById('historique-btn');
const statutBtn = document.getElementById('statut-btn');
const historiqueContent = document.getElementById('historique-content');
const statutContent = document.getElementById('statut-content');

if (historiqueBtn && statutBtn && historiqueContent && statutContent) {
  historiqueBtn.addEventListener('click', () => {
    historiqueContent.classList.remove('hidden');
    statutContent.classList.add('hidden');
  });

  statutBtn.addEventListener('click', () => {
    statutContent.classList.remove('hidden');
    historiqueContent.classList.add('hidden');
  });
}

// ====== BOUTON ENVOYER COMMENTAIRE ======
const envoyerBtn = document.getElementById('envoyer');
if (envoyerBtn) {
  envoyerBtn.addEventListener('click', () => {
    const message = document.getElementById('message').value.trim();
    if (message) {
      alert(`Message envoyé : ${message}`);
      document.getElementById('message').value = '';
    } else {
      alert("Écrivez un message avant d'envoyer.");
    }
  });
}

// ====== MENU PROFIL ======
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
const mainNav = document.querySelector(".main-nav");

if (profileBtn && profileMenu && mainNav) {
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la fermeture immédiate
    profileMenu.classList.toggle('active');
    mainNav.classList.toggle('profile-active');
  });

  // Fermer menu profil si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target) && e.target !== profileBtn) {
      profileMenu.classList.remove('active');
      mainNav.classList.remove('profile-active');
    }
  });
}

// ====== BURGER MENU MOBILE ======
const burger = document.querySelector('.burger');
const navLeft = document.querySelector('.nav-left');

if (burger && navLeft) {
  burger.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    burger.classList.toggle('open');

    // Fermer le menu profil si on ouvre le burger
    if (profileMenu.classList.contains('active')) {
      profileMenu.classList.remove('active');
      mainNav.classList.remove('profile-active');
    }
  });

  // Fermeture nav si on clique sur un lien (mobile)
  navLeft.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLeft.classList.remove('active');
      burger.classList.remove('open');
    });
  });
}
