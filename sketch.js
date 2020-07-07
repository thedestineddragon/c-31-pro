const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(800,800);
 engine = Engine.create();
 world = engine.world;

 for(var k = 0;k <=innerWidth;k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }
   
  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75,15));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,15));
  }

  for (var j = 40; j <=innerWidth; j=j+50){
    particles.push(new Particles(j,0,5));
 
}
for (var j = 40; j <=innerWidth; j=j+50){
  particles.push(new Particles(j,0,5));

}
for (var j = 40; j <=innerWidth; j=j+50){
  particles.push(new Particles(j,0,5));
}
ground = new Ground(600,height,1200,20);
}
  

function draw() {
  background("black");  
  drawSprites();
  Engine.update(engine)
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
 
}
for (var m = 0; m < plinkos.length; m++){
 plinkos[m].display();
}
ground.display();
}
