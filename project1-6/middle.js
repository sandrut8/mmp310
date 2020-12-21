class Middle extneds MapScene{
	constructor(){
		super();

		for (let x = 0; x < width; x+= 100){
			for(let y = 0; y < height; y+= 150){
				if (x < width / 3 || x > width - width / 3){
				let rose = new GameObject(roseImage, x + random(-50, 50), y + random(-100, 100));
				this.background.push(rose);
			}else{
				let bush = new GameObject(bushImage, x + random(-50, 50), y + random(-100, 100));
				this.background.push(bush);
			}
			}

			let endPortal = new Portal("Enter the last one", width / 2, height - 100, 'end');
			this.portals.push(endPortal);

			let spiderPortal = new Portal("Fight the spiders!", width / 2, height / 2, 'medium');
			this.portals.push(spiderPortal);
		}
		setup(){
			player.x = width / 2;
			player.y = 100;
		}
	}
}