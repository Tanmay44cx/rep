var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropZone,dropZone1,dropZone2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropZone =createSprite(330,610,20,100);
	dropZone = Bodies.rectangle(350,610,width,height,{restitution:0.5,isStatic:true});
	dropZone.shapeColor=color("red");


	dropZone1 =createSprite(380,670,100,20);
	dropZone1 = Bodies.rectangle(350,670,width,height,{restitution:0.5,isStatic:true});
	dropZone1.shapeColor=color("red");

	
	dropZone2 =createSprite(440,610,20,100);
	dropZone2 = Bodies.rectangle(390,610,width,height,{restitution:0.5,isStatic:true});
	dropZone2.shapeColor=color("red");

	




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground,dropZone,dropZone1,dropZone2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
     Matter.Body.setStatic(packageBody, false);
  
  }
}



