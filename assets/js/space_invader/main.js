// Récupération du canvas et du contexte 2D
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Game {
    constructor(){
        this.isRunning = true
        this.score = 0;
        this.lvl = 1;
        this.player = null;
        this.invaderList = [];
        this.newGame();
    }

    newLvl(nextLvl){
        this.lvl = nextLvl;
        if (this.lvl % 5 == 0){
            return [new Invader(canvas.width/2, 16, 1, "invader-05")];
        } else {
            return [
                new Invader(canvas.width/2-64, 16, 1, "invader-01"),
                new Invader(canvas.width/2-16, 16, 1, "invader-02"),
                new Invader(canvas.width/2+16, 16, 1, "invader-03"),
                new Invader(canvas.width/2+64, 16, 1, "invader-04")
            ];
        }
    }

    newGame(){
        this.player = new Player(canvas.width/2, canvas.height-8, 8, "player")
        this.invaderList = this.newLvl(1)
    }

    update(){
        this.player.update()
        for(let i in this.invaderList){
            this.invaderList[i].update()
        }
    }

    draw(ctx){
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas
        this.player.draw(ctx)
        for(let i in this.invaderList){
            this.invaderList[i].draw(ctx)
        }
    }

    gameLoop() {
        var lastUpdate = Date.now();
    
        const updateAndDraw = () => {
            var now = Date.now();
            var dt = now - lastUpdate;
    
            if (dt >= 16) { // Limiting the loop to roughly 60 FPS (1000 ms / 60 ~= 16.67)
                this.update();
                this.draw(ctx);
                lastUpdate = now;
            }
    
            if (this.isRunning) {
                requestAnimationFrame(updateAndDraw); // Request the next frame
            }
        };
    
        updateAndDraw(); // Start the loop
    }
    
}

function main(){
    const g = new Game();
    g.gameLoop()
}
main();