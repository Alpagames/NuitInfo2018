var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'assets/images/background.jpg');
    this.load.spritesheet('papalpaga', 'assets/images/papalpaga_sprite.png', {
        frameWidth: 128,
        frameHeight: 128
    });
}

function create () {
    let zdj = new Terrain();
    this.add.image(0, 0, 'background');
    
    
    let papalpaga = new Papalpaga(this, 0, 0);
}

function update () {
}