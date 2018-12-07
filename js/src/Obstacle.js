class Obstacle extends Element {
    
    constructor(game, x, y, keySprite, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
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