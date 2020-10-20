const nord = 0
const est = 1
const sud = 3
const ouest = 4

// const direction = {
//   nord: 0,
//   nordEst: 1,
//   est: 2,
//   sudEst: 3,
//   sud: 4,
//   sudOuest: 5,
//   ouest: 6,
//   nordOuest: 7
// }

let vent = 0
let pas = 5
let diametre = 10
let posX = 0
let posY = 0
let pixels = 0
let couleur = 0
let isBackground = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  posX = width / 2
  posY = height / 2

  colorMode(HSB, 360, 100, 100)

}

function affichagePixels() {
  pixels++
  fill(255)
  rect(0, 0, 140, 60)
  fill(0)
  textSize(20)
  text(pixels + ' pixels', 10, 40)  
}

function changeFond(bool) {
  if (bool) {
    fill(couleur, 100, 100)
    rect(0, 0, width, height)
  } 
}

function draw() {

    
  // background(255)
  // on calcul la direction du vent de manière alétoire
  // for (let i = 0; i <= mouseX; i++) {
    vent = int(random(0, 5))
    couleur = int(random(0, 360))
    
    changeFond(isBackground)
    affichagePixels()
    

    switch(vent) {
      case nord:
        posY -= pas
        break
      case est:
        posX += pas
        break
      case sud:
        posY += pas
        break
      case ouest:
        posX -= pas
        break
    }

    // if (vent === direction.nord) {
    //   posY = posY - pas
    // } else if (vent === direction.nordEst) {
    //   posX = posX + pas
    //   posY = posY - pas
    // } else if (vent === direction.est) {
    //   posX = posX + pas
    // } else if (vent === direction.sudEst) {
    //   posX = posX + pas
    //   posY = posY + pas
    // } else if (vent === direction.sud) {
    //   posY = posY + pas
    // } else if (vent === direction.sudOuest) {
    //   posX = posX - pas
    //   posY = posY + pas
    // } else if (vent === direction.ouest) {
    //   posX = posX - pas
    // } else if (vent === direction.nordOuest) {
    //   posX = posX - pas
    //   posY = posY - pas
    // }

  // }
  
  // recalibrage
  if (posX > width) {
    posX = 0
  }

  if (posX < 0) {
    posX = width
  }

  if (posY < 0) {
    posY = height
  }

  if (posY > height) {
    posY = 0
  }
  
  fill(couleur,100, 100, 80)
  // ellipse(posX + pas / 2, posY + pas / 2, diametre)
  rect(posX + pas / 2, posY + pas / 2, diametre, diametre)
}

function keyPressed() {
  if (key === ' ') isBackground = !isBackground
}