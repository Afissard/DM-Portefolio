class Entity {
    constructor(x, y, pv, spriteId) {
        this.x = x;
        this.y = y;
        this.pv = pv;
        this.sprite = document.getElementById(spriteId);
        this.speed = 0;
    }

    update(){

    }

    draw(ctx){
        ctx.drawImage(this.sprite, this.x-this.sprite.width, this.y-this.sprite.height, this.sprite.width*2, this.sprite.height*2); // draw + zoom*2
        // ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width, this.sprite.height); // draw + zoom*1
    }

    moveLeft(){
        if (this.x - this.speed > 0){
            this.x -= this.speed;
        }
    }

    moveRight(){
        if (this.x + this.speed < canvas.width){
            this.x += this.speed;
        }
    }

    moveUp(){
        if (this.y - this.speed < 0){
            this.y -= this.speed;
        }
    }

    moveDown(){
        if (this.y + this.speed > canvas.height){
            this.y += this.speed;
        }
    }

    // TODO : collision detection -> damage
}