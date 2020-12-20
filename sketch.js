
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
Bin= loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(600,390,1200,20)
left= new Ground(900,280,20,200)
right= new Ground (1100,280,20,200)
bottom= new Ground (1000,370,200,20)
paper = new Paper(200,170,70,70)
  
}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display()
  left.display()
 right.display()
 bottom.display	() 
 paper.display()
imageMode(CENTER)
  image(Bin,1000,280,230,220)
  drawSprites();
 
}

function keyPressed(){

if(keyCode=== UP_ARROW)	{
	Matter.Body.applyForce(paper.body,paper.body.position, {x:130,y:-145})
}
}

