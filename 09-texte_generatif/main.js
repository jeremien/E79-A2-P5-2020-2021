// définir 3 variables
// data > charger le modèle
// grammar > instance Rigrammar > rita > CFG
// font > on charge un fichier de font
let data, grammar, font
// textes > liste > pour stocker les instances de notre classe Texte / objet
let textes = []

function preload() {
  // on charge les données locales / on les parse
  let file = `./model.json`
  data = loadJSON(file)
  font = loadFont('./Karla-Regular.ttf')
}
 
function setup() {
  createCanvas(windowWidth, windowHeight)
  // instance Rigrammar
  grammar = new RiGrammar(data)
  // on change le mode colorimétrique
  colorMode(HSB, 10, 10, 10)
  textSize(20)

  // 2 boucles for > pour écrire mes données texte/position dans l'espace
  for (let x = 50; x < (width - 100); x = x + 800) {
    for (let y = 50; y < (height - 50); y = y + 100) {
      let mots = grammar.expand()
      let localisation= createVector(x, y)
      textes.push(new Texte(mots, localisation))
    }
  }
  console.table(textes)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)
  
  // textes.forEach( function (element){
  //   return element.affiche()
  // }) 

  for (let i = 0; i < textes.length; i++) {
    textes[i].affiche()
  }
}

class Texte {
  
  constructor(phrase, localisation) {
    this.phrase = phrase;
    this.localisation = localisation;
  }

  affiche() {
    push();
    translate(this.localisation.x, this.localisation.y);
    fill(int(random(10)), 10, 10);
    //textAlign(CENTER, CENTER)
    textFont(font);
    text(this.phrase, 0, 0);
    pop();
  }
  
}