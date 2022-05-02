class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  Display(){     
    push()
    imageMode(CENTER)
image(cannonImg,this.x,this.y,this.width,this.height)

pop()

image(cannonBase,70,20,200,200)
    
  }




}
