Game.Play = function(game) {
    
};

var livingEnemies = [];

Game.Play.prototype = {
	create: function() {
		this.player = null;
		this.enemies = null;
		this.missiles = null;
		this.bonus = null;
		this.missileTime = 0;
		this.cursors = null;
		this.fireButton = null;
		this.explosions = null;
		this.space = null;
		this.press = null;
		this.keys = null;
		this.scoreText = null;
		this.scoreString = null;
		this.livesText = null;
		this.lives = null;
		this.bullets = null;
		this.shootingTimer = 0;
		this.start = null;
		this.gameover = null;
		this.enemyTime = null;
		this.begin = null;
		this.music = null;
		this.shoot = null;
		this.explode = null;
		this.end = null;
		this.playing = false;
		this.isgameover = false;
		Game.score = 0;
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.space = this.add.tileSprite(0, 0, 480, 320, 'space');
		
		this.missiles = this.add.group();
		this.missiles.enableBody = true;
		this.missiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.missiles.createMultiple(15, 'missile');
		this.missiles.setAll('anchor.x', 1);
		this.missiles.setAll('anchor.y', 0.5);
		this.missiles.setAll('outOfBoundsKill', true);
		this.missiles.setAll('checkWorldBounds', true);
		
		this.bullets = this.add.group();
		this.bullets.enableBody = true;
		this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
		this.bullets.createMultiple(30, 'bullet');
		this.bullets.setAll('anchor.x', 0);
		this.bullets.setAll('anchor.y', 0.5);
		this.bullets.setAll('outOfBoundsKill', true);
		this.bullets.setAll('checkWorldBounds', true);
		
		this.player = this.add.sprite(30, this.world.centerY, 'player');
		this.player.anchor.setTo(0.5);
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		
		this.enemies = this.add.group();
		this.enemies.enableBody = true;
		this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
		
		this.bonus = this.add.group();
		this.bonus.enableBody = true;
		this.bonus.physicsBodyType = Phaser.Physics.ARCADE;
		
		this.explosions = this.add.group();
		this.explosions.createMultiple(15, 'kaboom');
		this.explosions.forEach(this.setUpObjects, this);
		
		this.scoreText = this.add.sprite(10, 10, 'score');
		this.scoreString = this.add.bitmapText(this.scoreText.x + this.scoreText.width, 10, 'numbers', '0', 12);
		
		this.lives = this.add.group();
		this.add.sprite(this.world.width - 70, 10, 'lives').anchor.setTo(1, 0);
		
		for (var i = 0; i < 3; i++) {
			var ship = this.lives.create(this.world.width - 70 + (20 * i), 10, 'player');
		}
		
		this.start = this.add.sprite(this.world.centerX, this.world.centerY - 20, 'start');
		this.start.anchor.setTo(0.5);
		
		this.keys = this.add.sprite(this.world.centerX, this.world.centerY + 20, 'keys');
		this.keys.anchor.setTo(0.5);
		
		this.press = this.add.sprite(this.world.centerX, this.world.height - 30, 'press');
		this.press.anchor.setTo(0.5);
		
		this.gameover = this.add.sprite(this.world.centerX, this.world.centerY - 20, 'gameover');
		this.gameover.anchor.setTo(0.5);
		this.gameover.visible = false;
		
		this.enemyTime = this.time.now + 2000;
		
		this.explode = this.add.audio('explode');
		this.shoot = this.add.audio('shoot');
		this.begin = this.add.audio('begin');
		this.end = this.add.audio('end');
		this.begin.play();
		
		this.music = this.add.audio('music');
		
		this.cursors = this.input.keyboard.createCursorKeys();
		this.fireButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		this.space.tilePosition.x -= 1;
		
		if (!this.isgameover) {
			if (!this.playing && this.fireButton.isDown) {
				this.playing = true;
				this.start.visible = false;
				this.keys.visible = false;
				this.press.visible = false;
				this.music.play('', 0, 0.4, true);
			}
			
			if (this.playing) {
				this.movePlayer();
				
				this.spawnEnemies();
				
				this.enemyShoots();
				
				if (this.player.alive && livingEnemies.length > 0) {
					this.fireMissile();
				}
			
				this.physics.arcade.overlap(this.enemies, this.missiles, this.enemyHit, null, this);
				this.physics.arcade.overlap(this.player, this.bullets, this.playerHitByBullet, null, this);
				this.physics.arcade.overlap(this.player, this.enemies, this.playerHitByEnemy, null, this);
			}
		} else {
			if (this.fireButton.isDown) {
				this.state.start('Play');
			}
		}
	},
	spawnEnemies: function() {
		if (this.time.now > this.enemyTime) {
			this.enemyTime = this.time.now + 700;
			var theta;
			
			var enemy = this.enemies.create(this.world.width, Game.random(this.world.height - 50) + 25, 'enemy');
			
			if (enemy.y < 160) {
				theta = 1;
			} else {
				theta = -1;
			}
			this.physics.arcade.enable(enemy);
			
			enemy.checkWorldBounds = true;
			enemy.outOfBoundsKill = true;
			enemy.frame = Game.random(3);
		
			enemy.anchor.setTo(0.5);
			enemy.scale.setTo(1);
			enemy.body.velocity.x = (Game.random(3) + 1) * (-50);
			enemy.body.velocity.y = (Game.random(3) + 1) * (300) * theta * (Math.PI / 180);
		}
	},
	setUpObjects: function(object) {
		object.animations.add('kaboom');
	},
	movePlayer: function() {
		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;
			
		if (this.cursors.up.isDown && this.player.body.y > 35) {
			this.player.body.velocity.y = -100;
		} else if (this.cursors.down.isDown) {
			this.player.body.velocity.y = 100;
		}
	},
	fireMissile: function() {
		if (this.time.now > this.missileTime) {
			var missile = this.missiles.getFirstExists(false);
			
			if (missile) {
				this.shoot.play();
				missile.reset(this.player.x + 10, this.player.y + 1);
				missile.body.velocity.x = 400;
				this.missileTime = this.time.now + 500;
			}
		}
	},
	enemyHit: function(enemy, missile) {
		missile.kill();
		enemy.kill();
		
		this.addScore();
		
		this.objectExplode(enemy);
	},
	playerHitByEnemy: function(player, enemy) {
		enemy.kill();
		
		this.addScore();
	
		this.checkPlayerLives(player);
	
		this.objectExplode(player);
		this.objectExplode(enemy);
	},
	playerHitByBullet: function(player, bullet) {
		bullet.kill();
		
		this.checkPlayerLives(player);
		
		this.objectExplode(player);
	},
	objectExplode: function(object) {
		var explosion = this.explosions.getFirstExists(false);
		explosion.reset(object.body.x, object.body.y);
		explosion.play('kaboom', 20, false, true);
		this.explode.play();
	},
	checkPlayerLives: function(player) {
		var live = this.lives.getFirstAlive();
		
		if (live) {
			live.kill();
		}
		
		if (this.lives.countLiving() < 1) {
			player.kill();
			this.gameover.visible = true;
			this.press.visible = true;
			this.music.stop();
			this.end.play();
			this.isgameover = true;
			this.playing = false;
		}
	},
	addScore: function() {
		Game.score += 100;
		this.scoreString.text = Game.score.toString();
	},
	enemyShoots: function() {
		if (this.time.now > this.shootingTimer) {
			var bullet = this.bullets.getFirstExists(false);
			
			livingEnemies.length = 0;
			
			this.enemies.forEachAlive(function(enemy) {
				livingEnemies.push(enemy);
			});
			
			if (bullet && livingEnemies.length > 0) {
				var random = this.rnd.integerInRange(0, livingEnemies.length - 1);
				
				var shooter = livingEnemies[random];
				bullet.reset(shooter.body.x + 5, shooter.body.y + 5);
				this.physics.arcade.moveToObject(bullet, this.player, 120);
				bullet.body.velocity.x = -300;
				this.shootingTimer = this.time.now + 500;
			}
		}
	},
};