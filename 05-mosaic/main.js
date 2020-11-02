let fgh, fdh, fgb, fdb

function setup () {
  createCanvas(windowWidth, windowHeight)

  fgh = createGraphics(width / 2, height / 2)
  fdh = createGraphics(width / 2, height / 2)
  fgb = createGraphics(width / 2, height / 2)
  fdb = createGraphics(width / 2, height / 2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw () {

  // couleurs des fonds
  fgh.background('red')
  fdh.background('blue')
  fgb.background('green')
  fdb.background('black')

  // texte 1
  fgh.textSize(50)
  fgh.textAlign(CENTER, CENTER)
  fgh.fill(200,0,0)
  fgh.text('bonjour', fgh.width/2, fgh.height/2)

  // texte 2
  fdh.textSize(50)
  fdh.textAlign(CENTER, CENTER)
  fdh.fill(0,0,120)
  fdh.text('hello', fdh.width/2, fdh.height/2)

  // texte 3
  fgb.textSize(50)
  fgb.textAlign(CENTER, CENTER)
  fgb.fill(0,150,0)
  fgb.text('ola', fgb.width/2, fgb.height/2)

  // texte 4

  fdb.textSize(50)
  fdb.textAlign(CENTER, CENTER)
  fdb.fill(50)
  fdb.text('buongiorno', fdb.width/2, fdb.height/2)

  image(fgh, 0, 0)
  image(fdh, width/2, 0)
  image(fgb, 0, height/2)
  image(fdb, width/2, height/2)
}
