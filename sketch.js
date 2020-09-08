const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	ground = new Ground(800,height,1600,15);

	paper = new Paper(50,50,70,70);

	dustbin = new Dustbin();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  
  paper.display();

  dustbin.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

function keyReleased() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});
	}
}