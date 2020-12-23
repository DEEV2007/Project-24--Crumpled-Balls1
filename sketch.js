
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bin1,bin2,bin3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=createSprite(400,660,800,20)
	ground.shapeColor="yellow"

	bin1=createSprite(500,600,20,100)
	bin2=createSprite(580,640,160,20)
	bin3=createSprite(650,600,20,100)

	paper=new Paper(200,300,20)
	paper.shapeColor="blue"
	//Create the Bodies Here.

	Engine.run(engine);
  }


function draw() {

  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
}
