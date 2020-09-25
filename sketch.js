const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var tom;
var g2;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    tom = new Box(440, 600, 80, 20)
    ground = new Ground(200,height,400,20)
    g2 = new Ground(200, 750, 800, 20)
    g2.shapeColor = color(0, 255, 0)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    tom.display();
    g2.display();
}