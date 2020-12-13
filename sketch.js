const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;








function setup() {
  createCanvas(480,800);
  groundObject=new Ground(width/2,670,width,20);
}

function draw() {
  background(255,255,255);  
  groundObject().display

}