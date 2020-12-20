var john, lucas;
var johnX, johnY;
var johnSpeed = 3;

var roseImage, sunImage;

var bgRoseX = [50, 100, 200, 350, 420, 506];
var bgRoseY = [300, 250, 350, 250, 333, 356];


function preload() {
    john = loadImage("john.gif");
    lucas = loadImage("lucas.gif");
    roseImage = loadImage("rose.png");
    sunImage = loadImage("sun.png")
}

function setup() {
    createCanvas(640, 480);
    johnX = width / 2;
    johnY = height / 2 + 100;
    imageMode(CENTER);

}

function draw() {
    background(100, 100, 255);
    //console.log(mouseX, mouseY);

    //loop

    for (var cloudCounter = 0; cloudCounter < 5; cloudCounter += 1) {
        image(sunImage, cloudCounter * 100, 100)
    }
    for (let x = 0; x < width; x += 150) {
        image(roseImage, x, 400);

    }

    for (let i = 0; i < bgRoseX.length; i++) {
        image(roseImage, bgRoseX[i], bgRoseY[i]);
    }

    var johnIsWalking = false;

    if (keyIsDown(RIGHT_ARROW)) {
        johnX += johnSpeed;
        johnIsWalking=true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        johnX -= johnSpeed;
        johnIsWalking=true;
    }
    if (keyIsDown(UP_ARROW)) {
        johnY -= johnSpeed;
        johnIsWalking=true;
    }
    if (keyIsDown(DOWN_ARROW)) {
        johnX += johnSpeed;
        johnIsWalking=true;
    }
    


    if (johnIsWalking) {
        image(john, johnX, johnY);
    } else {
        image(lucas, johnX, johnY);
    }
}
