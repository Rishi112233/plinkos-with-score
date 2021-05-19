const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle;
var plinkos       =[];
var divisions     =[];
var divisionheight=250;
var gameState     ="PLAY";
var count         = 0;
var score         = 0;
function setup() 
{
  createCanvas(700,700);
  engine = Engine.create();
  world  = engine.world;
  base   = new ground(width/2,height,width,20);

  for(var k =0; k<=width;k=k+80)
  {
     divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
  }
  for(var j=75;j<=width;j=j+50)
{
    plinkos.push(new plinko(j,75));
}
  for(var j=45; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,175));
  } 
  for(var j=75; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,275));
  } 
  for(var j=45; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,375));
  } }

function draw() {
  background(232,255,255)
  Engine.update(engine);
 textSize(30);
 fill(0,77,121);
 text("SCORE:",+score,30,70);

textSize(30)
text("500",15,500)
text("500",575,500) 
text("200",495,500) 
text("200",415,500) 
text("100",335,500) 
text("100",255,500) 
text("200",175,500) 
text("200",95,500) 
      
base.display();
console.log(gameState);
if(gameState==="END")
{
  background("black");
  textSize(50);
  fill("blue");
  text("GAME OVER",350,350);
} 

  for(var i=0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }
 if(gameState!=="END")
 {
     if(particle!=null){
     particle.display();
     if(particle.body.position.y>660){
     if(particle.body.position.x<322){
     score=score+500;
     particle=null;
     count=count+1
     }}}
     if(particle!=null){
     particle.display();
     if(particle.body.position.y>660){
     if(particle.body.position.x<322){
     score=score+100;
     particle=null;
     count=count+1

      }}}
     if(particle!=null){
     particle.display();
     if(particle.body.position.y>660){
     if(particle.body.position.x<562){
      score=score+200;
      particle=null;
      count=count+1
     }}}
    
     for(var k=0;k<divisions.length;k++)
     {
      divisions[k].display();
     }
     if(count>=5)
     {
       gameState="END";
     }
     drawSprites();
}
}
 function mousePressed(){
  if(gameState!=="END"){
particle=new particles(mouseX,mouseY,10,10)

}
}