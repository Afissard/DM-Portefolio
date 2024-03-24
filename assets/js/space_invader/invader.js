class Invader extends Entity {
    constructor(x, y, pv, spritePath) {
        super(x, y, pv, spritePath);
        this.speed = 1;
    }

    update() {
        // TODO : collision detection -> damage
    }

    draw(ctx) {
        super.draw(ctx);
    }
}


class InvadersGroup {
    constructor(groupId) {
        this.group = [];

        switch (groupId) {
            case 2:
                this.group = [
                    new Invader(canvas.width/2, 16, 1, "invader-05")
                ];
        
            default: // 1
                this.group = [
                    new Invader(canvas.width/2-64, 16, 1, "invader-01"),
                    new Invader(canvas.width/2-16, 16, 1, "invader-02"),
                    new Invader(canvas.width/2+16, 16, 1, "invader-03"),
                    new Invader(canvas.width/2+64, 16, 1, "invader-04")
                ];
        }
    }

    update(){
        for(let i in this.group){
            this.group[i].update()
        }
        // TODO : manage laser shoot here
    }

    draw(ctx){
        for(let i in this.group){
            this.group[i].draw(ctx)
        }
    }
}