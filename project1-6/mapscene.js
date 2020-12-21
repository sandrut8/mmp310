class MapScene {
  constructor() {
    this.background = [];
    this.foreground = [];
    this.roses = [];
    this.suns = [];
    this.portals = [];
  }

  draw() {
	background(220);

    for (let i = 0; i < this.background.length; i++) {
      this.background[i].draw();
	}


	player.isWalking = false;

	if (keyIsDown(RIGHT_ARROW)) {
		player.x += player.speed;
		player.isWalking = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		player.x -= player.speed;
		player.isWalking = true;
	}

	if (keyIsDown(UP_ARROW)) {
		player.y -= player.speed;
		player.isWalking = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		player.y += player.speed;
		player.isWalking = true;
	}

    let enterPortal;
    for (let i = 0; i < this.portals.length; i++) {
      this.portals[i].draw();

      if (this.portals[i].collide(player)) {
        this.portals[i].drawText();

        if (keyIsDown(ENTER)) {
          enterPortal = this.portals[i].sceneToOpen;
        }
	  }
	}

      if (enterPortal) {
        changeScene(enterPortal, currentScene);
      }


    player.draw();
    for (let i = 0; i < this.suns.length; i++) {
      this.suns[i].draw();
      this.suns[i].update();
    }

    for (let i = 0; i < this.foreground.length; i++) {
      this.foreground[i].draw();
    }
  }
}