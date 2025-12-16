// ---------------- MENU PROFIL ----------------
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");
const mainNav = document.querySelector(".main-nav");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("active"); // active/désactive le menu
  mainNav.classList.toggle("profile-active");
});

// ---------------- MENU BURGER ----------------
const burger = document.querySelector(".burger");
const navLeft = document.querySelector(".nav-left");

if(burger && navLeft) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLeft.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  navLeft.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove("open");
      navLeft.classList.remove("active");
    });
  });
}



const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});
