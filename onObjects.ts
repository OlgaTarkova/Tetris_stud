class Field {
    readonly fieldWidth = 12;
    readonly fieldHeight = 25;
    protected data: boolean[][];
    protected elField: HTMLElement;

    constructor() {
        this.elField = document.getElementById("field");
        this.data = [];
        for (let x = 0; x < this.fieldWidth; x++) {
            let fieldCol : boolean[] = [];
            for(let y = 0; y < this.fieldHeight; y++) {
                fieldCol.push((x == 0) || (x == this.fieldWidth - 1) || (y == this.fieldHeight - 1));
            }
            this.data.push(fieldCol);
        }
    }

    public draw() {
        let html: string = "";
        for (let y = 0; y < this.fieldHeight; y++) {
            for(let x = 0; x < this.fieldWidth; x++) {
                html += this.data[x][y]? "*" : " ";
            }
            html+= "<br>";
        }
        this.elField.innerHTML = html;
    }

}

class Figure {
    protected figX: number;
    protected figY: number;
    protected field: Field;
    protected drawOrClear: boolean;
    setPosition: number;
    protected figType : number;

    constructor(){}

}
class FigureSquare extends Figure {
    constructor(){
        super();
        this.field[this.figX][this.figY] = this.drawOrClear;
        this.field[this.figX + 1][this.figY] = this.drawOrClear;
        this.field[this.figX][this.figY + 1] = this.drawOrClear;
        this.field[this.figX + 1][this.figY + 1] = this.drawOrClear;

    }
}
class FigureHorizontal extends Figure {
    constructor() {
        super();
        this.field[this.figX][this.figY] = this.drawOrClear;
        this.field[this.figX + 1][this.figY] = this.drawOrClear;
        this.field[this.figX + 2][this.figY] = this.drawOrClear;
        this.field[this.figX + 3][this.figY] = this.drawOrClear;
    }
}
class FigureZ extends Figure {
    constructor(){
        super();
        this.field[this.figX][this.figY] = this.drawOrClear;
        this.field[this.figX + 1][this.figY] = this.drawOrClear;
        this.field[this.figX + 1][this.figY + 1] = this.drawOrClear;
        this.field[this.figX + 2][this.figY + 1] = this.drawOrClear;
    }
}
class FigureL extends Figure {
    constructor(){
        super();
        this.field[this.figX][this.figY] = this.drawOrClear;
        this.field[this.figX + 1][this.figY] = this.drawOrClear;
        this.field[this.figX + 2][this.figY] = this.drawOrClear;
        this.field[this.figX + 2][this.figY + 1] = this.drawOrClear;
    }
}


class Game {

    private currentFigure: Figure;
    private field: Field;

    constructor(){
        this.field = new Field();
        //this.currentFigure = this.newFigure();
    }

    public draw(){
        this.field.draw();

        this.currentFigure = this.newFigure();
    }

    private newFigure(): Figure{
        let randomFigure = Math.floor(Math.random() * 4);

        let newFigure: Figure;
        this.newFigure.figX = this.field.fieldWidth / 2 - 2;
        //this.newFigure.figY = 1;

        switch(randomFigure) {

            case 0: {
                newFigure = new FigureSquare();
                break;
            }
            case 1: {
                newFigure = new FigureHorizontal();
                break;
            }
            case 2: {
                newFigure = new FigureZ();
                break;
            }
            case 3: {
                newFigure = new FigureL();
            }

        }
        return newFigure;
    }



}

let game: Game = new Game();
game.draw();

