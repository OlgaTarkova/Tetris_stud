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
var Field = (function () {
    function Field() {
        this.fieldWidth = 12;
        this.fieldHeight = 25;
        this.elField = document.getElementById("field");
        this.data = [];
        for (var x = 0; x < this.fieldWidth; x++) {
            var fieldCol = [];
            for (var y = 0; y < this.fieldHeight; y++) {
                fieldCol.push((x == 0) || (x == this.fieldWidth - 1) || (y == this.fieldHeight - 1));
            }
            this.data.push(fieldCol);
        }
    }
    Field.prototype.draw = function () {
        var html = "";
        for (var y = 0; y < this.fieldHeight; y++) {
            for (var x = 0; x < this.fieldWidth; x++) {
                html += this.data[x][y] ? "*" : " ";
            }
            html += "<br>";
        }
        this.elField.innerHTML = html;
    };
    return Field;
}());
var Figure = (function () {
    function Figure() {
    }
    return Figure;
}());
var FigureSquare = (function (_super) {
    __extends(FigureSquare, _super);
    function FigureSquare() {
        var _this = _super.call(this) || this;
        _this.field[_this.figX][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX][_this.figY + 1] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY + 1] = _this.drawOrClear;
        return _this;
    }
    return FigureSquare;
}(Figure));
var FigureHorizontal = (function (_super) {
    __extends(FigureHorizontal, _super);
    function FigureHorizontal() {
        var _this = _super.call(this) || this;
        _this.field[_this.figX][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 2][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 3][_this.figY] = _this.drawOrClear;
        return _this;
    }
    return FigureHorizontal;
}(Figure));
var FigureZ = (function (_super) {
    __extends(FigureZ, _super);
    function FigureZ() {
        var _this = _super.call(this) || this;
        _this.field[_this.figX][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY + 1] = _this.drawOrClear;
        _this.field[_this.figX + 2][_this.figY + 1] = _this.drawOrClear;
        return _this;
    }
    return FigureZ;
}(Figure));
var FigureL = (function (_super) {
    __extends(FigureL, _super);
    function FigureL() {
        var _this = _super.call(this) || this;
        _this.field[_this.figX][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 1][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 2][_this.figY] = _this.drawOrClear;
        _this.field[_this.figX + 2][_this.figY + 1] = _this.drawOrClear;
        return _this;
    }
    return FigureL;
}(Figure));
var Game = (function () {
    function Game() {
        this.field = new Field();
        //this.currentFigure = this.newFigure();
    }
    Game.prototype.draw = function () {
        this.field.draw();
        this.currentFigure = this.newFigure();
    };
    Game.prototype.newFigure = function () {
        var randomFigure = Math.floor(Math.random() * 4);
        var newFigure;
        this.newFigure.figX = this.field.fieldWidth / 2 - 2;
        //this.newFigure.figY = 1;
        switch (randomFigure) {
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
    };
    return Game;
}());
var game = new Game();
game.draw();
