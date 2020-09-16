var john;

function preload()
 john = loadImage("john.gif");
       }

function setup() { 
createCanvas(640,480);


} 
function draw()  { 
background(220)
image(john, 0, 0);
}