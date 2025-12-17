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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                    Page Accueil - Timer Promotion
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Date où le compte à rebours doit s'arrêter
let dateCible = new Date("Dec 24, 2025 12:30:00").getTime();

// Valeurs servants à convertir les millisecondes
const msParSeconde = 1000;
const msParMinute = msParSeconde * 60;
const msParHeure = msParMinute * 60;
const msParJour = msParHeure * 24;

// 'setInterval' permet d'exécuter une fonction toutes les 1000 ms (1 seconde).
let compteARebours = setInterval(function() {

    // Récupérer l'heure actuelle
    let maintenant = new Date().getTime();
    
    // Calculer la " distance " entre la date actuelle et la date cible
    let distance = dateCible - maintenant;
    
    // Calcul des jours :
    // On divise la distance totale par le nombre de ms dans un jour.
    let jours = Math.floor(distance / msParJour);

    // Calcul des heures :
    // On prend le RESTE de la division par un jour (ce qui reste pour les heures/minutes/secondes),
    // puis on le divise par le nombre de ms dans une heure.
    let heures = Math.floor((distance % msParJour) / msParHeure);
    
    // Calcul des minutes :
    // On prend le RESTE de la division par une heure, 
    // puis on le divise par le nombre de ms dans une minute.
    let minutes = Math.floor((distance % msParHeure) / msParMinute);
    
    // 4. Calcul des secondes :
    // On prend le RESTE de la division par une minute, 
    // puis on le divise par 1000 ms.
    let secondes = Math.floor((distance % msParMinute) / msParSeconde);
    
    // Affichage du résultat
    // on lie résultat dans l'élément HTML qui a l'ID "promoTimer"
    document.getElementById("promoTimer").innerHTML = jours + "j " + heures + "h " + minutes + "m " + secondes + "s ";
    // Vérifier si le temps est écoulé
    if(distance < 0) {
        // Arrête la répétition de la fonction (le 'setInterval')
        clearInterval(compteARebours); 
        // Affiche le message de fin
        document.getElementById("promoTimer").innerHTML = "TERMINÉ";
    }
    
    const timerElement = document.getElementById("promoTimer"); // Simplification de la sélection
    if(jours <= 3) {
        timerElement.style.color = 'red';
    }
}
, 1000); // Répéter la fonction toutes les 1000 ms.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                    Page Resultat - Récupération des données
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        
// 1. Récupérer la chaîne de caractères stockée dans le localStorage
const donneesJSON = localStorage.getItem('donneesContact');

// 2. Convertir la chaîne JSON en un objet JavaScript utilisable
const donnees = JSON.parse(donneesJSON);

// 3. Afficher les données dans les éléments du DOM
document.getElementById('displaySujet').textContent = donnees.sujet;
document.getElementById('displayNom').textContent = donnees.nom;
document.getElementById('displayPrenom').textContent = donnees.prenom;
document.getElementById('displayEmail').textContent = donnees.email;
document.getElementById('displayMessage').textContent = donnees.message;

// Optionnel : Nettoyer le localStorage après l'affichage pour la prochaine fois
localStorage.removeItem('donneesContact');

