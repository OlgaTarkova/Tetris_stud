class Field{
    readonly FIELD_WIDTH = 12;
    readonly FIELD_HEIGHT = 25;
    protected data: boolean[][];
    //protected figX: number;
    //protected figY: number;
    protected elField:HTMLElement;

    constructor() {
        this.elField = document.getElementById("field");
        this.data = [];
        for(let x = 0; x < this.FIELD_WIDTH; x++) {
            let fieldCol : boolean[] = [];
            for(let y = 0; y < this.FIELD_HEIGHT; y++) {
                fieldCol.push((x == 0) || (x == this.FIELD_WIDTH - 1) || (y == this.FIELD_HEIGHT - 1));
            }
            this.data.push(fieldCol);
        }
    }

    public draw() {
        let html: string = "";
        for(let y = 0; y < this.FIELD_HEIGHT; y++){
            for(let x = 0; x < this.FIELD_WIDTH; x++){
                html += this.data[x][y]? "*" : " ";
            }
            html+= "<br>";
        }
        this.elField.innerHTML = html;
    }
}

let field:Field = new Field();
field.draw();
