const FIELD_WIDTH = 12;
const FIELD_HEIGHT = 25;

function initField(): boolean [][] {
    let field: boolean[][] = [];
    for (let x = 0; x < FIELD_WIDTH; x++) {
        let fieldCol: boolean[] = [];
        for (let y = 0; y < FIELD_HEIGHT; y++){
            fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
        }
        field.push(fieldCol);
    }
    return field;
}
function drawField(element: HTMLElement, field: boolean[][]){
    let html: string = '';
    for (let y = 0; y < FIELD_HEIGHT; y++){
        for (let x = 0; x < FIELD_WIDTH; x++){
            html += field[x][y]? "*":" ";
        }
        html += "<br>";
    }
    element.innerHTML = html;
}
let field: boolean[][] = initField();
let element = document.getElementById("field");
let figType: number = -1;
let figX: number;
let figY: number;

class Figure  {
    field: boolean[][];
    figX: number;
    figY: number;
    drawOrClear: boolean;
    //setPos = FIELD_WIDTH/2 -2;

    constructor(field: boolean[][],  figX: number, figY: number, drawOrClear: boolean ){
        field = this.field;
        figX = this.figX;
        figY = this.figY;
        drawOrClear = this.drawOrClear;
    }
    public moveRight(field: boolean[][], figX: number, figY: number){
        return field[figX + 1][figY];
    }
    public moveLeft(field: boolean[][], figX: number, figY: number){
        return field[figX - 1][figY];
    }
    public moveFigure(event: KeyboardEvent){
        switch(event.keyCode){
            case 39: { // right
                this.moveRight(field, figX, figY);
                break;
            }
            case 37: { // left
                this.moveLeft(field, figX, figY);
                break;
            }
        }
    }
}

class Squre extends Figure{
    constructor(field: boolean[][],  figX: number, figY: number, drawOrClear: boolean ){
        super(field, figX, figY, drawOrClear );

        field [figX][figY] = drawOrClear;
        field [figX + 1][figY] = drawOrClear;
        field [figX][figY + 1] = drawOrClear;
        field [figX + 1][figY + 1] = drawOrClear;
    }
}

class Streight extends Figure {
    constructor(field: boolean[][],  figX: number, figY: number, drawOrClear: boolean ) {
        super(field, figX, figY, drawOrClear);

        field[figX][figY] = drawOrClear;
        field[figX + 1][figY] = drawOrClear;
        field[figX + 2][figY] = drawOrClear;
        field[figX + 3][figY] = drawOrClear;
    }
}

class ZFigure extends Figure {
    constructor(field: boolean[][],  figX: number, figY: number, drawOrClear: boolean ) {
        super(field, figX, figY, drawOrClear);

        field [figX][figY] = drawOrClear;
        field [figX + 1][figY] = drawOrClear;
        field [figX + 1][figY + 1] = drawOrClear;
        field [figX + 2][figY + 1] = drawOrClear;
    }
}

class LFigure extends Figure {
    constructor(field: boolean[][],  figX: number, figY: number, drawOrClear: boolean ) {
        super(field, figX, figY, drawOrClear);

        field[figX][figY] = drawOrClear;
        field[figX + 1][figY] = drawOrClear;
        field[figX + 2][figY] = drawOrClear;
        field[figX + 2][figY + 1] = drawOrClear;
    }
}

function applyFigure(field: boolean[][], figType: number, figX: number, figY: number, drawOrClear: boolean){
    switch (figType) {
        case 0: { //Квадрат
            let squre:Squre = new Squre(field, figX, figY, drawOrClear);
            break;
        }
        case 1: { //Вертикаль
            let streight:Streight = new Streight(field, figX, figY, drawOrClear);
            break;
        }
        case 2: { //Зигзаг
            let zFigure:ZFigure = new ZFigure(field, figX, figY, drawOrClear);
            break;
        }
        case 3: { // L
            let lFigure:LFigure = new LFigure(field, figX, figY, drawOrClear);
            break;
        }
        default: {
            return -1;
        }
    }
}

function isFigureDown (field: boolean[][], figType: number, figX: number, figY: number): boolean{
    switch(figType){
        case 0: {
            return field[figX][figY + 2] || field[figX + 1][figY + 2];
        }
        case 1: {
            return field[figX][figY + 1];
        }
        case 2: {
            return field[figX][figY + 1] || field[figX + 1][figY + 2];
        }
        case 3: {
            return field[figX][figY + 1] || field[figX + 2][figY + 2];
        }
        default: {
            throw "Error figure number";
        }
    }
}
function onInterval(){
    if (figType == -1){
        figType = Math.floor(Math.random() * 4);
        figX = FIELD_WIDTH/2 -2;
        figY = 1;
        applyFigure(field, figType, figX, figY, true);
    } else {
        applyFigure(field, figType, figX, figY, false);
        figY ++;
        applyFigure(field, figType, figX, figY, true);

        if (isFigureDown(field, figType, figX, figY)) {
            figType = -1;
        } else {
            // TODO:
        }
    }
    drawField(element, field);
}

setInterval(function(){ onInterval() }, 1000);


document.addEventListener("keydown", Figure.moveFigure(event));