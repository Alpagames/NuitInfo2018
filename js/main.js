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
    this.load.image('background', 'assets/images/texture_sol_mars.png');
    this.load.image('roche1', 'assets/images/roche1.png');
    this.load.image('roche2', 'assets/images/roche2.png');
    this.load.image('roche3', 'assets/images/roche3.png');
    this.load.image('cratere', 'assets/images/cratere.png');
    this.load.spritesheet('papalpaga', 'assets/images/papalpaga_spritesheet.png', {
        frameWidth: 512,
        frameHeight: 1024
    });
}

function create () {
    let zdj = new Terrain();
    let bg = this.add.image(0, 0, 'background');
    bg.setScale(2);
    
    //Création de papalpaga et positionnement
    let arr = doubleIndexOf(zdj.terrain, VAISSEAU);
    let x = 100*arr[0];
    let y = 100*(arr[1]-1);
    let papalpaga = new Papalpaga(this, x, y);
    papalpaga.sprite.setScale(0.2);
    
    //Positionnement des obstacles
    for(let ligne = 0; ligne < 10; ligne++)
        for (let col = 0; col < 10; col++)
            if (zdj.terrain[ligne][col] === OBSTACLE) {
                var c = zdj.terrain[ligne][col];
                switch(alea(1,2)) {
                    case 1 : c = new Roche(this, ligne*100, col*100);
                        break;
                    case 2 : c = new Cratere(this, ligne*100, col*100);
                        break;
                }
                c.sprite.setScale(0.2);
            }
    
    //Positionnement du vaisseau
}

function update () {
}