let font;
let points = [];
let r = 10;
let angle = 0;

function preload() {
  font = loadFont("Fonts/Righteous-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffcad4");

  // Convert text to points
  points = font.textToPoints("pop", width / 2, height / 2, 200, {
    sampleFactor: 0.08
  });

  // Initialize variables for the background pattern
  rectMode(CENTER);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background("#ffcad4");

  // Draw the background pattern
  for (let y = 0; y < height; y += 120) {
    for (let x = 0; x < width; x += 120) {
      push();
      translate(x, y);
      stroke(255);
      for (let i = 0; i < 10; i++) {
        let r = map(sin(frameCount), -1, 1, 50, 255);
        let g = map(cos(frameCount / 2), -1, 1, 50, 255);
        let b = map(sin(frameCount / 4), -1, 1, 50, 255);
        stroke(r, g, b);
        rotate(angle);
        rect(0, 0, 100 - i * 3, 100 - i * 3, 20);
        angle = sin(frameCount) * 10;
      }
      pop();
    }
  }

  // Draw the text on top
  for (let i = 0; i < points.length - 1; i++) {
    fill("#a9def9");
    noStroke();
    ellipse(points[i].x + r * sin(angle + i * 1), points[i].y + r * sin(angle + i * 1), 10);
    strokeWeight(2);
    stroke("#720026");
    line(points[i].x + r * sin(angle + i * 0.1), points[i].y + r * sin(angle + i * 0.1), points[i + 1].y);
  }
  angle += 10;
}