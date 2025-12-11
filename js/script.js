// 3. Le Code JavaScript
// Ce code ajoute la classe active à la balise <nav> lorsque l'utilisateur clique sur l'icône du burger. Cela déclenche tous les styles définis ci-dessus.

// Tu dois placer ce script juste avant la fermeture de la balise </body> dans ton fichier HTML.

// JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav'); 

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle la classe 'active' sur l'élément <nav>
            nav.classList.toggle('active');
        });
    }
});

