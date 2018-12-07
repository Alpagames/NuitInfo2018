    var config = {
        type: Phaser.AUTO,
        width: 1400,
        height: 700,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {

    }

    function create ()
    {

    }