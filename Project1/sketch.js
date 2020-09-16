var john, lucas;
var johnX, johnY;
var johnSpeed =3;
function preload() {
   john = loadImage("john.gif");
    lucas =loadImage(lucas.gif);
    
}
function setup() {
createCanvas(640, 480);
    johnX =width/2;
    johnY =height/2;
    imageMode(CENTER);

}
function draw(){
    
 background(220);
    
    if (keyIsDown(RIGHT_ARROW)){
        jerryX += johnSpeed;
        }
    if (keyIsDown(LEFT_ARROW)){
        jerryX -= johnSpeed;
        }
    if (keyIsDown(UP_ARROW)){
        jerryY -= johnSpeed;
        }
    if (keyIsDown(DOWN_ARROW)){
        jerryX += johnSpeed;
        }
    image(john, johnX, johnY);
}