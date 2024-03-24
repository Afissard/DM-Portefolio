
class Entity {
    constructor(x, y, speed, spriteId) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = document.getElementById(spriteId);
    }

    update(){

    }

    draw(ctx){
        ctx.drawImage(this.sprite, this.x-8, this.y-8, 16, 16); // draw + zoom*2
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
}