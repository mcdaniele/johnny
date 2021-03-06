Game.Menu = function (game) { };

Game.Menu.prototype = {

	create: function() {
		this.cursor = this.game.input.keyboard.createCursorKeys();
		game.stage.backgroundColor = '#000';
		var bgmenu = this.game.add.sprite(42, 0, 'menubg');
		var playbutton = this.game.add.button(300, 200, 'playb', this.startPlay, this);
		playbutton.anchor.setTo(0.5, 0);
		var controllabel = game.add.text(300, 135, 'Touch left half of game screen to move left', { font: '18px Arial', fill: '#000', align: 'left' });
		controllabel.anchor.setTo(0.5, 0.5);
		var controllabel2 = game.add.text(300, 160, 'Right half to move right', { font: '18px Arial', fill: '#000', align: 'left' });
		controllabel2.anchor.setTo(0.5, 0.5);
		var labelscore = game.add.text(80, 50, 'Score: '+score, { font: '18px Arial', fill: '#000', align: 'left' });
		var labelhighscore = game.add.text(80, 80, 'Previous Highscore: '+previoushigh, { font: '18px Arial', fill: '#000', align: 'left' });
//		if (game.device.desktop) {
//			var label = game.add.text(w/2, h-70, '(Or press the up arrow)', { font: '20px Arial', fill: '#000' });
//			label.anchor.setTo(0.5, 0.5);
//		}
		game.add.text(w-150, 50, 'Music', { font: '18px Arial', fill: '#000', align: 'right' });
		this.music_toggle = this.game.add.button(w-103, 50, 'sound', this.toggle_music, this);
		if (musicbool) {
			this.music_toggle.frame = 0;
		}
		else {
			this.music_toggle.frame = 1;
		}
		game.add.text(w-138, 80, 'SFX', { font: '18px Arial', fill: '#000', align: 'right' });
		this.sfx_toggle = this.game.add.button(w-103, 80, 'sound', this.toggle_sfx, this);
		if (sfxbool) {
			this.sfx_toggle.frame = 0;
		}
		else {
			this.sfx_toggle.frame = 1;
		}
		game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
	    game.stage.scale.setScreenSize(true);
	},

	update: function() {
		if (this.cursor.up.isDown) {
	    	game.stage.scale.setScreenSize(true);
			this.game.state.start('Play');	
		}
	},

	startPlay: function() {
		this.game.state.start('Play');
	},
	
	toggle_music: function() {
		if (musicbool) {
			this.music_toggle.frame = 1;
			musicbool = false;
		}
		else {
			this.music_toggle.frame = 0;
			musicbool = true;			
		}
	},

	toggle_sfx: function() {
		if (sfxbool) {
			this.sfx_toggle.frame = 1;
			sfxbool = false;
		}
		else {
			this.sfx_toggle.frame = 0;
			sfxbool = true;			
		}
	},

//	onEnterFullScreen: function() {
//    	button.visible = true;
//	},

//	onLeaveFullScreen: function() {
//    	button.visible = false;
//	},

	gofull: function() {
	    game.scale.startFullScreen();
	},
};
