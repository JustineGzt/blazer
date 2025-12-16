document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = '#9DC1CC';
    card.style.transform = 'scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '#ddd';
    card.style.transform = 'scale(1)';
  });
});





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

