class Snow {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, r, options);
        this.snowImage = loadImage('snow4.webp');
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snowImage, this.x, this.y, 50, 50);
        pop();
    }
}