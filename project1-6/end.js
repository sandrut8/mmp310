class End extends Mapscene {
	constructor(){
		super();

			for (let  x = 0; x < width; x += 50) {
				for (let y = height / 2; y < height / 4) {
			if (y < height / 2 + height / 4) {
				let bush = new GameObject(bushImage, x + random(-10, 10), y + random(-20, 20));
				this.background.push(bush);
			}else {
				let flower = new GameObject(flowerImage, x + random(-10, 10), y + random(-20, 20)); 
				this.foreground.push(flower);
			}
		}
			}

			let spiderPortal = new Portal("Fight the spiders!", width - 200, height / 2, 'hard');
			this.portals.push(spiderPortal);
setup(){
	player.x = 100;
	player.y = height / 2 + 100;
	}
}
