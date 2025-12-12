// Date où le compte à rebours doit s'arrêter
let dateCible = new Date("Jan 5, 2026 12:00:00").getTime();

// Ces valeurs servent à convertir les millisecondes (ms) en unités de temps.
const MS_PAR_SECONDE = 1000;
const MS_PAR_MINUTE = MS_PAR_SECONDE * 60;
const MS_PAR_HEURE = MS_PAR_MINUTE * 60;
const MS_PAR_JOUR = MS_PAR_HEURE * 24;

// On utilise 'setInterval' pour exécuter une fonction toutes les 1000 ms (1 seconde).
let compteARebours = setInterval(function() {

    // A. Récupérer l'heure actuelle
    let maintenant = new Date().getTime();
    
    // B. Calculer la distance
    // La distance est le temps restant en millisecondes.
    let distance = dateCible - maintenant;
    
    
    // C. Convertir la distance en Jours, Heures, Minutes, Secondes
    
    // 1. Calcul des Jours :
    // On divise la distance totale par le nombre de ms dans un jour.
    let jours = Math.floor(distance / MS_PAR_JOUR);

    // 2. Calcul des Heures :
    // On prend le RESTE de la division par un jour (ce qui reste pour les heures/minutes/secondes),
    // puis on le divise par le nombre de ms dans une heure.
    let heures = Math.floor((distance % MS_PAR_JOUR) / MS_PAR_HEURE);
    
    // 3. Calcul des Minutes :
    // On prend le RESTE de la division par une heure, puis on le divise par le nombre de ms dans une minute.
    let minutes = Math.floor((distance % MS_PAR_HEURE) / MS_PAR_MINUTE);
    
    // 4. Calcul des Secondes :
    // On prend le RESTE de la division par une minute, puis on le divise par 1000 ms.
    let secondes = Math.floor((distance % MS_PAR_MINUTE) / MS_PAR_SECONDE);
    

    // D. Afficher le Résultat
    // On met le résultat dans l'élément HTML qui a l'ID "demo"
    document.getElementById("demo").innerHTML ="Fin de la promotion : " + jours + "j " + heures + "h " + minutes + "m " + secondes + "s ";
    
    
    // E. Vérifier si le temps est écoulé
    if (distance < 0) {
        // Arrête la répétition de la fonction (le 'setInterval')
        clearInterval(compteARebours); 
        // Affiche le message de fin
        document.getElementById("demo").innerHTML = "TERMINÉ";
    }
    
}
, MS_PAR_SECONDE); // Répéter la fonction toutes les 1000 ms.