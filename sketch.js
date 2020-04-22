// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 5 variables. red blue green orange yellow
var red, orange ,blue ,green ,yellow;

function setup(){
  createCanvas(1200,400);

  red = createSprite(120,200,240,400);
  blue = createSprite(360,200,240,400);
  yellow = createSprite(600,200,240,400);
  orange = createSprite(840,200,240,400);
  green = createSprite(1080,200,240,400);
}


function draw(){
  
  red.shapeColor = "white";
  blue.shapeColor = "white";
  yellow.shapeColor = "white";
  orange.shapeColor = "white";
  green.shapeColor = "white";

  // change the value of Red based on the mouse movement about the X axis
 if((mouseX > 0) && (mouseX < 240)){
   red.shapeColor = "red";
 }
  // change the value of blue based on the mouse movement about the X axis
 if((mouseX > 240) && (mouseX < 480)){
   blue.shapeColor = "blue";
 }
  // change the value of yellow based on the mouse movement about the X axis
 if((mouseX > 480) && (mouseX < 720)){
   yellow.shapeColor = "yellow";
 }
 // change the value of orange based on the mouse movement about the X axis
 if((mouseX > 720) && (mouseX < 960)){
   orange.shapeColor = "orange";
 }
 // change the value of green based on the mouse movement about the X axis
 if((mouseX > 960) && (mouseX < 1200)){
   green.shapeColor = "green";
 }

 red.display();
 blue.display();
 yellow.display();
 orange.display();
 green.display();
}  