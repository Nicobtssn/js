//exo 1
function PerimetreAire() {
    var longueur = prompt("longueur :");
    var largeur = prompt("largeur:");
    var air = longueur * largeur;
    var perimetre = (longueur * 2) + (largeur * 2);
    alert("perimetre : " + perimetre + " cm²");
    alert("l'air : " + air + " unité d'air");

}

//exo 2
function PerimetreAireCercle() {
    var longueur = prompt("Longueur cercle:");
    var rayon = longueur / 2;
    var perimetre = 2 * 3.14 * rayon;
    var air = 3.14 * rayon * rayon;
    alert("le perimetre est : " + perimetre + " cm²");
    alert("L'aire du cercle : " + air + " unité d'air");
}

//exo3
var a = 3;
var b = 2;

function Multiplie(x = 8) {
    var result = x * 3;
    alert(result);
}

function Affiche() {
    Multiplie(a);
    Multiplie(b);
    Multiplie();
}

//exo 4
var tab = [-2, 1, 4];

function Additionne(x) {
    var result = x + 2;
    alert(result);
}

function Affiche1() {
    Additionne(tab[0]);
    Additionne(tab[tab.length - 1]);
}

//exo 5
function Boucle() {
    var tab = new Array;
    for (let i = 0; i < 3; i++) {
        tab.push(i * i);
    }
    alert(tab);
}

function Boucle1(n) {
    var longueurTab = prompt("longueur tab souhaiter:");
    var tab = new Array;
    for (let i = 0; i < longueurTab; i++) {
        tab.push(i * i);

    }

    alert(tab);
}

//exo 6
function Soustrait(x) {
    if (x >= 0) {
        alert("X est positif");
    } else {
        alert("X est negatif");
    }
    return x - 2;

}

function Affiche2() {
    var tab = [-2, 1, 4];

    alert(Soustrait(tab[0]));
    alert(Soustrait(tab[tab.length - 1]));


}

//exo 7
function JourDeLaSemaine() {
    var dateObj = new Date();
    var Jour = dateObj.getDay();

    switch (Jour) {
        case 0:
            alert("Dimanche");
            break;
        case 1:
            alert("Lundi");
            break;
        case 2:
            alert("Mardi");
            break;
        case 3:
            alert("Mercredi");
            break;
        case 4:
            alert("Jeudi");
            break;
        case 5:
            alert("Vendredi");
            break;
        case 6:
            alert("Samedi");
            break;

    }
}

//exo 11
function modif_paragraphe() {

    document.getElementById("change").style.fontStyle = "italic";
}

//exo 12
function openFen() {
    myWindow = window.open(" ", " ", "width=250, height=250");
    myWindow.document.write("<p>Ceci n'est vraiment pas une fenêtre de spam, ceci sert juste a montrer ce que fait l'exo 12 =)</p>");
}

function reduireFen() {
    myWindow.resizeTo(200, 200);
    myWindow.focus();
}

function bougeFen() {
    myWindow.moveTo(50, 50);
    myWindow.focus();
}

function bougeFen2() {
    myWindow.moveTo(150, 150);
    myWindow.focus();
}

//exo 13
function proNavigator() {

    alert(navigator.appName);
    alert(navigator.appVersion);
    alert(navigator.buildID);
    alert(navigator.connection);
    alert(navigator.cookieEnabled);
    alert(navigator.Geolocation);
    alert(navigator.plugins);
    alert(navigator.language);
    alert(navigator.onLine);
    alert(navigator.oscpu);
    alert(navigator.permissions);
    alert(navigator.platform);
    alert(navigator.product);
    alert(navigator.serviceWorker);
    alert(navigator.storage);
    alert(navigator.userAgent);
}

//exo 14
function Init() {
    champ = document.getElementById("champsaisie");
    valeurInitiale = champ.value;
    var bouton_soumission = document.getElementById("soumet");
    var bouton_raz = document.getElementById("raz");

    bouton_soumission.onclick = soumission;
    bouton_raz.onclick = remise_a_zero;

}

function soumission(event) {
    alert("Le texte saisi est '" + champ.value + "'");
}

function remise_a_zero(event) {
    alert("Remise à zéro");
    champ.value = valeurInitiale;
}

//exo 15
function init1() {

    var monobjet = addEventListener("click", gestion, false);
}

function gestion() {

    document.getElementById('texte').style.color = 'orange';
}

//défi
