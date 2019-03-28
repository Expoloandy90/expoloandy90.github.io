var player;
var ground;
var numar
var GRAVITY = 1;
var JUMP = 15;
var esteSfoara = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(200,500, 400, 400);
  //ground.setCollider('rectangle');
  player = createSprite(60, 0, 100, 100);
}

function draw() {
  background(220);

  camera.position.x = player.position.x;
  camera.position.y = player.position.y;
  camera.rotation = player.rotation;

  

  //player.displace(ground);

  if(player.collide(ground)) {
    player.velocity.y = 0;
  }
  else player.velocity.y += GRAVITY;
  
  if(esteSfoara == 1)
    if(sfoara.width != dist)
      sfoara.width++;

  if(mouseWentDown(LEFT)){
    esteSfoara = 1;
    var dist = sqrt((camera.mouseX - player.position.x)*(camera.mouseX - player.position.x) + (camera.mouseY - player.position.y)*(camera.mouseY - player.position.y));
    sfoara = createSprite(player.position.x + dist / 2, player.position.y, 10, 20);
    sfoara.rotation  = 0;
    //sfoara.attractionPoint(1, camera.mouseX, camera.mouseY);
    if(sfoara.collide(ground))
      player.attractionPoint(10, camera.mouseX, camera.mouseY);
  }

  drawSprites();
  camera.off();
}
