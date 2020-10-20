class BlocTexte {

  // détermine les données que je passe au instance de la classe
  constructor(x, y, speed, data, id) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.data = data;
    this.id = id;
  }

  init() {
    // invoquer les 2 méthodes principales
    this.show();
    this.move()
  }

  move() {
    
    // je teste la valeur de x en fonction de la largeur de l'écran 
    // et j'incrémente sa position en fonction d'une valeur aléatoire
    if (this.x < width && this.x > 0) {
      this.x += random(-this.speed, this.speed);
    } else {
      this.x = width/2;
    }
    // je teste y en fonction de la hauteur de l'écran
    if (this.y < height && this.y > 0) {
      this.y += random(-this.speed, this.speed)
    } else {
      this.y = height/2;
    }

  }

  // reinitialise les coordonnées
  reset(x, y) {
    this.x = x;
    this.y = y;
  }

  // affiche le bloc texte
  show() {
    noFill();
    stroke('red');
    rect(this.x, this.y, 110, 110);
    fill(255);
    noStroke();
    text(this.data, this.x + 5, this.y + 5, 100, 100);
    text(this.id, this.x, this.y - 10);
  }
}
