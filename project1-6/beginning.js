class Beginning extends Mapscene {
	constructor(){
		super();

		this.background.push(new GameObject(roseImage, 100, 500));
    		this.background.push(new GameObject(roseImage, 200, 400));
    		this.background.push(new GameObject(roseImage, 300, 600));

    		this.background.push(new GameObject(bushImage, 300, 500));
    		this.background.push(new GameObject(flowerImage, 500, 800));

    		for (let x = 0; x < width + 100; x += 150){
    		this.foreground.push (new GameObject(roseImage, x, height - 100));

    		this.suns.push(new sun(100, 100));
   			this.suns.push(new sun(width/2, 150));
    		this.suns.push(new sun(100, 50));

            let middlePortal = new Portal("Enter the forrest", 
                width - 200, height -200, "middle");
            this.portals.push(middlePortal);

            let spiderPortal = new Portal("Eliminate the spiders!", 200, height - 300, "easy");
            this.portal.push(snakePortal);

            setup(){
                player.x = width / 2;
                player.y = height / 2;
            }
	}

}