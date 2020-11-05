function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 100, 50, 50);
  movingrect.velocityY = 5;
  movingrect2 = createSprite(400,350,70,35);
  movingrect2.velocityY = -5;

  sprite1 = createSprite(100,50,50,50);
  sprite1.velocityX = 6;
  sprite2 = createSprite(700,50,70,90);
  sprite2.velocityX = -5;
}

function draw() {
  background("red");

  bounceOff(movingrect,movingrect2);
  bounceOff(sprite1,sprite2);

  drawSprites();
}

