class Dustbin {
    constructor(x,y,width,height,options) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(1200, 625, 20, 100);
        this.body = Bodies.rectangle(1300, 680, 200, 20);
        this.body = Bodies.rectangle(1400, 625, 20, 100);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        rect(1200, 625, 20, 100);
        rect(1300, 680, 200, 20);
        rect(1400, 625, 20, 100);
        imageMode(CENTER);
        image(this.image,1300,620,250,150);
        pop();
    }
}