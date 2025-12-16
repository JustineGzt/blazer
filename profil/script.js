// ---------------- MENU PROFIL ----------------
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");
const mainNav = document.querySelector(".main-nav");

if (profileBtn && profileMenu && mainNav) {
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche la fermeture immédiate du menu
    profileMenu.classList.toggle("active");
    mainNav.classList.toggle("profile-active");
  });

  // Fermer le menu quand on clique en dehors
  document.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target) && e.target !== profileBtn) {
      profileMenu.classList.remove("active");
      mainNav.classList.remove("profile-active");
    }
  });
}

// ---------------- MENU BURGER ----------------
const burger = document.querySelector(".burger");
const navLeft = document.querySelector(".nav-left");

if (burger && navLeft) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLeft.classList.toggle("active");

    // Fermer le menu profil si ouvert en même temps que le burger
    if (profileMenu.classList.contains("active")) {
      profileMenu.classList.remove("active");
      mainNav.classList.remove("profile-active");
    }
  });

  // Fermer le menu burger quand on clique sur un lien
  navLeft.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove("open");
      navLeft.classList.remove("active");
    });
  });
}
