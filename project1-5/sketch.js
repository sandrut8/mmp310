/*
project 1-5
adding functions and collisions
*/

var john, lucas, Happy;
var johnX, johnY;
var johnSpeed = 3;
var johnMainX, johnMainY;

// game physics
var groundY = 200;
var GRAVITY = 2; // accelerattion 2 pix per frame
var johnYSpeed = 2;
var johnIsJumping = false
var roseImage, sunImage, signImage, spiderImage;

var bgRoseX = [50, 100, 200, 350, 420, 506, 600, 800];
var bgRoseY = [300, 250, 350, 250, 333, 356, 350, 300];

var spiderPositions = [];
var scene ='main';
var bgcolor= 'lightpink';
var minSnakes = 3;
var maxSnakes = 6;
function preload() {
    john = loadImage("john.gif");
    lucas = loadImage("lucas.gif");
    Happy = loadImage("happy.gif");
    roseImage = loadImage("rose.png");
    sunImage = loadImage("sun.png");
    signImage= loadImage("sign.png");
    snakeImage= loadImage("spider.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    johnX = width / 2;
    johnY = height / 2 + 100;
    imageMode(CENTER);
 }


function draw() {  
 // scene manager
 if (scene == "main") {
    main();
 }
  else if (scene == "game"){ 
    game();
  }
else if (scene =="win"){
 }
 else if (scene == "lose"){
    lose();
 }
}



function setupMain() {
    johnX = johnMainX;
    johnY = johnYMain;

    SCENE = "main";
}

function main() {
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
sign("Lizard - Easy !", 100, height / 2, 'lightpink',3, 6);
sign("Lizard- Medium", 500, height / 2, 'pink', 7, 11);
sign("Lizard - Hard", 1000, height / 2 + 100, 'blue',12, 15);
    if (johnIsWalking) {
        image(john, johnX, johnY);
    } else {
        image(lucas, johnX, johnY);
    }
}


function setupGame(fromMain, bg, min, max) { 

        bgcolor = bg;
        minSnakes = min;
        maxSnakes = max;

        if (fromMain) {
            scene = "game";
        johnMainX = johnMainY;

        }
        

        johnX = 200;
        johnY = height - groundY;

        snakePositions = [];
        var snakeNumber = (minSnakes, maxSnakes);
        for (let i = 0; i < snakeNumber; i++){
            snakePositions.push ( random(width/2, width) + i * width / 2)
        }
}

function game(){ 
        background ("bgColor");
        noStroke();
        fill("black");
        rect(0, height - groundY, width, groundY);

        rose();

        /*jumping and falling*/
        

        //apply gravity

        if (johnY <height - groundY){
            johnYSpeed += GRAVITY;
        } else {
            // jerry on the ground
            johnYSpeed = 0;
            johnIsJumping = false;
        }


        if (!johnIsJumping && keyIsDown(32)){ 
            johnYSpeed = -30;
            johnIsJumping = true;
        }

         johnY += johnYSpeed;

         for (let i = 0; i < spiderPositions.length; i++) {
            let x= spiderPositions [i];
            spider(x);
            spiderPositions[i] -= 10;

            if (i== spiderPositions.length - 1 && johnX > x) {
                scene = 'win';
            }
         }

         if (johnIsJumping) {
            image (john, johnX, johnY);
         } else {
            image (john, johnX, johnY);
         }

        
}
function win(){
        textSize (100);
        fill("white");
        text("winner!", width / 2, height / 2);

        textSize(50);
        tect("Press M to return to map", width / 2, height / 2 + 100);
        if (keyIsDown(77)) { 
          setupMain();
      }


}
    
function lose() {
        textSize (100);
        fill("white");
        text("Loser!", width / 2, height / 2);

        textSize(50);
        tect("Press R to try again", width / 2, height / 2 + 100);
        if (keyIsDown(77)) { 
          setupGame(false, bg, minSnakes, maxSnakes);
      }

}
function sign(msg, x, y, bg) {
    image(signImage,x, y);

  // 2d collision between player john and sign
    if (johnX - john.width / 2 < x + signImage.width / 2 && 
        johnX + john.width / 2 > x - signImage.width / 2 &&
        johnY - john.height / 2 < y + signImage.height / 2 &&
        johnY + john.height / 2 > y - signImage.height / 2 ) {
        fill(255);
        textFont("Comic Sans MS");
        textSize(20);
        textAlign(CENTER, CENTER);
        text(msg, x - signImage.width/2 + 20, y - sunImage.height/2, signImage.width -40, signImage.height -60);
 
        textSize(16);
        text("Press Enter!, x, y + 20");
        if(keyIsDown(ENTER)){ 
                setupGame(true, bg, 5, 10);
        }
    }
}

function rose(){ 
    for (var cloudCounter = 0; cloudCounter < 5; cloudCounter += 1) {
        image(sunImage, cloudCounter * 100, 100)
    }
    for (let x = 0; x < width; x += 150) {
        image(roseImage, x, 400);

    }

    for (let i = 0; i < bgRoseX.length; i++) {
        image(roseImage, bgRoseX[i], bgRoseY[i]);
    }
}

function snake(x) {
    let y = height - groundY;
    image(snakeImage, x, y);

    if (johnX - john.width / 2 < x + snakeImage.width / 4 && 
        johnX + john.width / 2 > x - snakeImage.width / 4 &&
        johnY - john.height / 2 < y + snakeImage.height / 4 &&
        johnY + john.height / 2 > y - snakeImage.height / 4 ) {

        scene = 'lose';
    }
}