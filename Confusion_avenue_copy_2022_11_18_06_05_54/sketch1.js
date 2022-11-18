function setup() {
  createCanvas(414, 736);
  img = loadImage('Background 2.jpg');
  button = createButton('Home');
  button.position(width/2-67, height/2-150);
  button.mousePressed(gotolink)
  button.size(140,70)
  button.style("font-family","Comic Sans MS")
  button.style("font-size","19px")
  
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, 0, 414, 736);
}

function gotolink() {
	window.open('https://editor.p5js.org/kushagrapandeyy/sketches/cDA0Ud_oU');
// Load the image
}