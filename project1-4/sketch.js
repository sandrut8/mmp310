/*
project 1-4
adding functions and collisions
*/

var john, lucas;
var johnX, johnY;
var johnSpeed = 3;

var roseImage, sunImage, signImage;

var bgRoseX = [50, 100, 200, 350, 420, 506, 600, 800];
var bgRoseY = [300, 250, 350, 250, 333, 356, 350, 300];


function preload() {
    john = loadImage("john.gif");
    lucas = loadImage("lucas.gif");
    roseImage = loadImage("rose.png");
    sunImage = loadImage("sun.png")
    signImage= loadImage("sign.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    johnX = width / 2;
    johnY = height / 2 + 100;
    imageMode(CENTER);
 }


function sign(msg, x, y) {
 image(signImage,x, y);

  // 2d collision between player john and sign
 if (johnX - john.width / 2 < x + signImage.width / 2 && 
    johnX + john.width / 2 > x - signImage.width / 2 &&
    johnY - john.height / 2 < y + signImage.height / 2 &&
    johnY + john.height / 2 > y - signImage.height / 2 ) {
    fill(255);
    textFont("Comic Sans MS");
    textSize(18);
    textAlign(CENTER, CENTER);
    text(msg, x - signImage.width/2 + 20, y - sunImage.height/2, signImage.width -40, signImage.height -60);
 }
   
    
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
    
/* signs*/
sign("Begin the search for the secret potion.", 100, height / 2);
sign("Start here!", 500, height / 2);
sign("The secret potion is to the west", 1000, height / 2 + 100);
    if (johnIsWalking) {
        image(john, johnX, johnY);
    } else {
        image(lucas, johnX, johnY);
    }
}
