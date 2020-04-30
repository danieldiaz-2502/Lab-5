class Azul {
    constructor() {
        this.x = random(width);
        this.y = (1, 100);
        this.disX = 1;
        this.diameter = 30;
        this.speed = 2;
    }

    move() {
        this.x += this.speed;
        this.y += 0;

        if (this.x > width - 30) {
            this.speed = -2;
        }
        if (this.x < 0) {
            this.speed = 2;
        }
    }

    display() {
        fill(0, 0, 255);
        rect(this.x, this.y, this.diameter, this.diameter);
    }
}