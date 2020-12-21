class PlatformScene {
	constructor(bgColor, minObstacles, maxObstacles){
		this.bgColor = bgColor;
		this.minObstacles = minObstacles;
		this.maxObstacles = maxObstacles;

		this.groundY = 200;

		this.obstacles =[];

		this.gravity =2;
		this.ySpeed = 3;
	}

	setup(nextScene) {
		player.x = 200;
		player.y = height - this.groundY;
		player.isWalking = true;

		this.obstacles = [];

		var n = random(minObstacles, maxObstacles);
		for (let i = 0; i < n; i++){
			let x = random(width/2, width) +i * width 2;
			let obstacles = new Spider(x, height - this.groundY);
			this.obstacles.push(obstacle);
		}

		if (nextScene) = this.nextScene = nextScene;

		draw(){
			background ("this.bgColor");
        	noStroke();
        	fill("black");
        	rect(0, height - this.groundY, width, this.groundY);

        	if (player.y <height - this.groundY){
            	player.YSpeed += this.gravity;
        } else {
            // john on the ground
            	player.YSpeed = 0;
            	player.isJumping = false;
        }


        if (!player.isJumping && keyIsDown(32)){ 
            player.YSpeed = -30;
            player.isJumping = true;
        }

        player.y += player.ySpeed;

        player.draw();

        for(let i= 0; i< this.obstacles.length; i++){
        	let obstacle = this.obstacles[i];
        	obstacle.update();
        	obstacle.draw();

        	if (obstacle.collide(player)){
        		player.isJumping = false;
        		changeScene('lose', currentScene);
        	}

        	if (i == this.obstacles.legnth -1 && player.x > obstacle.x){
        			player.isJumping = false;
	        		changeScene('win', this.nextScene);

        	}


        }
		}
	}
}

