class Player extends Entity {
    constructor(x, y, pv) {
        super(x, y, pv, "player");
        this.speed = 4;
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

        // TODO : collision detection -> damage
        // TODO : shoot laser
    }

    draw(ctx) {
        super.draw(ctx);
    }
}

