const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(600,height,1200,20);

  box1 = new Box(700,300,70,70);
}

function draw() {
  background(255);
  // background(225);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  ground.display();

  drawSprites();
}