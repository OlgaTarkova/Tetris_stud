/*const FIELD_WIDTH = 12;
const FIELD_HEIGHT = 25;

let field = initField();
let elField = document.getElementById ("field");
let figType: number = -1;
let figX: number;
let figY: number;
let drawOrClear: boolean;


function initField(){ //Инициализация массива
    let field : boolean [][] = [];
    for (let x = 0; x < FIELD_WIDTH; x++){
        let fieldCol: boolean [] = [];
        for (let y = 0; y < FIELD_HEIGHT; y++){
            fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
        }
        field.push(fieldCol);
    }
    return field;
}

function drawField(el: HTMLElement){ // Рисуем стакан
    let html: string = "";
    for (let y = 0; y < FIELD_HEIGHT; y++){
        for (let x = 0; x < FIELD_WIDTH; x++){
            html += field[x][y] ? "*" : " ";
        }
        html += "<br>"
    }
    el.innerHTML = html;
}

function applyFigure(drawOrClear: boolean): boolean{
    switch(figType) {
        case 0: { //Квадрат
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX][figY + 1] = drawOrClear;
            field[figX + 1][figY + 1] = drawOrClear;

            break;
        }
        case 1: { //Горизонталь
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 2][figY] = drawOrClear;
            field[figX + 3][figY] = drawOrClear;

            break;
        }
        case 2: { //Зигзаг
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 1][figY + 1] = drawOrClear;
            field[figX + 2][figY + 1] = drawOrClear;

            break;
        }
        case 3: { // L
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 2][figY] = drawOrClear;
            field[figX + 2][figY + 1] = drawOrClear;

            break;
        }
        default: {
            return false;
        }
    }
}

function onInterval(){
    if (figType == -1){
        figType = Math.floor(Math.random() * 4);
        figX = FIELD_WIDTH/2 - 2;
        figY = 1;
        applyFigure(true);
    } else {
        applyFigure(false);
        figY++;
        applyFigure(true);
    }

    drawField(elField);
}

setInterval(function () {onInterval()}, 1000);

*/