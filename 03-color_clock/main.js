
let segmentCount = 45
let radius = 300
let time = 0

// initialise un nouveau canvas de la taille du navigateur
function setup () {
  createCanvas(windowWidth, windowHeight)
  // sans contour
  // noStroke()
  // par de curseur / pointeur
  
}

// si on redimensionne la fenêtre on recalcule le canvas
function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}

function draw () {

  if (frameCount % 4 === 0) {
    time = getTime(true)
  } 
  
  let quart = getTime(false)

  if (quart > 0 && quart < 15) {
    segmentCount = 45
  } else if (quart > 15 && quart < 30) {
    segmentCount = 16
  } else if (quart > 30 && quart < 45) {
    segmentCount = 8
  } else if (quart > 45) {
    segmentCount = 4
  }

  // on ajuste le mode col > relative à lecran > coor souris 
  // colorMode(HSB, 360, 100, 100)
  // background(360, 0, 100)

  // on affiche le temps à l'écran
  fill('black')
  textSize(20)
  text(time, 20, 40)

  // on definie le nombre de segment relative a l'angle
  let angleStep = 360 / segmentCount

  // le premier point du vertex triangle est au centre de l'écran
  beginShape(TRIANGLE_FAN)
  vertex(width / 2, height / 2)
  
  // on boucle à 360 degré et on affiche les tranches 
  for (let angle = 0; angle <= 360; angle += angleStep) {
    let vx = width / 2 + cos(radians(angle)) * radius
    let vy = height / 2 + sin(radians(angle)) * radius
    vertex(vx, vy)
    // fill(angle, 100, 100)
    fill(0,100,100)
  }

  endShape()
}

function getTime(bool) {
  const time = Date.now()
  const date = new Date(time * 100)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  if (bool) return hours + ':' + addZero(minutes) + ':' + addZero(seconds); else return minutes
}

function addZero(num) {
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}

