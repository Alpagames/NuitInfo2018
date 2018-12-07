class Element {
    
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
        this.sprite = this.game.add.sprite(this.x, this.y, this.keySprite);
    }
    
    destroy() {
        this.sprite.destroy();
        this = null;
    }
    
}