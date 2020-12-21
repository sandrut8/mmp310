class player extends GameObject {
	constructor(x, y){
		super(john, x, y);

		this.walk = johnWalking;
		this.jump = johnJumping;


		this.isWalking = false;
		this.isJumping = false;

		this.speed = 3;
		this.yspeed = 3;
	}

draw(){
	if (this.isWalking) {
		image(this.walk, this.x, this.y);
	} else if (this.isJumping) {
			image(this.jump, this.x, this.y); 
		

		}

		}
		}

