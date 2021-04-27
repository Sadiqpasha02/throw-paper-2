class Paper {
    constructor(x, y, radius) {
        var PaperOptions = {
            restitution : 0.3,
            friction : 1.0,
            density : 1.0
        }
        this.body = Matter.Bodies.circle(x, y, radius, PaperOptions);
        this.radius = radius;
        this.image = loadImage("paper CPro25.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(color(225, 255, 0));
        image(this.image, 0, 0, this.radius);
        pop();
    }
}