
const p = document.querySelector('.banniere p');
let lastScroll = window.scrollY;
let pos = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // changer la direction selon le scroll
  if(currentScroll > lastScroll){
    pos += 3; // descend → texte vers la droite
  } else {
    pos -= 3; // remonte → texte vers la gauche
  }

  const textWidth = p.offsetWidth;
  const parentWidth = p.parentElement.offsetWidth;

  // boucle infinie
  if(pos > parentWidth) pos = -textWidth;
  if(pos < -textWidth) pos = parentWidth;

  p.style.left = pos + 'px';

  lastScroll = currentScroll;
});




// Swith mes images par rapport aux boutons de la section NOTRE COLLECTION

const btns = document.querySelectorAll('.btnP button');
const articles = document.querySelectorAll('.imgCollection article');

// Définis les images pour chaque catégorie
const images = {
  pull: ['./img/pull1.png', './img/pull2.png', './img/pull3.png', './img/pull4.png'],
  costume: ['./img/costume1.png', './img/costume2.png', './img/costume3.png', './img/costume4.png'],
  chemise: ['./img/chemise1.png', './img/chemise2.png', './img/chemise3.png', './img/chemise4.png'],
  robe: ['./img/robe1.png', './img/robe2.png', './img/robe3.png', './img/robe4.png']
};

// Fonction pour mettre à jour les articles
function updateArticles(type) {
  articles.forEach((article, index) => {
    // Supprime l'image précédente si elle existe
    article.innerHTML = '';
    // Crée une nouvelle image
    const img = document.createElement('img');
    img.src = images[type][index];
    article.appendChild(img);
  });
}

// Fonction pour gérer le style actif du bouton
function setActiveButton(activeBtn) {
  btns.forEach(btn => {
    btn.style.backgroundColor = ''; // réinitialise
    btn.style.color = '';
  });
  activeBtn.style.backgroundColor = 'black';
  activeBtn.style.color = 'white';
}

// Écoute le clic sur chaque bouton
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    updateArticles(type);
    setActiveButton(btn); // met à jour le style du bouton
  });
});

// Affiche une catégorie par défaut
updateArticles('pull');
setActiveButton(btns[0]);