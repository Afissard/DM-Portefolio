class Laser extends Entity {
    constructor(x, y, pv) {
        super(x, y, pv, "laser");
        this.speed = 16;
    }

    update() {
        
    }

    draw(ctx) {
        super.draw(ctx);
    }
}