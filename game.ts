/*class Game {
    readonly FIELD_WIDTH: number = 12;
    readonly FIELD_HEIGHT: number = 20;
    readonly LEFT: number = 37;
    readonly RIGHT: number = 39;
    readonly UP: number = 38; // for rotate
    readonly DOWN: number = 40; // for drop
    readonly SHAPES: number [][][] = [
        [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], // Horizontal
        [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], //Square
        [[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], // L
        [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]] // Z
    ];

    //protected elField: HTMLElement;
    //protected data: boolean[][];
    protected field: Field;
    constructor(){
        let field:Field = new Field();
    }
    class Field {
        protected data: boolean[][];
        protected elField: HTMLElement;
        protected game: Game;
        constructor() {
            this.elField = document.getElementById("field");

            this.data = [];
            for (let x = 0; x < this.game.FIELD_WIDTH; x++) {
                let fieldCol : boolean[] = [];
                for(let y = 0; y < this.game.FIELD_HEIGHT; y++) {
                    fieldCol.push((x == 0) || (x == this.game.FIELD_WIDTH - 1) || (y == this.game.FIELD_HEIGHT - 1));
                }
                this.data.push(fieldCol);
            }
        }
    }




}

let game:Game = new Game();
*/