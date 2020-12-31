var movingRect,fixed

 


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,200,50,80)
 fixed= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="blue"
 fixed.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if (movingRect.x-fixed.x<fixed.width/2+movingRect.width/2 && fixed.x - movingRect.x < fixed.width/2 + movingRect.width/2
    && movingRect.y - fixed.y < fixed.height/2 + movingRect.height/2
    && fixed.y - movingRect.y < fixed.height/2 + movingRect.height/2) {
    movingRect.shapeColor="purple"
    fixed.shapeColor="purple"
    
  }
  else {
    movingRect.shapeColor="blue"
    fixed.shapeColor="blue"

  }
  drawSprites();
}