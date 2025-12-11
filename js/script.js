


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
