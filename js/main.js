/**
 * Index of Multidimensional Array
 * @param arr {!Array} - the input array
 * @param k {object} - the value to search
 * @return {Array} 
 */
function doubleIndexOf(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
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
    this.load.spritesheet('papalpaga', 'assets/images/papalpaga_spritesheet.png', {
        frameWidth: 512,
        frameHeight: 1024
    });
}

function create () {
    let zdj = new Terrain();
    this.add.image(0, 0, 'background');
    
    //Création de papalpaga et positionnement
    let arr = doubleIndexOf(zdj.terrain, VAISSEAU);
    let x = 100*arr[0];
    let y = 100*(arr[1]-1);
    let papalpaga = new Papalpaga(this, x, y);
    papalpaga.sprite.setScale(0.2);
    
    //Positionnement des obstacles
    
}

function update () {
}