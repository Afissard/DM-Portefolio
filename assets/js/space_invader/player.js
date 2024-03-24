class Player extends Entity {
    constructor(x, y, speed, spritePath) {
        super(x, y, speed, spritePath);
    }

    update() {
        if (moveLeft){
            this.moveLeft();
        }
        if (moveRight){
            this.moveRight();
        }
        if (shoot){
            console.log("shoot")
        }
    }

    draw(ctx) {
        super.draw(ctx);
    }
}

