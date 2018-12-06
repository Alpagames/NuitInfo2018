/*
const VIDE = 0;
const OBSTACLE = 1;
const ENNEMI = 2;
const ARME = 3;
const PIECE = 4;
const VAISSEAU = 5;
const BATTE = 6;
*/

const VIDE = "     ";
const OBSTACLE = "OBST";
const ENNEMI = "ENNEMI";
const ARME = "ARME";
const PIECE = "PIECE";
const VAISSEAU = "VAISSEAU";
const BATTE = "BATTE";
const PINATA = "PINATA";

function alea(min, max) {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

class Terrain {
    constructor() {
        this.nbObstacles = alea(3, 9);

        //Une chance sur trois d'avoir entre 1 et 3 ennemis
        if (alea(1, 2) === 2)
            this.nbEnnemis = alea(1, 3);
        else
            this.nbEnnemis = 0;

        //Une chance sur cinq d'avoir une arme
        if (alea(4, 5) === 5)
            this.nbArmes = 1;
        else
            this.nbArmes = 0;

        //Une chance sur 10 d'avoir la pinata et la batte
        if (alea(0, 10) === 5)
            this.pinata = true;
        else
            this.pinata = false;

        //Définition du terrain
        this.terrain = new Array();
        for (let i = 0; i < 10; i++) {
            this.terrain[i] = new Array();
        }

        for (let i = 0; i < 10; i++)
            for (let j = 0; j < 10; j++)
                this.terrain[i][j] = VIDE;

        this.generer();
    }

    generer() {

        //On ajoute chaque obstacle
        for (let i = 0; i < this.nbObstacles; i++) {
            var done = false;
            do {
                let x = alea(1, 8);
                let y = alea(1, 8);
                if (this.terrain[x][y] === VIDE) {
                    this.terrain[x][y] = OBSTACLE;
                    done = true;
                }
            } while (!done)
        }

        //On ajoute les ennemis
        if (this.nbEnnemis > 0) {
            var done = false;
            for (let i = 0; i < this.nbEnnemis; i++) {
                do {
                    let x = alea(1, 8);
                    let y = alea(1, 8);
                    if (this.terrain[x][y] === VIDE &&
                        (this.terrain[x - 1][y] === VIDE && this.terrain[x + 1][y] === VIDE && this.terrain[x][y + 1] === VIDE && this.terrain[x][y - 1])) {
                        this.terrain[x][y] = ENNEMI;
                        done = true;
                    }
                } while (!done)
            }
        }

            //On ajoute les armes
        if (this.nbArmes > 0) {
            var done = false;
            for (let i = 0; i < this.nbArmes; i++) {
                do {
                    let x = alea(1, 8);
                    let y = alea(1, 8);
                    if (this.terrain[x][y] === VIDE &&
                        (this.terrain[x - 1][y] === VIDE && this.terrain[x + 1][y] === VIDE && this.terrain[x][y + 1] === VIDE && this.terrain[x][y - 1])) {
                        this.terrain[x][y] = ARME;
                        done = true;
                    }
                } while (!done)
            }
        }
            
         //On ajoute la pinata
        if (this.nbArmes === 0 && this.pinata) {
            var done = false;
            do {
                let x = alea(1, 8);
                let y = alea(1, 8);
                if (this.terrain[x][y] === VIDE &&
                    (this.terrain[x - 1][y] === VIDE && this.terrain[x + 1][y] === VIDE && this.terrain[x][y + 1] === VIDE && this.terrain[x][y - 1])) {
                    this.terrain[x][y] = ARME;
                    done = true;
                }
            } while (!done)
        }

        this.tabToHTML(this.terrain);


    }

    tabToHTML(arr) {
        let body = document.getElementsByTagName('body')[0];
        let tab = document.createElement("table");
        for (let row = 0; row < arr.length; row++) {
            let tr = document.createElement('tr');
            for (let col = 0; col < arr[row].length; col++) {
                let td = document.createElement('td');
                let tn = document.createTextNode(arr[row][col]);
                td.appendChild(tn);
                tr.appendChild(td);
            }
            tab.appendChild(tr);
        }
        body.appendChild(tab);
    }
}

new Terrain();
