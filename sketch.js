const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground;
var bo1, box1sprite, box2, box2sprite, box3, box3sprite;
var world;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  ball = new Paper(200, 450, 40);
  ground = new Ground(width / 2, 670, width, 20);
  //Create a Ground

  box1sprite = createSprite(1200, 650, 220, 20);
  box1sprite.shapeColor = "white";

  box2sprite = createSprite(700, 1000, 20, 125);
  box2sprite.shapeColor = "white";

  box3sprite = createSprite(1300, 590, 20, 135);
  box3sprite.shapeColor = "white";

  box1 = Bodies.rectangle(1200, 650, 200, 20);
  box2 = Bodies.rectangle(1100, 580, 40, 150);
  box3 = Bodies.rectangle(1200, 650, 20, 100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();

  box1sprite.x = box1.position.x;
  box1sprite.y = box1.position.y;

  box2sprite.x = box2.position.x;
  box2sprite.y = box2.position.y;
  ground.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 69, y: -125 });
  }
}
