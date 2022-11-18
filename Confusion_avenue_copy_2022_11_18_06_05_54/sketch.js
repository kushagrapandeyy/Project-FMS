let MENU = 0;  
function setup() {
  createCanvas(414, 736);
  img = loadImage('Background .jpg'); // Load the image
    
      
    button = createButton('Activity 1');
	button.position(width/2-67, height/2-150)
	button.mousePressed(Activity1)
    button.size(140,70)
    button.style("font-family","Comic Sans MS")
    button.style("font-size","19px")

    button1 = createButton('Activity 2');
	button1.position(width/2-67, height/2-60)
	button1.mousePressed(Activity2)
    button1.size(140,70)
    button1.style("font-family","Comic Sans MS")
    button1.style("font-size","19px")
  
    button2 = createButton('Activity 3');
	button2.position(width/2-67, height/2+30)
	button2.mousePressed(Activity3)
    button2.size(140,70)
    button2.style("font-family","Comic Sans MS")
    button2.style("font-size","19px")
  
}

function draw() {
  image(img, 0, 0);
  image(img, 0, 0, 414, 736);
}

function draw2() {
  image(img, 0, 0, 414, 736);
  createCanvas(414, 736);

}

function Activity1(){
  open('https://editor.p5js.org/kushagrapandeyy/full/HmpIKaeMX',"_self")
}

function Activity2(){
  open('https://editor.p5js.org/kushagrapandeyy/full/voXPERSRo',"_self")
}

function Activity3(){
  open('https://editor.p5js.org/kushagrapandeyy/full/Vab-8M_4w',"_self")
}


