
let drawing

function setup() {
  createCanvas(windowWidth, windowHeight)
  drawing = new Drawing()
}

function draw() {
  drawing.draw()
  drawing.move()
}

function keyPressed() {

  switch (key) {
    case ' ':
      console.log('draw')
      // background('white')
      clear()
      break
    case 'a':
      drawing.addWeight()
      break
    case 'z':
      drawing.removeWeight()
      break
    case '1':
      drawing.changeColor(1)
      break
    case '2':
      drawing.changeColor(2)
      break
    case '3':
      drawing.changeColor(3)
      break
    case 's':
      saveCanvas('image.png')
      break;
  }
}