// on déclare une booléenne pour contrôler le comportement du draw
let boucle = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  // on bloque la boucle du draw
  noLoop()
  // on réduit le nombre d'image par seconde
  frameRate(10)
}

function draw() {
  background(255)

  let cercles = 5
  
  //arcEnCiel(width/2, height/2, 500, 1)

  for (let i = 0; i < cercles; i++) {
    // on génère des coordonnées limité à l'écran
    let x = random(width)
    let y = random(height)
    // on calcule la taille des tranches en fonction de l'écran et du nombre de formes 
    let taille = random(0, map(i, 0, cercles - 1, width, height))
    // on calcul l'angle
    let angle = random(TWO_PI)
    //console.log(tranche, angle)
    // on invoque la fonction qui dessine la forme
    arcEnCiel(x, y, taille, angle)
  }

}

function arcEnCiel(x, y, taille, angle) {
  // on fait une variable qui génère un nombre entier entre 0 > 180
  let num = int(random(0, 180))
  // on calcul le pas entre les tranches > 2*PI divisé par num
  let separateur = TWO_PI / num
  // on enregistre la forme / on se déplace dans le canvas
  push()
  // on déplace le point d'origine
  translate(x, y)
  // on fait tourner la forme
  rotate(angle)
  // on reconstitue le cercle avec des tranches > on limite la boucle à 2*PI pour un cercle / le pas
  for (let i = 0; i < TWO_PI; i += separateur) {
    // on tourne chaque tranche par rapport au pas
    rotate(separateur)
    // on colorise la tranche de façon aléatoire
    fill(hexa())
    // on dessine la forme avec arc
    arc(0, 0, taille, taille, 0, separateur)
  }
  pop()

}

// fonction qui génère un code couleur hexadécimal
function hexa() {
  // une liste qui contient tous les élements qui constituent l'hexadecimal
  const h = [0,1,2,3,4,5,6,7,8,9,'a','b','d','e','f']
  // une variable qui sert de réceptacle
  let str = '#'
  // l'index
  let index = 0
  // on utilise une boucle do while
  do {
    // on incrémente l'index
    index++;
    // on ajoute la valeur à la variable str en piochant dans la list h
    str += h[Math.floor(Math.random() * h.length )];
    // on limite à 5
  } while (index < 6);
  // on retourne le résultat
  return str;
}

// on contrôle avec le clavier la boucle du draw
function keyPressed() {
  // key > contient des strings avec le nom des touches
  // keyCode > renvoit un entier qui correspond à une touche 
  if (keyCode === 32) {
    // boucle est égale à l'inverse d'elle-même
    // 
    boucle = !boucle
    // si boucle est vrai tu relance le draw sinon tu reviens à l'état de base
    if (boucle) {
      loop()
    } else {
      noLoop()
    }
  }
}
