//Класс ячейки игроового поля.
export class Cell {
    constructor(props) {
        this.figure = "";
        this.container = null;
        this.x = props.x;
        this.y = props.y;
        this.game = props.game;
    }

    insertCellToDOM() {
        this.container = document.createElement("div");
        this.container.className = "cell";
        document.getElementById("board").appendChild(this.container);
        this.container.onclick = this.handleClick.bind(this);
    }

    placeFigure(figure) {
        this.figure = figure;
        if (this.figure == "x") {
            this.container.className+=" cross"
        }
        else {
            this.container.className+=" circle";
        }
    }

    handleClick() {
        this.game.hanlePlayerTurn(this);
    }
}