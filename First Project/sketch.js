var box;

var col;

var speed;

function setup() {
  createCanvas(1000,1000);

  background(0);

  box = createSprite(width/2,height/2,30,30);

  col = 255;

  colorMode(HSB);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  background(col,255,255);

  if(col >= 255)
  {
    col = 0;
  }
  else
  {
    col = col + 1;
  }

  speed = 10;

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x = box.position.x - speed;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - speed;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + speed;
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x + speed;
  }

  drawSprites();
}

