// ============================================================================
// ============================= MENU PROFIL ===================================
// ============================================================================

// Récupère le bouton profil (icône utilisateur)
const profileBtn = document.getElementById("profileBtn");
// Récupère le menu déroulant du profil
const profileMenu = document.getElementById("profileMenu");
// Récupère la barre de navigation principale
const mainNav = document.querySelector(".main-nav");

// Sécurité : on vérifie que tous les éléments existent dans le HTML
// (évite les erreurs JS si le script est chargé sur une autre page)
if (profileBtn && profileMenu && mainNav) {

  // ---------------- OUVERTURE / FERMETURE MENU PROFIL ----------------
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Empêche l'événement de remonter au document
    // Sans ça : le menu s'ouvrirait puis se fermerait immédiatement

    profileMenu.classList.toggle("active");
    // Ajoute ou retire la classe "active" au menu profil
    // → active = menu visible

    mainNav.classList.toggle("profile-active");
    // Ajoute une classe à la navbar
    // → permet d’agrandir la nav quand le menu est ouvert (CSS)
  });

  // ---------------- FERMETURE AU CLIC EXTERIEUR ----------------
  document.addEventListener("click", (e) => {

    // Si le clic n’est PAS dans le menu profil
    // ET que ce n’est PAS le bouton profil
    if (!profileMenu.contains(e.target) && e.target !== profileBtn) {

      profileMenu.classList.remove("active");
      // Cache le menu profil

      mainNav.classList.remove("profile-active");
      // Remet la navbar à sa taille normale
    }
  });
}

// ============================================================================
// ============================= MENU BURGER ===================================
// ============================================================================

// Récupère le bouton burger (3 traits)
const burger = document.querySelector(".burger");
// Récupère le menu de gauche (liens Accueil, Nouveautés, etc.)
const navLeft = document.querySelector(".nav-left");

// Vérification de sécurité
if (burger && navLeft) {

  // ---------------- OUVERTURE / FERMETURE BURGER ----------------
  burger.addEventListener("click", () => {

    burger.classList.toggle("open");
    // Animation du bouton burger (croix ↔ lignes)

    navLeft.classList.toggle("active");
    // Affiche ou cache le menu mobile

    // ---------------- GESTION CONFLIT AVEC MENU PROFIL ----------------
    // Si le menu profil est ouvert en même temps
    if (profileMenu.classList.contains("active")) {
      profileMenu.classList.remove("active");
      // Ferme le menu profil

      mainNav.classList.remove("profile-active");
      // Réduit la navbar
    }
  });

  // ---------------- FERMETURE BURGER AU CLIC SUR UN LIEN ----------------
  navLeft.querySelectorAll('a').forEach(link => {
    // Pour chaque lien du menu mobile

    link.addEventListener('click', () => {
      burger.classList.remove("open");
      // Réinitialise l’icône burger

      navLeft.classList.remove("active");
      // Ferme le menu mobile après navigation
    });
  });
}





let cart = [];
const cartIcon = document.querySelector('nav .fa-cart-shopping');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');


// 2. Ouvrir/Fermer le panier
cartIcon.addEventListener('click', () => {
  cartModal.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
  cartModal.classList.remove('active');
});

// 3. Ajouter un produit au panier
document.querySelectorAll('.product-card .fa-cart-shopping').forEach((icon, index) => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = icon.closest('.product-card');
    const title = card.querySelector('p:first-child').textContent;
    const price = parseFloat(card.querySelector('p:nth-child(2)').textContent.replace('Prix : ', '').replace(' €', ''));
    const imgSrc = card.querySelector('img').src;

    const product = { title, price, imgSrc };
    cart.push(product);
    updateCart();
    showNotification();
  });
});

// 4. Mettre à jour l'affichage du panier
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.title}">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>${item.price} €</p>
        <span class="remove-item" data-index="${index}">Supprimer</span>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });

  cartTotalElement.textContent = `${total} €`;

  // Ajouter les événements de suppression
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// 5. Notification "Ajouté au panier"
function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Produit ajouté au panier !';
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#9DC1CC';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '1000';
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

