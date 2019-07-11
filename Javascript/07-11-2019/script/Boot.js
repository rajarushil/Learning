var Game = {
	score: 0,
	random: function(num) {
		return Math.floor(Math.random() * num);
	},
};

Game.Boot = function(game) {
	
};

Game.Boot.prototype = {
	init: function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	preload: function() {
		this.load.image('preloaderBar', 'image/preloaderbar.png');
		this.load.image('preloaderFrame', 'image/preloaderframe.png');
	},
	create: function() {
		this.state.start('Preloader');
	},
};