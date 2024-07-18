function setup() {
  // create a surface to draw in 
  createCanvas(700, 480);
    background("pink");
}

function draw() {

  //take a big brush
  strokeWeight(10);
  //dip it in purple
  stroke('purple');
  frameRate(12);
  //declare variables
  let posY=mouseX;
  let posX=mouseY;
   // place a dot on a screen
  point(posY,posX);
}