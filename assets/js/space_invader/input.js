//TODO: faire une liste des inputs
let moveLeft = false;
let moveRight = false;
let shoot = false;
let pause = false;

// Event listener for keydown event
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft" && !moveRight) {
        moveLeft = true;
        moveRight = false;
    } else if (event.key == "ArrowRight" && !moveLeft) {
        moveRight = true;
        moveLeft = false;
    }

    if (event.key == " ") {
        shoot = true;
    }
    if (event.key == "Escape"){
        pause = true;
    }
});

// Event listener for keyup event
document.addEventListener('keyup', (event) => {
    if (event.key == "ArrowLeft") {
        moveLeft = false;
    }
    if (event.key == "ArrowRight") {
        moveRight = false;
    }
    if (event.key == " ") {
        shoot = false
    }
    if (event.key == "Escape"){
        pause = false;
    }
});