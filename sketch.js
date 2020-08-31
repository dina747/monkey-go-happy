const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var name;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    }
    
Text("jehad is i dont know what she is bruh",name,200,100);

function draw(){
    background(0);
    ball.shapeColor="red";
    Engine.update(engine);

}