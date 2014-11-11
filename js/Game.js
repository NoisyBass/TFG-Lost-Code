var TFG = TFG || {};

TFG.Game = function() {};

var hud    = null;
var player = null;
var level  = null;

TFG.Game.prototype = {

  create: function (){

    // Set background color
    this.game.stage.backgroundColor = '#000';
    
    // Creates player
    player = new Player(this.game);
    player.create(0, 500, 'player',0);

    // Creates the HUD
    hud = new HUD(this.game);
    hud.create();

    // Creates the level
    level = new Level(this.game);
    level.create(player);

    
  },

  update: function (){
    player.update();
    level.update();
  }

}
