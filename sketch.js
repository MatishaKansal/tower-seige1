const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var lastMouseX = null;
var lastMouseY = null;

var engine, world;
var ground, box1;

function preload() {
  polyimg = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600, height, 1200, 20);
  ground2 = new Ground(550, 302, 200, 10);
  ground3 = new Ground(950, 202, 200, 10);

  box1 = new Box(530, 235, 40, 40);
  box2 = new Box(570, 235, 40, 40);
  box3 = new Box(550, 195, 40, 40);
  box4 = new Box(510, 275, 40, 40);
  box5 = new Box(550, 275, 40, 40);
  box6 = new Box(590, 275, 40, 40);
  box7 = new Box(930, 135, 40, 40);
  box8 = new Box(970, 135, 40, 40);
  box9 = new Box(950, 95, 40, 40);
  box10 = new Box(910, 175, 40, 40);
  box11 = new Box(950, 175, 40, 40);
  box12 = new Box(990, 175, 40, 40);
  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  sling = new Slingshot(this.polygon, { x: 200, y: 200 });

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false,
    },
  });
}

function draw() {
  background(153, 217, 234);
  // background(225);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground1.display();
  ground2.display();
  ground3.display();

  sling.display();
  imageMode(CENTER);
  image(polyimg, polygon.position.x, polygon.position.y, 40, 40);
  // drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.fly();
}
