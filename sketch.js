const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
var bg
var boy,boy1
var ground
var rain=[]
var drops=100
var snow, snowimg



function preload(){
  bg = loadImage("snow2.jpg")
  boy = loadImage("boy.png")
  snowImg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create(); 
  world = engine.world;
 
  boy1 = createSprite(200,600,100,100)
 boy1.addImage(boy)
 boy1.scale=.5
 ground =createSprite(50,700,2000,10)
 ground.visible=false



 
}

function draw() {
  background(bg) 
 
  if(keyDown("space")){
    boy1.velocityY=-10
  }
  boy1.velocityY=boy1.velocityY+.5

  if(keyDown("right_arrow")){
    boy1.x = boy1.x +3
  }

  if(keyDown("left_arrow")){
    boy1.x = boy1.x + -3
  }
  boy1.collide(ground)

 
  if(frameCount % 20===0){

    snow =createSprite(random(0,1000),0,20,20)
    snow.addAnimation("snow",snowImg)
     snow.scale=0.2
    snow.velocityY=10
    }
  
  drawSprites();
}


