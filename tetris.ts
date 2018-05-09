/*const FIELD_WIDTH = 12;
const FIELD_HEIGHT = 25;

type Field = boolean[][];

function initField(): Field {
    let field: boolean[][] = [];
    for (let x=0; x<FIELD_WIDTH; x++) {
        let fieldCol: boolean[] = [];
        for (let y=0; y<FIELD_HEIGHT; y++)
            fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
        field.push(fieldCol);
    }
    return field;
}

function drawField(el: HTMLElement, field: Field, step: number) {
    let html: string = '';
    for (let y=0; y<FIELD_HEIGHT; y++) {
        for (let x=0; x<FIELD_WIDTH; x++)
            html += field[x][y] ? "*" : " ";
        html += "<br/>";
    }
   html += "Step: " + step;
    el.innerHTML = html;
}

function applyFigure(field: Field, figType: number, figX: number, figY: number, drawOrClear: boolean) {
    switch (figType){
        case 0: { // Квадрат
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX][figY + 1] = drawOrClear;
            field[figX + 1][figY + 1] = drawOrClear;

            break;
        }
        case 1: { // Вертикаль
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 2][figY] = drawOrClear;
            field[figX + 3][figY] = drawOrClear;

            break;
        }
        case 2: { // Зигзаг
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 1][figY + 1] = drawOrClear;
            field[figX + 2][figY + 1] = drawOrClear;
            break;
        }
        case 3: { // Г
            field[figX][figY] = drawOrClear;
            field[figX + 1][figY] = drawOrClear;
            field[figX + 2][figY] = drawOrClear;
            field[figX + 2][figY + 1] = drawOrClear;
            break;
        }
        default: {
            return -1;
        }
    }
}
function isFigureDown(field: Field, figType: number, figX: number, figY: number): boolean {
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

let step: number = 0;
let field: Field = initField();
let figType: number = -1;
let figX: number;
let figY: number;
let elField = document.getElementById("field");

function onInterval() {
    if (figType == -1) {
        figType = Math.floor(Math.random() * 4);
        figX = FIELD_WIDTH/2 - 2;
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
    drawField(elField, field, step);
    step++;
}


setInterval(function(){ onInterval() }, 1000);*/


