var bobObject1,bobObject2
var bobObject3, bobObject4;
var bobObject5;
var roofObject;
var rope1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(width/2,height/4,width/4,20);
	bobDiameter = 40;
	centerBobpositionx = width/2;
	centerBobpositiony = height/6+300;
	bobObject1 = new Bob(centerBobpositionx,centerBobpositiony,bobDiameter);
	bobObject2 = new Bob(centerBobpositionx+bobDiameter,centerBobpositiony,bobDiameter);
	bobObject3 = new Bob(centerBobpositionx-bobDiameter,centerBobpositiony,bobDiameter);
	bobObject4 = new Bob(centerBobpositionx-bobDiameter*2,centerBobpositiony,bobDiameter);
	bobObject5 = new Bob(centerBobpositionx+bobDiameter*2,centerBobpositiony,bobDiameter);
	
	 rope1 = new Rope(bobObject1.body,roofObject.body,0,0  ) ;
	 rope2 = new Rope(bobObject2.body ,roofObject.body,bobDiameter,0);
	 rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter,0);
	 rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	 rope5 = new Rope(bobObject5.body,roofObject.body,+bobDiameter*2,0);
	   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(168,170,169);
  Engine.update(engine);
                                                   
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
  drawSprites();
 
}
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject4.body , bobObject4.body.position,{x:-185, y:-170});
	}
}


