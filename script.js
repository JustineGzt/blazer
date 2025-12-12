const toggle = document.getElementById("toggle");
const menu = document.querySelector(".menu-mobile");

// Ouvrir / fermer le menu avec le burger
toggle.addEventListener("click", (e) => {
    menu.classList.toggle("show");
    e.stopPropagation(); // empêche le clic de se propager au document
});

// Fermer le menu quand on clique n'importe où sur le menu lui-même
menu.addEventListener("click", () => {
    menu.classList.remove("show");
});
