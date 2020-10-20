
let resultat, dimension, couleur

function setup () {
  createCanvas(windowWidth, windowHeight)
  resultat = runRandomNum ()
  colorMode(HSB, 6, 100, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw () {
  dimension = Math.min(width, height)
  console.log(dimension * 0.01)
  background(0)
  formeDe(width / 2, height / 2)
}

function keyPressed () {
  if (key === 'Enter') {
    resultat = runRandomNum ()
  }
}

function formeDe (x, y) {
  fill(resultat, 100, 100)
  stroke(0)
  strokeWeight(dimension * 0.005)
  rectMode(CENTER)
  rect(x, y, dimension / 2, dimension / 2)
  showText(x - (dimension * 0.03), y + (dimension * 0.02))
}

function showText (x, y) {
  fill(0)
  noStroke()
  textSize(dimension * 0.1)
  text(resultat, x, y)
}

function runRandomNum () {
  let val = random(1, 7)
  return int(val)
}