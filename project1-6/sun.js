class sun extends GameObject {
	constructor(x, y) {
			super(sunImage, x, y);
			 
		}

	update(){ 
	this.x += 2;
	if (this.x > width + this.width / 2){
		this.x = -this.width / 2;
		
		}

   this.y +=random(-1, 1);

}
}