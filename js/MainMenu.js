var TFG = TFG || {};

TFG.MainMenu = function() {};

  var w;
  var h;

TFG.MainMenu.prototype = {

  preload: function() {
    this.game.load.image('menu', 'assets/img/mainScreen.png');
    this.game.load.image('title', 'assets/img/mainTitle.png');
    this.game.load.image('button_play_img', 'assets/img/button.png');

    this.w = this.game.width;
    this.h = this.game.height;
  },

  create: function() {
    
    // Menu settings...
    // Start game text
    this.game.stage.backgroundColor = '#009DFF';
    var bg = this.game.add.sprite(this.w/2,this.h/2,'menu');
    bg.anchor.setTo(0.5,0.5);

    var title = this.game.add.sprite(this.w/2 - 250,this.h/2-200,'title');

  
    var button_play = this.game.add.button(this.w/2 - 50, this.h/2, 'button_play_img', this.playGame, this);
    console.log(button_play);



    /*
    var text = "Tap to begin";
    var style = { font: "30px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
    */
  },

  update: function() {
    /*
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
    */
  },

  playGame: function() {
    this.game.state.start('Game');
  }

}
