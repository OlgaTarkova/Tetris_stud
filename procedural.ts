const FIELD_WIDTH: number = 12;
const FIELD_HEIGHT: number = 25;
const LEFT: number = 37;
const RIGHT: number = 39;
const UP: number = 38; // for rotate
const DOWN: number = 40; // for drop

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

function isFigureDown():boolean {
    switch(figType){
        case 0: {
            return field[figX][figY + 2] || field[figX + 1][figY + 2]; // O
        }
        case 1: {
            return field[figX][figY + 1]; // I
        }
        case 2: {
            return field[figX][figY + 1] || field[figX + 1][figY + 2]; // Z
        }
        case 3: {
            return field[figX][figY + 1] || field[figX + 2][figY + 2]; // L
        }
        default: {
            throw "Error figure number";
        }
    }
}
function isFigureDrop():boolean {
    switch(figType) {
        case 0: {
            return field[figX + 1][figY + 3]; // O
        }
        case 1: {
            return field[figX][figY + 2] // I
        }
        case 2: {
            return field[figX + 1][figY + 3]; // Z
        }
        case 3: {
            return field[figX + 2][figY + 3]; // L
        }
    }
}


function moveFigure(event: KeyboardEvent) {
    switch(event.keyCode){
        case 39: { // right
            moveRight();
            break;
        }
        case 37: { // left
            moveLeft();
            break;
        }
        case 40: { //drop down
            drop();
            break;
        }
        case 38 : { //rotate figure
            rotate();
            break;
        }
    }
}
function moveRight() {
    if(figX < FIELD_WIDTH -1){
        applyFigure(false);
        figX++;
        applyFigure(true);
    }
}
function moveLeft() {
    if(figX > 1){
        applyFigure(false);
        figX--;
        applyFigure(true);
    }
}

function drop() {
    while(!isFigureDrop()){
        applyFigure(false);
        figY++;
        applyFigure(true);
    }
}
function rotate(){
    //TODO
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

        if(isFigureDown()){
            figType = -1;
        }
    }

    drawField(elField);

}



setInterval(function () {onInterval()}, 1000);

document.addEventListener("keydown",moveFigure);



