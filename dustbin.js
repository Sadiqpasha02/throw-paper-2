class Dustbin {
    constructor(x, y, width, height) {
        var DustbinOptions = {
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x, y ,width, height, DustbinOptions);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(color(50, 50, 0));
        rect(0, 0, this.width, this.height);
        pop();

    }
}