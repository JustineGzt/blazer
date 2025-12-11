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
