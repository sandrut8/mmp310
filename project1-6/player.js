class Player extends GameObject {
	constructor(x, y) {
		super(john, x, y);

		this.idle = john;
		this.walk = lucas;
		this.jump = happy;

		this.isWalking = false;
		this.isJumping = false;

		this.speed = 3;
		this.ySpeed = 3;
	}

	draw() {
		if (this.isWalking) {
			image(this.walk, this.x, this.y);
		} else if (this.isJumping) {
			image(this.jump, this.x, this.y);
		} else {
			image(this.idle, this.x, this.y);
		}
	}
}