class Drawing {

  constructor() {
    this.x = 0
    this.y = 0
    this.weight = 10
    this.colors = ['black', 'red', 'green']
  }

  move() {
    this.x = mouseX
    this.y = mouseY
    this.px = pmouseX
    this.py = pmouseY
  }

  addWeight() {
    this.weight += 5
  }

  removeWeight() {
    this.weight -= 5
  }

  changeColor(index) {
    stroke(this.colors[index-1])
  }

  draw() {
    strokeWeight(this.weight)
    line(this.x, this.y, this.px, this.py)
  }

}