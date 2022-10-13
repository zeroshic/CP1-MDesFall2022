let posX = 50;
let posY = 50;
let ele;

var r;
var g;
var b;
var a;

function setup() {
  createCanvas(500, 500);
  frameRate(1);
}


function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

function draw() {
  
  background(255);
  
  r = random(255); 
  g = random(100,200);
  b = random(100);
  a = random(25,25); 
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 0, 250, 250);
  rect(posY * 1, posX * 0, 250, 250);
  rect(posY * 2, posX * 0, 250, 250);
  rect(posY * 3, posX * 0, 250, 250);
  rect(posY * 4, posX * 0, 250, 250);
  rect(posY * 5, posX * 0, 250, 250);
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 1, 250, 250);
  rect(posY * 1, posX * 1, 250, 250);
  rect(posY * 2, posX * 1, 250, 250);
  rect(posY * 3, posX * 1, 250, 250);
  rect(posY * 4, posX * 1, 250, 250);
  rect(posY * 5, posX * 1, 250, 250);
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 2, 250, 250);
  rect(posY * 1, posX * 2, 250, 250);
  rect(posY * 2, posX * 2, 250, 250);
  rect(posY * 3, posX * 2, 250, 250);
  rect(posY * 4, posX * 2, 250, 250);
  rect(posY * 5, posX * 2, 250, 250);
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 3, 250, 250);
  rect(posY * 1, posX * 3, 250, 250);
  rect(posY * 2, posX * 3, 250, 250);
  rect(posY * 3, posX * 3, 250, 250);
  rect(posY * 4, posX * 3, 250, 250);
  rect(posY * 5, posX * 3, 250, 250);
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 4, 250, 250);
  rect(posY * 1, posX * 4, 250, 250);
  rect(posY * 2, posX * 4, 250, 250);
  rect(posY * 3, posX * 4, 250, 250);
  rect(posY * 4, posX * 4, 250, 250);
  rect(posY * 5, posX * 4, 250, 250);
  
  noStroke();
  fill(r,g,b,a);
  rect(posY * 0, posX * 5, 250, 250);
  rect(posY * 1, posX * 5, 250, 250);
  rect(posY * 2, posX * 5, 250, 250);
  rect(posY * 3, posX * 5, 250, 250);
  rect(posY * 4, posX * 5, 250, 250);
  rect(posY * 5, posX * 5, 250, 250);
}


