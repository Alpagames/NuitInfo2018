class Entite extends Element {
    
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
        
        
        this.life = data.life;
    }
    
}

class Ennemi {
    
    constructor(game, x, y, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
    }
    
}

class Pinata {
    
}

class Objet