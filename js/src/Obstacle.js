class Obstacle extends Element {
    
    constructor(game, x, y, keySprite, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
    }
    
}

class Roche extends Obstacle {
    
    constructor(game, x, y, autodisplay = true) {
        var n;
        switch (alea(1,4)) {
            case 1: n = 1;
                break;
            case 2: n = 2;
                break;
            case 3: n = 3;
                break;
        }
        super(game, x, y, 'roche'+n, autodisplay);
    }
    
}

class Cratere extends Obstacle {
    
    constructor(game, x, y ,autodisplay = true) {
        super(game, x, y, 'cratere', autodisplay);
    }
        
}