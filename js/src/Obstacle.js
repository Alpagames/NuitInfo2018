class Obstacle {
    
    constructor(game, x, y, keySprite, autodisplay = true) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.keySprite;
        
        if (autodisplay = true) {
            this.display();
        }
    }
    
    display() {
        this.game.add.sprite(this.x, this.y, this.keySprite);
    }
    
}

class Roche extends Obstacle {
    
    constructor(game, x, y, autodisplay = true) {
        super(game, x, y, 'roche', autodisplay);
    }
    
}

class Cratere extends Obstacle {
    
    constructor(game, x, y ,autodisplay = true) {
        super(game, x, y, 'cratere', autodisplay);
    }
        
}