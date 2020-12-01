const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon=new Polygon(100,200,40,40)
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
  ground=new Ground(375,350,250,10)
  ground1=new Ground(580,150,200,10)
  box01=new Box3(325,330,50,40)
  box02=new Box3(375,330,50,40)
  box03=new Box3(395,330,50,40)
  box04=new Box3(410,330,50,40)
  box05=new Box2(338,287,50,40)
  box06=new Box2(380,287,50,40)
  box07=new Box2(420,287,50,40)
  box08=new Box1(353,257,50,40)
  box09=new Box1(400,257,50,40)
  box10=new Box(375,227,50,40)

  box11=new Box2(530,140,50,40)
  box12=new Box2(580,140,50,40)
  box13=new Box2(630,140,50,40)
  box14=new Box1(550,90,50,40)
  box15=new Box1(600,90,50,40)
  box16=new Box(570,50,50,40)
  
}

function draw() {
  Engine.update(engine);
  background("grey");  
  polygon.display()
  slingshot.display()
  ground.display()
  ground1.display()
  fill("blue")
  box01.display()
  box02.display()
  box03.display()
  box04.display()
  box05.display()
  box06.display()
  box07.display()
  box08.display()
  box09.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mousePressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body)
  }
}
function mouseReleased(){
  slingshot.fly();
}