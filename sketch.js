var wall,bullet, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,30,30);

  bullet.velocityX = speed;

  wall=createSprite(1200,200,thickness,height/2);

  

}
function draw() 
{
  background("black"); 

    if(bullet.x < (bullet.weight+wall.weight)/2) 
    {
    
     var  deformation=0.5 * weight * speed* speed/(22500);
      if(deformation>180) 
     {
       bullet.shapeColor = "white"
     }
      if(deformation<180 && deformation>100)
     {
       bullet.shapeColor = "white"
     }
      if(deformation<100) 
     {
       bullet.shapeColor = "white"
     }
       if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness) ;
    
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }
      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    }
  }

 drawSprites();
  
}





 
   
  