var boyrunning_Img,boyrun_Img;
var ground1,boy1;
var groundImg,ground;
var stone,stoneImg;

function preload() {
 boyrunning_Img = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png");
groundImg = loadImage ("ground.png");
stoneImg = loadImage("obstacle1.png");
boy_collide = loadImage("boy5.png");
powerImg = loadImage("power.png");
obsImg = loadImage("cactus.png");
resetImg = loadImage("restart.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 


ground = createSprite(windowWidth/2,windowHeight/2+290,windowWidth+500,50);
ground.addImage("track",groundImg);
ground.scale=1.5
ground.velocityX=-7

boy1 = createSprite(windowWidth/2-500,windowHeight/2+195,50,50)
 boy1.addAnimation("run",boyrunning_Img);
 boy1.scale=0.5
 boy1.debug=true
 boy1.setCollider("circle",0,0,65)
 

 ground1 = createSprite(windowWidth/2,windowHeight/2+250,windowWidth,20);
 ground1.shapeColor="white"
 ground1.visible=false
 powergr = new Group();
 obstaclegr = new Group();
}

function draw() {                
  background("skyblue");
 
  if(keyDown("SPACE")) {
    boy1.velocityY =-5;
  }
 
boy1.velocityY+=0.2
 if(ground.x<560){
    ground.x=windowWidth/2-5
  }
      
if(boy1.isTouching(powergr)){
    powergr.destroyEach();
    boy1.scale+=0.1
  }
  if(boy1.collide(obstaclegr)){
  boy1.destroy();
  }

boy1.collide(ground1)
spawnobstacle();
 spawnpower();
 spawnobstacle2();
  drawSprites()
}


function spawnobstacle(){
  if(frameCount %200===0){
    var stone = createSprite(windowWidth/2+600,windowHeight/2+245,50,50)
    stone.debug=true
    stone.setCollider("circle",0,0,300)
      stone.addImage("obs",stoneImg)
      stone.scale=0.07
      // stone.y = random(555,550);    
       stone.velocityX=-6
       stone.lifetime = windowWidth/2-475;
      obstaclegr.add(stone);
       
      }
}


function spawnpower(){
if (frameCount %500 ===0){
  var power = createSprite(windowWidth/2+600,windowHeight/2+150,50,50)
  power.addImage("pow",powerImg)
  power.scale=0.3
  power.velocityX=-6
  power.lifetime = windowWidth/2-440;
  powergr.add(power)
}

}

function spawnobstacle2(){
 if(frameCount %500 ===0){
   var plant = createSprite(windowWidth/2+600,windowHeight/2+243,50,50)
   plant.addImage("danger",obsImg)
   plant.debug=true
   plant.setCollider("circle",0,0,40)
   plant.scale=0.5
   plant.velocityX=-6
   plant.lifetime = windowWidth/2-440
   obstaclegr.add(plant);
 }

}

function gameOver() {
 var reset = createSprite(windowWidth/2,windowHeight/2-100,50,50)
 reset.addImage("re",resetImg);
 reset.scale=0.3
 reset.visible=false

}