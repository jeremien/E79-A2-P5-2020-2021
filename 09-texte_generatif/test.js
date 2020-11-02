
let phrase;

function setup() {
  createCanvas(windowWidth, windowHeight);
  phrase = prompt("Quel est votre prénom ?");
  alert(phrase)
}

function draw () {
  background(255);
  textSize(30);
  text(phrase, width /2, height / 2);
}