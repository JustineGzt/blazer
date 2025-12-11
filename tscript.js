let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // On descend → cacher la bannière
    header.classList.add('hide');
  } else {
    // On remonte → montrer
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});


// telephone nav

  const nav = document.querySelector('.main-nav');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active'); // ajoute/enlève la classe active
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); // accessibilité
  });