//Créer la scène
let scene = new Phaser.Scene('Game');

//Charger les assets
scene.preload = function() {
    this.load.image('papalpaga', 'assets/images/papalpaga_sprite.png');
};

scene.create = function() {
    this.add.sprite(0,0,'papalpaga')
}

//Configurer le jeu
let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 700,
    scene: scene
};

//Créer un nouveau jeu en utilisant la config
let game = new Phaser.Game(config);