/*
project 1-6
objected oriented version
classes and objects
*/
var john, lucas, Happy;
var roseImage, sunImage, signImage, spiderImage;
var bushImage, flowerImage;

var player;
var scenes = {};
var currentScene = 'beginning';

function preload() {
    john = loadImage("john.gif");
    lucas = loadImage("lucas.gif");
    happy = loadImage("happy.gif");
    roseImage = loadImage("rose.png");
    sunImage = loadImage("sun.png");
    signImage= loadImage("sign.png");
    spiderImage= loadImage("spider.gif");
    bushImage= loadImage("bush.png");
    flowerImage= loadImage("flower.png");
}

function setup() {
    createCanvas (windowWidth, windowHeight);
    imageMode(CENTER);
    textFont("Comic Sans MS");
    textAlign(CENTER, CENTER);

    player= new Player(width / 2, height / 2);

    scenes.beginning = new Beginning();
    scenes.middle = new Middle();
    scenes.end = new End();

    scenes.easy = new PlatformScene('yellow', 4, 7);
    scenes.medium = new PlatformScene('darkblue', 8,10);
    scenes.hard = new PlatformScene('purple', 11, 15);
    scenes.win = new Prompt('You win!', 'Hit Enter to return to Map');
    scenes.lose = new Prompt('You lose', 'Hit Enter to Try again');
}

function changeScene(sceneName, nextScene){
        currentScene = sceneName;
        scenes[currentScene].setup(nextScene);
}

function draw() {
 scenes[currentScene].draw();

    // player.isWalking = false;

    // portal.push(new Portal("Begin the search for the secret potion.", 500, height / 2 + 100, "easy"));
    // portal.push(new Portal("Lizard medium.", 100, height / 2 + 200, "medium"));
    // portal.push(new Portal("Lizard hard", 1000, height / 2, "hard"));

    // for (let i = 0; i < portal.length; i++){
    //     portals[i].draw();

    //     if (portals[i].collide(player)) {
    //         portals[i].drawText();

    //         if (keyIsDown(ENTER)){

    //         }
    // 	}
    // }
    // for (let i = 0; i < suns.length; i++){
    // 	suns[i].draw();
    //     suns[i].update();
    // }
}