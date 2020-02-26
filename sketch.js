let potatoIMG;
let eyeSpacing =35;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230,80,90);
  ellipse(width/2,height/2,170,230);
  fill(100,100,60);//face
  console.log("x: " + mouseX + ", y: " + mouseY);

  
  push();
  noStroke();
  fill(255,200,70);//hair color
  ellipse(width/2,120,120,70);
  ellipse(120,150,60,90);
  ellipse(280,150,60,90);
  pop();
  
  push();
   fill(255);
   translate(0,175);
   push();
   translate(width/2-eyeSpacing,0);
    ellipse(0,5,30,30);
    // ellipse(width/2-eyeSpacing,0,0,15,15);
  push();
  // ellipse(width/2+eyeSpacing,0,0,5,5);
  
  
     
      push();
       fill(100,100,0);
        ellipse(0,0,15,15);
         push();
        ellipse(0,0,5,5);
         pop();
         pop();
  
  push();
      fill (255);

  ellipse(75,5,30,30);//pupil
  fill(100,100,0);
        ellipse(75,0,15,15);
         push();
        ellipse(75,0,5,5);
        
         pop();
         pop();
  
   
      
         
  
 beginShape();
  fill(255,0,0);
 vertex(10, 80);
  vertex(60, 80);
  vertex(30, 100);
  endShape(CLOSE);
 fill (210,160,130);

  
  
}