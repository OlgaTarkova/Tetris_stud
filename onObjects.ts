const FIELD_WIDTH = 12;
const FIELD_HEIGHT = 25;



class Field{

    data: boolean[][];
    figX: number;
    figY: number;
    elField:HTMLElement = document.getElementById("field");

    constructor() {
        this.data = [];
        for(let x = 0; x < FIELD_WIDTH; x++) {
            let fieldCol : boolean[] = [];
            for(let y = 0; y < FIELD_HEIGHT; y++) {
                fieldCol.push((x == 0) || (x == FIELD_WIDTH - 1) || (y == FIELD_HEIGHT - 1));
            }
            this.data.push(fieldCol);
        }
        return this;
    }

    public drawField() {
        let html: string = "";
        for(let y = 0; y < FIELD_HEIGHT; y++){
            for(let x = 0; x < FIELD_WIDTH; x++){
                html += this.data[x][y]? "*" : " ";
            }
            html+= "<br>";
        }
        this.elField.innerHTML = html;
    }
}
let field:Field = new Field();
field.drawField();
