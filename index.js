// function setup() {
//     //setup code
//     createCanvas(200,200);
// }

// function draw() {
//     //set fill colour
//     fill(0,180,180);

//     //set stroke
//     stroke(0,0,255);
//     strokeWeight(10);

//     //drawing code
//     ellipse(100,100,150,150);

//     triangle(200,150,250,25,310,150)
// }

//-------------------------------------------------

function setup() {
  // set canvas size
  createCanvas(400, 200);
}

function draw() {
  // set background
  background(255);
  // remove stroke
  noStroke();
  // set rectMode mode
  rectMode(CENTER);

  // draw a red rectangle
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
  // draw a green rectangle rotated
  fill(0, 255, 0);
  push();
  translate(200, 100);
  rotate(radians(45));
  rect(0, 0, 50, 50);
  pop();
  // draw a blue rectangle without rotation
  fill(0, 0, 255);
  rect(300, 100, 50, 50);
}
