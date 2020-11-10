
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var Tree,stone1,ground1, launcher1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy,boyImage;

function preload()
{
  boy = loadImage("boy.png");
}

function setup()
{
	createCanvas(1500,550);
	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(235,420,30); 

  mango1 = new Mango(1000,100,30);
  mango2 = new Mango(950,200,30);
  mango3 = new Mango(1100,200,30);
  mango4 = new Mango(1050,140,30);
  mango5 = new Mango(1180,190,30);

	Tree = new tree(1050,290,100,100);
	ground1 = new ground(width/2,540,width,20);
	launcher1 = new launcher(stone1.body,{x:120,y:385})
  
	Engine.run(engine);
 
}
function draw()
{

  background("white");
  textSize(30);
  fill("red");
  text("Press Space for second chance ",150 ,50);
  image(boy ,80,305,220,300);
  
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);

  Tree.display();
  stone1.display();
  ground1.display();
  launcher1.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

}

function detectollision(lstone,lmango)
{
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance <= lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body , false);
  } 
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone1.body, {x:120, y:385}) 
	  launcher1.attach(stone1.body);
  }
 }

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	launcher1.fly();
    
}