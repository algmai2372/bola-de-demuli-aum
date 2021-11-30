const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var ground, box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box41,box15,box16,box17,box18,box24,box23,box22,box21,box20,box19,maca,rope


function setup(){
createCanvas(3000,800)
engine=Engine.create()
world=engine.world
ground= new Ground (600,800,10000,10)
box1= new Box (800, 700, 50,50)
box2= new Box (800, 600,  50,50)
box3= new Box (800, 500,  50,50)
box4= new Box (800, 400,  50,50)
box5= new Box (800, 300,  50,50)
box6= new Box (800, 200,  50,50)
box7= new Box (800, 100,  50,50)
box8= new Box (800, 0,  50,50)
box9= new Box (800, -100,  50,50)
box10= new Box (800, -200,  50,50)
box11= new Box (900, 700, 50,50)
box12= new Box (900, 600, 50,50)
box13= new Box (900, 500, 50,50)
box41= new Box (900, 400, 50,50)
box15= new Box (900, 300, 50,50)
box16= new Box (900, 200, 50,50)
box17= new Box (900, 100, 50,50)
box18= new Box (900, 0, 50,50)
box19= new Box (1000, 700, 50,50)
box20= new Box (1000, 600, 50,50)
box21= new Box (1000, 500, 50,50)
box22= new Box (1000, 400, 50,50)
box23= new Box (1000, 300, 50,50)
box24= new Box (1000, 200, 50,50)
maca= new Maca (550,400,90,90)
rope= new Rope (maca.body,{x:500,y:300})
}

function draw(){
background("black")
Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box41.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
maca.display()
rope.display()
}
function mouseDragged(){
Matter.Body.setPosition(maca.body,{x:mouseX,y:mouseY})
}