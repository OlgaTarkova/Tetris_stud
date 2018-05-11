var FIELD_WIDTH = 12;
var FIELD_HEIGHT = 25;
var Field = (function () {
    function Field() {
        this.elField = document.getElementById("field");
        this.data = [];
        for (var x = 0; x < FIELD_WIDTH; x++) {
            var fieldCol = [];
            for (var y = 0; y < FIELD_HEIGHT; y++) {
                fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
            }
            this.data.push(fieldCol);
        }
        return this;
    }
    Field.prototype.drawField = function () {
        var html = "";
        for (var y = 0; y < FIELD_HEIGHT; y++) {
            for (var x = 0; x < FIELD_WIDTH; x++) {
                html += this.data[x][y] ? "*" : " ";
            }
            html += "<br>";
        }
        this.elField.innerHTML = html;
    };
    return Field;
}());
var field = new Field();
field.drawField();
