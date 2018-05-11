var Field = (function () {
    function Field() {
        this.FIELD_WIDTH = 12;
        this.FIELD_HEIGHT = 25;
        this.elField = document.getElementById("field");
        this.data = [];
        for (var x = 0; x < this.FIELD_WIDTH; x++) {
            var fieldCol = [];
            for (var y = 0; y < this.FIELD_HEIGHT; y++) {
                fieldCol.push((x == 0) || (x == this.FIELD_WIDTH - 1) || (y == this.FIELD_HEIGHT - 1));
            }
            this.data.push(fieldCol);
        }
    }
    Field.prototype.draw = function () {
        var html = "";
        for (var y = 0; y < this.FIELD_HEIGHT; y++) {
            for (var x = 0; x < this.FIELD_WIDTH; x++) {
                html += this.data[x][y] ? "*" : " ";
            }
            html += "<br>";
        }
        this.elField.innerHTML = html;
    };
    return Field;
}());
var field = new Field();
field.draw();
