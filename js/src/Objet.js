class Objet extends Element {
    
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
        this.isTaken = false;
    }
    isTaken(){
        this.isTaken = true;
    }
    deplacer(x, y){
        this.sprite.x = x;
        this.sprite.x = y;
    }
}

class Piece extends Objet{
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, data, autodisplay);
    }
}

class Armes extends Objet{
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, data, autodisplay);
        this.isUsed = false;
        
    }
    broken(){
        this.isUsed = true;
        Element.prototype.destroy.call(this);
    }  
}

class BrasRobot extends Armes{
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, data, autodisplay);
        this.damaged = 1;
    }   
}
