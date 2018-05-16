/*class Field {
    readonly WIDTH = 12;
    readonly HEIGHT = 25;
    protected data: boolean[][];
    protected el: HTMLElement;
    protected setPositionX: number;

    constructor() {
        this.el = document.getElementById("field");

        this.data = [];
        for (let x = 0; x < this.WIDTH; x++) {
            let dataColumns: boolean[] = [];
            for (let y = 0; y < this.HEIGHT; y++) {
                dataColumns.push((x == 0) || (x == this.WIDTH - 1) || (y == this.HEIGHT - 1));
            }
            this.data.push(dataColumns);
        }
    }

    public selfDraw() {
        let html: string = "";
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                html += this.data[x][y] ? "*" : " ";
            }
            html += "<br>";
        }
        this.el.innerHTML = html;
    }
    public draw(figure:Figure) {
        this.drawFigure(figure);
    }
    private drawFigure(figure:Figure){
        figure = new Figure();
    }

}

class Figure{
    //protected x: number;
    //protected y: number;
    //protected field: Field;
    //protected drawOrClear: boolean;

    constructor(){}
}
class FigureSquare extends Figure {
    constructor(){
        super();
        this.field[this.x][this.y] = this.drawOrClear;
        this.field[this.x + 1][this.y] = this.drawOrClear;
        this.field[this.x][this.y + 1] = this.drawOrClear;
        this.field[this.x + 1][this.y + 1] = this.drawOrClear;

    }
}
class FigureHorizontal extends Figure {
    constructor() {
        super();
        this.field[this.x][this.y] = this.drawOrClear;
        this.field[this.x + 1][this.y] = this.drawOrClear;
        this.field[this.x + 2][this.y] = this.drawOrClear;
        this.field[this.x + 3][this.y] = this.drawOrClear;
    }
}
class FigureZ extends Figure {
    constructor(){
        super();
        this.field[this.x][this.y] = this.drawOrClear;
        this.field[this.x + 1][this.y] = this.drawOrClear;
        this.field[this.x + 1][this.y + 1] = this.drawOrClear;
        this.field[this.x + 2][this.y + 1] = this.drawOrClear;
    }
}
class FigureL extends Figure {
    constructor(){
        super();
        this.field[this.x][this.y] = this.drawOrClear;
        this.field[this.x + 1][this.y] = this.drawOrClear;
        this.field[this.x + 2][this.y] = this.drawOrClear;
        this.field[this.x + 2][this.y + 1] = this.drawOrClear;
    }
}
let field: Field = new Field();
field.selfDraw();


*/




/*class Figure {
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

class Field {
    readonly fieldWidth = 12;
    readonly fieldHeight = 25;
    protected data: boolean[][];
    protected elField: HTMLElement;
    figure: Figure;

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


class Game {

    private currentFigure: Figure;
    private field: Field;

    constructor(){
        this.field = new Field();
        //this.currentFigure = this.newFigure();
    }

    private newFigure(): Figure{
        let randomFigure = Math.floor(Math.random() * 4);

        let newFigure: Figure;

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

    public draw(){
        this.field.draw();

        //this.currentFigure = this.newFigure();
    }
}

let game: Game = new Game();
game.draw();

*/