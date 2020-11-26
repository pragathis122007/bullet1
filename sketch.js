var fixedObject;
var movingObject;

function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 80);
  fixedObject.shapeColor = "blue";
  movingObject = createSprite(400,100,80,50);
  movingObject.shapeColor = "green";
}

function draw() {
  background(0);  
  movingObject.x = World.mouseX;
  movingObject.y = World.mouseY;
  if (movingObject.x-fixedObject.x<movingObject.width/2+fixedObject.width/2
      && fixedObject.x-movingObject.x<movingObject.width/2+fixedObject.width/2
      && movingObject.y-fixedObject.y<movingObject.height/2+fixedObject.height/2
      && fixedObject.y-movingObject.y<movingObject.height/2+fixedObject.height/2){
     movingObject.shapeColor = "red";
     fixedObject.shapeColor = "red";
  }
  else {
    movingObject.shapeColor = "green";
    fixedObject.shapeColor = "blue";
  }
  drawSprites();
}