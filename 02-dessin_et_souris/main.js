let x, y, weight, colors;

function setup() {
  createCanvas(windowWidth, windowHeight)
  weight = 10
  colors = ['black', 'red', 'green']
}

function draw() {
  x = mouseX
  y = mouseY
  drawing()
}

function drawing() {
  strokeWeight(weight)
  point(x, y)
}

function addWeight() {
  weight += 5;
}

function removeWeight() {
  weight -= 5;
}

function changeColor(index) {
  stroke(colors[index - 1])
}

function keyPressed() {

  switch (key) {
    case ' ':
      background('white')
      break
    case 'a':
      addWeight()
      break
    case 'z':
      removeWeight()
      break
    case '1':
      changeColor(1)
      break
    case '2':
      changeColor(2)
      break
    case '3':
      changeColor(3)
      break
    case 's':
      saveCanvas('image.png')
      break;
  }
}