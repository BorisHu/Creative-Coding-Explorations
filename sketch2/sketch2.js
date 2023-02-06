let bubbles = [];

function setup() {
  var cnv = createCanvas(windowWidth/2, windowHeight/2);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  setSketch();
  
  var button = createButton("Random");
  button.mousePressed(setSketch);
  button.position(780, 650);
  button.size(150,60);
}

function setSketch() {
  bubbles = [];
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
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}