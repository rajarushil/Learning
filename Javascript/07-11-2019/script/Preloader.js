Game.Preloader = function(game) {
	this.preloadbar = null;
};

Game.Preloader.prototype = {
	preload: function() {
		this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderFrame').anchor.setTo(0.5);
		this.preloadbar = this.add.sprite(this.world.centerX - 70, this.world.centerY - 10, 'preloaderBar');
		
		this.load.setPreloadSprite(this.preloadbar);
		
		this.load.bitmapFont('numbers', 'font/numbers.png', 'font/numbers.xml');
		
		this.load.image('start', 'image/start.png');
		this.load.image('gameover', 'image/gameover.png');
		this.load.image('space', 'image/space.png');
		this.load.image('player', 'image/player.png');
		this.load.image('missile', 'image/missile.png');
		this.load.image('bullet', 'image/bullet.png');
		this.load.image('score', 'image/score.png');
		this.load.image('lives', 'image/lives.png');
		this.load.image('press', 'image/press.png');
		this.load.image('keys', 'image/keys.png');
		
		this.load.spritesheet('enemy', 'image/enemy.png', 14, 14);
		this.load.spritesheet('kaboom', 'image/kaboom.png', 16, 16);
		
		this.load.audio('music', 'audio/music.wav');
		this.load.audio('shoot', 'audio/shoot.wav');
		this.load.audio('begin', 'audio/begin.wav');
		this.load.audio('end', 'audio/end.wav');
		this.load.audio('explode', 'audio/explode.wav');
	},
	create: function() {
		this.preloadbar.cropEnabled = false;
	},
	update: function() {
		if (this.cache.isSoundDecoded('music')) {
			this.state.start('Play');
		}
	},
};