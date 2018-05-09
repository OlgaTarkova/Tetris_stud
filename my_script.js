var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FIELD_WIDTH = 12;
var FIELD_HEIGHT = 25;
function initField() {
    var field = [];
    for (var x = 0; x < FIELD_WIDTH; x++) {
        var fieldCol = [];
        for (var y = 0; y < FIELD_HEIGHT; y++) {
            fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
        }
        field.push(fieldCol);
    }
    return field;
}
function drawField(element, field) {
    var html = '';
    for (var y = 0; y < FIELD_HEIGHT; y++) {
        for (var x = 0; x < FIELD_WIDTH; x++) {
            html += field[x][y] ? "*" : " ";
        }
        html += "<br>";
    }
    element.innerHTML = html;
}
var field = initField();
var element = document.getElementById("field");
var figType = -1;
var figX;
var figY;
var Figure = (function () {
    function Figure(field, figX, figY, drawOrClear) {
        this.setPos = FIELD_WIDTH / 2 - 2;
        field = this.field;
        figX = this.figX;
        figY = this.figY;
        drawOrClear = this.drawOrClear;
    }
    Figure.prototype.moveFigure = function (event) {
        switch (event.keyCode) {
            case 39: {
                this.moveRight(field, figX, figY);
                break;
            }
            case 37: {
                this.moveLeft(field, figType, figX, figY);
                break;
            }
        }
    };
    Figure.prototype.moveRight = function (field, figX, figY) {
        return field[figX + 1][figY];
    };
    Figure.prototype.moveLeft = function (field, figType, figX, figY) {
        return field[figX - 1][figY];
    };
    return Figure;
}());
var Squre = (function (_super) {
    __extends(Squre, _super);
    function Squre(field, figX, figY, drawOrClear) {
        var _this = _super.call(this, field, figX, figY, drawOrClear) || this;
        field[figX][figY] = _this.drawOrClear;
        field[figX + 1][figY] = _this.drawOrClear;
        field[figX][figY + 1] = _this.drawOrClear;
        field[figX + 1][figY + 1] = _this.drawOrClear;
        return _this;
    }
    return Squre;
}(Figure));
var Streight = (function (_super) {
    __extends(Streight, _super);
    function Streight(field, figX, figY, drawOrClear) {
        var _this = _super.call(this, field, figX, figY, drawOrClear) || this;
        field[figX][figY] = drawOrClear;
        field[figX + 1][figY] = drawOrClear;
        field[figX + 2][figY] = drawOrClear;
        field[figX + 3][figY] = drawOrClear;
        return _this;
    }
    return Streight;
}(Figure));
var ZFigure = (function (_super) {
    __extends(ZFigure, _super);
    function ZFigure(field, figX, figY, drawOrClear) {
        var _this = _super.call(this, field, figX, figY, drawOrClear) || this;
        field[figX][figY] = drawOrClear;
        field[figX + 1][figY] = drawOrClear;
        field[figX + 1][figY + 1] = drawOrClear;
        field[figX + 2][figY + 1] = drawOrClear;
        return _this;
    }
    return ZFigure;
}(Figure));
var LFigure = (function (_super) {
    __extends(LFigure, _super);
    function LFigure(field, figX, figY, drawOrClear) {
        var _this = _super.call(this, field, figX, figY, drawOrClear) || this;
        field[figX][figY] = drawOrClear;
        field[figX + 1][figY] = drawOrClear;
        field[figX + 2][figY] = drawOrClear;
        field[figX + 2][figY + 1] = drawOrClear;
        return _this;
    }
    return LFigure;
}(Figure));
function applyFigure(field, figType, figX, figY, drawOrClear) {
    switch (figType) {
        case 0: {
            var squre = new Squre(field, figX, figY, drawOrClear);
            break;
        }
        case 1: {
            var streight = new Streight(field, figX, figY, drawOrClear);
            break;
        }
        case 2: {
            var zFigure = new ZFigure(field, figX, figY, drawOrClear);
            break;
        }
        case 3: {
            var lFigure = new LFigure(field, figX, figY, drawOrClear);
            break;
        }
        default: {
            return -1;
        }
    }
}
function isFigureDown(field, figType, figX, figY) {
    switch (figType) {
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
function onInterval() {
    if (figType == -1) {
        figType = Math.floor(Math.random() * 4);
        figX = FIELD_WIDTH / 2 - 2;
        figY = 1;
        applyFigure(field, figType, figX, figY, true);
    }
    else {
        applyFigure(field, figType, figX, figY, false);
        figY++;
        applyFigure(field, figType, figX, figY, true);
        if (isFigureDown(field, figType, figX, figY)) {
            figType = -1;
        }
        else {
            // TODO:
        }
    }
    drawField(element, field);
}
setInterval(function () { onInterval(); }, 1000);
document.addEventListener("keydown", moveFigure);
