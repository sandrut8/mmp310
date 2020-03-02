let eyeSpacing = 35;
let dogImage

function setup() {
  createCanvas(400, 400);
  dogImage = loadImage('lilleman.png');
}

function draw() {
  background(230, 80, 90);
  
    // console.log("x: " + mouseX + ", y: " + mouseY);

  //head
  fill (210,160,130);
  ellipse(width / 2, height / 2, 170, 230);


 // Hair
  push();
    noStroke();
    fill(255, 200, 70); //hair color
    ellipse(width / 2, 120, 120, 70);
    ellipse(120, 150, 60, 90);
    ellipse(280, 150, 60, 90);
  pop();

  //eyes
  push();
    fill(255);
    translate(0,175);
    //eye on left
    push();
      translate(width/2-eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
        fill(173, 216, 230);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
    //eye on right
    push();
      translate(width/2+eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
         fill(173, 216, 230);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  pop();
  
  
// mouth
  push()
    beginShape();
    translate(width/2 - 40 ,height/2 -20)
    fill(255, 0, 0);
    vertex(10, 80);
    vertex(60, 80);
    vertex(30, 100);
    endShape(CLOSE);
  pop()

  
// mouseX-tracking dog  
push();
    translate(map(mouseX, 0, width, 0, width), height - 100);
    image(dogImage, -dogImage.width / 4, -dogImage.height / 4, dogImage.width / 2, dogImage.height / 2);
pop();

}