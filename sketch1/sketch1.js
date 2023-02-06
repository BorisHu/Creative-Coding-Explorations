let bubbles = [];

function setup() {
  var cnv = createCanvas(windowWidth/2, windowHeight/2);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  setSketch();
}

function setSketch() {
  bubbles = [];
  let x = width / 2;
  let y = height / 2;
  for (let i = 0; i < 33; i++) {
    let b = new Bubble(x, y, i*5);
    bubbles.push(b);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  show() {
    stroke(255);
    strokeWeight(1);
    fill(this.brightness, 25);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}