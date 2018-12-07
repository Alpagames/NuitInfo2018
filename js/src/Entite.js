class Entite extends Element {
    
    constructor(game, x, y, keySprite, data = {}, autodisplay = true) {
        super(game, x, y, keySprite, autodisplay);
        
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
    
}

class Ennemi {
    
    constructor(game, x, y, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
        
        this.life = 1;
        this.attack = 1;
    }
    
}

class Pinata {
    
    constructor(game, x, y, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
        
        this.life = 1;
        this.attack = 0;
    }
    
}

class Papalpaga {
    
    constructor(game, x, y, data = {}, autodisplay = true) {
        super(game, x, y, 'ennemi', data, autodisplay);
        
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