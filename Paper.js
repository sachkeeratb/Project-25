class Paper{
  constructor(x, y, radius, options) {
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    // fill(254, 0, 252);
    // ellipse(0, 0, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image, 0,0,this.r, this.r);
    pop();
  }
}
    