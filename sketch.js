const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particle;
var plinkos = [];
var division

var score =0;
var count = 0;
var gameState ="start";


function setup() {
  createCanvas(780,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1900, 10);
  World.add(world, ground);
  stand1 = new Division(0, 580, 10, 400);
  stand2 = new Division(80, 680, 10, 200);
  stand3 = new Division(170, 680, 10, 200);
  stand4 = new Division(250, 680, 10, 200);
  stand5 = new Division(330, 680, 10, 200);
  stand6 = new Division(410, 680, 10, 200);
  stand7 = new Division(475, 680, 10, 200);
  stand8 = new Division(555, 680, 10, 200);
  stand9 = new Division(635, 680, 10, 200);
  stand10 = new Division(715, 680, 10, 200);
  stand11 = new Division(779, 580, 10, 400);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background(0);

   Engine.update(engine);

   textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 470, 550);
  text(" 200 ", 550, 550);
  text(" 200 ", 640, 550);
  
  

   ground.display();

   if ( gameState =="end") {
    push();
    strokeWeight(10);
    stroke("Blue");
      textSize(100);
      text("GameOver", 150, 250);
      pop();
    }

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();
   stand11.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 160) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }
  
 

  

   

}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}