class Maca
{ constructor(x,y,width,height)
    { var options = {
'density':0.06,
'frictionAir':0.01
    }
     this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
       this.height = height;
        World.add(world, this.body); 
       }
        display()
        { 
            push()
            var pos =this.body.position;
            var ang=this.body.angle 
            translate(pos.x,pos.y)
            rotate(ang)
            ellipseMode(CENTER);
             fill("gray");
              ellipse(0,0, this.width, this.height);
              pop()
            }  };