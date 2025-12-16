document.addEventListener('DOMContentLoaded', () => {

  // ---------------- BANNIERE ----------------
  const p = document.querySelector('.banniere p');
  let lastScroll = window.scrollY;
  let pos = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if(currentScroll > lastScroll){
      pos += 3; // descend → texte vers la droite
    } else {
      pos -= 3; // remonte → texte vers la gauche
    }

    const textWidth = p.offsetWidth;
    const parentWidth = p.parentElement.offsetWidth;  

    if(pos > parentWidth) pos = -textWidth;
    if(pos < -textWidth) pos = parentWidth;

    p.style.left = pos + 'px';
    lastScroll = currentScroll;
  });

  // ---------------- MENU BURGER ----------------
  const burger = document.querySelector('.burger');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');

  // Vérifier si on est sur mobile
  function isMobile() {
    return window.innerWidth <= 426;
  }

  // Toujours attacher le listener, mais n'agir que si on est en mobile
  burger.addEventListener('click', (e) => {
    if (!isMobile()) return;
    e.stopPropagation();
    burger.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
  });

  // Fermer le menu burger quand on clique sur un lien (mobile only)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (!isMobile()) return;
      burger.classList.remove('active');
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
    });
  });

  // Fermer le menu burger au clic ailleurs
  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    if (!e.target.closest('nav')) {
      burger.classList.remove('active');
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
    }
  });

  // Fermer/ajuster au redimensionnement: si on passe à tablette/PC, s'assurer que le menu est fermé
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      burger.classList.remove('active');
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
    } else {
      // en mobile, garder le menu fermé jusqu'au clic
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
    }
  });

  // ---------------- MENU PROFIL ----------------
  const profileBtn = document.getElementById('profileBtn');
  const profileMenu = document.getElementById('profileMenu');
  const nav = document.querySelector('nav');
  const initialNavHeight = nav.offsetHeight;

  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle('active');

    if(profileMenu.classList.contains('active')){
      // Attendre que le menu soit visible pour mesurer sa hauteur
      setTimeout(() => {
        const totalHeight = profileMenu.offsetHeight + initialNavHeight + 80; // Espace supplémentaire pour le menu
        nav.style.height = totalHeight + 'px';
      }, 0);
    } else {
      nav.style.height = initialNavHeight + 'px';
    }
  });

  profileMenu.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', () => {
    if(profileMenu.classList.contains('active')){
      profileMenu.classList.remove('active');
      nav.style.height = initialNavHeight + 'px';
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
      if(profileMenu.classList.contains('active')){
        profileMenu.classList.remove('active');
        nav.style.height = initialNavHeight + 'px';
      }
    }
  });
  

  // ---------------- NOTRE COLLECTION ----------------
  const btns = document.querySelectorAll('.btnP button');
  const articles = document.querySelectorAll('.imgCollection article');

  const images = {
    pull: ['./img/pull1.png', './img/pull2.png', './img/pull3.png', './img/pull4.png'],
    costume: ['./img/costume1.png', './img/costume2.png', './img/costume3.png', './img/costume4.png'],
    chemise: ['./img/chemise1.png', './img/chemise2.png', './img/chemise3.png', './img/chemise4.png'],
    robe: ['./img/robe1.png', './img/robe2.png', './img/robe3.png', './img/robe4.png']
  };

  function updateArticles(type) {
    articles.forEach((article, index) => {
      article.innerHTML = '';
      const img = document.createElement('img');
      img.src = images[type][index];
      img.alt = type + ' ' + (index + 1);
      article.appendChild(img);
    });
  }

  function setActiveButton(activeBtn) {
    btns.forEach(btn => {
      btn.style.backgroundColor = '';
      btn.style.color = '';
    });
    activeBtn.style.backgroundColor = 'black';
    activeBtn.style.color = 'white';
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      updateArticles(type);
      setActiveButton(btn);
    });
  });

  // Affiche une catégorie par défaut
  updateArticles('pull');
  setActiveButton(btns[0]);

});
