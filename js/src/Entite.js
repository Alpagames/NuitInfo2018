class Entite extends Element {
    
    constructor(game, x, y,w,h, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
        
        this.frameWidth = w;
        this.frameHeight = h;
        if (data.life != null) {
            this.life = data.life;
        } else {
            this.life = 0;
        }
        
        if (data.attack != null) {
            this.attack = data.attack;
        } else {
            this.attack = 0;
        }
    }
    
    hit() {
        this.life -= 1;
        
        if (this.life <= 0) {
            Element.prototype.destroy.call(this);
        }
    }
    
    display() {
                console.log(this.game);
        this.sprite = this.game.add.sprite(0,0,this.keySprite);

    }
    
}

class Ennemi extends Entite {
    
    constructor(game, x, y,w,h, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
        
        this.life = 1;
        this.attack = 1;
    }
    
}

class Pinata extends Entite {
    
    constructor(game, x, y,w,h, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
        
        this.life = 1;
        this.attack = 0;
    }
    
}

class Papalpaga extends Entite{
    
    constructor(game, x, y,w,h, data = {}, autodisplay = true) {
        super(game, x, y, 'papalpaga', data, autodisplay);
        
        this.life = 1;
        this.attack = 0;
        this.havePiece = false;
    }
    
    prend_objet(objet) {
        if (typeof objet == "Arme") {
            prend_arme(objet);
        } else if (typeof objet == "Piece") {
            this.havePiece = true;
        }
    }
    
    prend_arme(arme) {
        this.arme = arme;
        this.attack += objet.arme;
    }
    
    rencontre(entite) {
        if (typeof entite == "Pinata") {
            this.rencontre_pinata(pinata);
        } else if (typeof entite == "") {
            this.rencontre_ennemi(ennemi);
        }
    }
    
    rencontre_pinata(pinata) {
        
    }
    
    rencontre_ennemi(ennemi) {
        
    }
    
}