const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic: false,
		restuition: 0.3,
		friction: 0.1,
		density: 0.5
	}

	ball = Bodies.circle(200, 400, 10, ball_options);
	ground = new Ground(400, 675, 800, 15);
	leftSide = new Ground(650, 625, 10, 70);
	rightSide = new Ground(500, 625, 10, 70);

	World.add(world, ball);
	World.add(world, ground);
	World.add(world, leftSide);
	World.add(world, rightSide);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  throwball();

  push();
  noStroke();
  fill("white");
  ellipse(ball.position.x, ball.position.y, 20);
  pop();

  drawSprites();
  ground.display();
  leftSide.display();
  rightSide.display();
}

function throwball() {
	if(keyIsDown(UP_ARROW)) {
		Body.applyForce(ball, {x: 0, y: 0}, {x: 0.2, y: 0.1});
	}
}

