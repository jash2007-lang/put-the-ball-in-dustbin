
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,680,1600,20)
	paper = new Paper(400,360,10)
	dustb = new Dustbin(1300,500)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  paper.display()
  dustb.display()

  drawSprites();
 
}

function keyPressed(){ 
if(keyCode === UP_ARROW) 
{ Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -20})
   } 
  }

