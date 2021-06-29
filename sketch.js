
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide, rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1920, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		density: 1.2,
		friction: 0
	}

	
	//Create the Bodies Here.
	ball = Bodies.circle(200, 700, 40, ball_options);
	World.add(world, ball);
	Engine.run(engine);

	ground = new Ground(950, 795, 1920, 10)
	leftSide = new Ground(1400, 725, 10, 150);
	rightSide = new Ground(1700, 725, 10, 150);
	
}


function draw() {
  background(0);
  
  ellipseMode(CENTER)
  fill("white")
  ellipse(ball.position.x, ball.position.y+20, 40, 40)

  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball, ball.position, {
			x: 700,
			y: -250
		})
	}
}



