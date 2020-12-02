var ball1,ball2,ball3,ball4;
var rooftop;
var chain1,chain2,chain3,chain4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
    ball1 = new Ball(300,500,40);
	ball2 = new Ball(330,500,40);
	ball3 = new Ball(360,500,40);
	ball4 = new Ball(390,500,40);
	ball5 = new Ball(420,500,40);

	rooftop1= new Rooftop(400,300,300,20);

	ground = new Rooftop(790,700,1600,10)

	chain1 = new Chain (ball1.body,rooftop1.body,-40*2,0);
	chain2 = new Chain (ball2.body,rooftop1.body,-40*1,0);
	chain3 = new Chain (ball3.body,rooftop1.body,-0*2,0);
	chain4 = new Chain (ball4.body,rooftop1.body,40*1,0);
	chain5 = new Chain (ball5.body,rooftop1.body,40*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    ball1.display();
    ball2.display();
    ball3.display();
	ball4.display();
	ball5.display();
	rooftop1.display();
	

	
	
	chain1.display();
    chain2.display();
    chain3.display();
	chain4.display();
	chain5.display();

	keyPressed();
	
	
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === 32) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:-85});
	//alt key for it to fall
 } 
}
