var boy, path, pathImage, boyImage;
var edges;

function preload(){
  pathImage = loadImage("path.png")
  boyImage = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  path=createSprite(200, 200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200, 360);
  boy.addAnimation("Runner",boyImage);
  boy.scale = 0.05;
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[0]);
  boy.collide(edges[2]);
  boy.collide(edges[1]);
  drawSprites();
}
