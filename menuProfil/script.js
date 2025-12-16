// ===== MENU PROFIL =====
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');

profileBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Empêche le clic de remonter au document
  profileMenu.classList.toggle('active');
});

// Empêche le clic dans le menu de fermer celui-ci
profileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Fermer le menu profil si clic en dehors
document.addEventListener('click', () => {
  profileMenu.classList.remove('active');
});

// ===== MENU BURGER =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav__links');

burger.addEventListener('click', (e) => {
  e.stopPropagation(); // optionnel si tu veux éviter la propagation
  navLinks.classList.toggle('active');
  burger.classList.toggle('active'); // pour animation si tu veux
});

// Fermer menu burger si clic sur un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  });
});

// Optionnel : fermer menu burger si clic en dehors
document.addEventListener('click', () => {
  navLinks.classList.remove('active');
  burger.classList.remove('active');
});
