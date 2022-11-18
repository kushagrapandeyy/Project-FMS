var x, y;
var score = 0;
const radius = 100;
var r, g, b;

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
  // Draw a circle
  noStroke();
  textSize(30);
  text("Score: " + score, 10, 40);
  fill(r, g, b);
  
  ellipse(x, y, radius*2, radius*2);
  button_Home = createButton('Home');
  button_Home.position(width/2-150, height/2-300);
  button_Home.mousePressed(Open)
  button_Home.size(70,30)
  button_Home.style("font-family","Comic Sans MS")
  button_Home.style("font-size","19px")
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
  }
}

function newCircle() {
  x = random(windowWidth -100);
  y = random(windowHeight -100);
  r = random(255);
  g = random(255);
  b = random(255);
    
}
function Open(){
  process.exit(0)
}