class Spider extends GameObject {
	constructor(x, y) {
		super(spiderImage, x, y);
		this.speed = 10;
	}

	update() {
		this.x -= this.speed;
	}
}