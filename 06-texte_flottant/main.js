// on déclare les variables globales
let data = [];
let textes = [];
const fichier = 'data.txt';

function preload () {
  // je charge le fichier texte dans mon programme
  data = loadStrings(fichier);
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  // je boucle dans mes données (écriture)
  for (let i = 0; i < data.length; i++) {
    //j'injecte dans ma liste textes des instances de la classe Texte
    textes.push(new BlocTexte(width/2, height/2, random(5), data[i], i + 1));
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {
  background(0);
  showMetaData();
  // lecture : j'affiche les blocs texte en parcourant ma liste textes, j'accède ainsi à mes méthodes
  for (let i = 0; i < textes.length; i++) {
    textes[i].init()
  }

}

function mouseReleased(mouseData) {
  // je reparcours ma liste textes et j'accède à une autre méthode pour réinitialiser les coordonnées
  for (let i = 0; i < textes.length; i++) {
    // j'utilise les coordonnées de la souris qui sont stockées dans fxn
    textes[i].reset(mouseData.clientX, mouseData.clientY);
  }
}

function showMetaData () {
  // affiche la quantité de données
  textSize(20);
  fill(255);
  text(data.length, 20, 60);
  text(fichier, 20, 30);
}

