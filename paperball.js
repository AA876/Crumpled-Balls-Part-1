class Paperball{
constructor(x,y,width){
var options = {
'isStatic': false,
'restitution': 1.0,
'friction': 0.5,
'density': 0.525 
}
this.body = Bodies.circle(x,y,width, options) 
this.width = width
World.add(world, this.body)   
}  
display(){
var pos = this.body.position
var angle = this.body.angle
push ()
translate (pos.x,pos.y)
rotate (angle)
strokeWeight(4)
stroke("green")
fill (255)    
ellipse(0,0,this.width)
ellipseMode(RADIUS)
pop ()
}
}