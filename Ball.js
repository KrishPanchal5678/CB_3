class paper
{

constructor(x,y,radius){

   var options = {
       'restitution' : 0.3,
       isStatic:false,
       'friction':0.5,
       'density' : 1.2
   }
  
 this.radius = radius;
 this.body = Bodies.circle(x,y,radius, options)
 World.add(world, this.body);
 this.image = loadImage("sprites/ball.png");
}

display()
{
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
}


}