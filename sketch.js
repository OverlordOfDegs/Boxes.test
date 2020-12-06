const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var box1, box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(30,200,20,20);
    box2 = new box(80,300,20,20);

    

    ground = Bodies.rectangle(200,height,200,20);
    

   

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
 //   rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    box2.display();
   ground.display();
}