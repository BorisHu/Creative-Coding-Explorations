let bubbles = [];

function setup() {
  var cnv = createCanvas(windowWidth/2, windowHeight/2);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  for (let i = 0; i < 4; i++) {
    let r = random(20, 40);
    let x = random(r, (width-r));
    let y = random(r, (height-r));
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xdirection = 1;
    this.ydirection = 1;
    this.brightness = 0;
    this.xswitch = random(150);
    this.yswitch = random(150);
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(2, 4) * this.xdirection;
    this.y = this.y + random(2, 3) * this.ydirection;
    if (this.x > width - this.r || this.x < this.r || this.xswitch < 0) {
        this.xdirection *= -1;
        this.xswitch = random(150);
    }
    if (this.y > height - this.r || this.y < this.r || this.yswitch < 0) {
        this.ydirection *= -1;
        this.yswitch = random(150);
    }
    this.xswitch = this.xswitch - 1;
    this.yswitch = this.yswitch - 1;
  }

  show() {
    stroke(255);
    strokeWeight(1);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}