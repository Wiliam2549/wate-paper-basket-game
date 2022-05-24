class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
    }
    display() {
        var p = this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        noStroke();
        rect(p.x, p.y, this.width, this.height);
        pop();
    }
}

