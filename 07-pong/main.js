
const joueur = {
  x: 50,
  y: 50,
  w: 20,
  h: 150
}

const balle = {
  x: 250,
  y: 250,
  w: 35,
  h: 35,
  xSpeed: -10,
  ySpeed: -10
}

let total = 0

function setup () {
  collideDebug(true)
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw () {
  background (0)
  joueur.y = int(map(mouseY, 0, height, 20, (height - (joueur.h + 20))))
  joueur.y = mouseY
  // console.log(joueur.y)
  raquette(joueur.x, joueur.y, joueur.w, joueur.h)

  let collision = collideRectRect(joueur.x, joueur.y, joueur.w, joueur.h, balle.x, balle.y, balle.w, balle.h)
  if (collision) {
    balle.xSpeed = balle.xSpeed * -1
    showScore(true)
  }

  balle.x = balle.x - balle.xSpeed
  balle.y = balle.y - balle.ySpeed

  if (balle.x < 0) {
    showScore(false)
  }

  if (balle.x >= width) {
    balle.xSpeed = balle.xSpeed * -1
  }

  if (balle.y >= height || balle.y <= 0) {
    balle.ySpeed = balle.ySpeed * -1
  }

  balleBalle(balle.x, balle.y, balle.w)

  text(total, width / 2, 20)

}

function raquette (x, y, w, h) {
  fill('white')
  rect(x, y, w, h)
}

function balleBalle (x, y, w) {
  fill('white')
  ellipse(x, y, w)
}

function showScore(win) {
  fill('red')
  rect(0, 0, width, height)
  if (win) {
    total++
  } else {
    total = 'loser!!!'
  }
}
