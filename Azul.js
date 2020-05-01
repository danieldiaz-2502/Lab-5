class Azul {
    constructor(x,y,disX,diameter,speed) {
        this.x = x;
        this.y = y;
        this.disX = disX;
        this.diameter = diameter;
        this.speed = speed;
    }

    move() {
        this.x += this.speed;

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
    setDiameter(diameter){
        this.diameter = diameter;
    }
    getDiameter(){
        return this.diameter;
    }
}