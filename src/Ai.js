//"ИИ" игры. По сути ставить знак на случайную свободную ячейку
export class Ai {
    constructor(props){
      this.board = props.board;
    }
    randomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    makeTurn(figure) {
        let index1 = 0;
        let index2 = 0;
        for (; ;) {
            index1 = this.randomInteger(0, 2);
            index2 = this.randomInteger(0, 2);
            if (this.board.cells[index1][index2].figure === "") {
                break;
            }
        }
        this.board.cells[index1][index2].placeFigure(figure);
        this.board.turnCounter++;
        this.board.checkWinner(this.board.cells[index1][index2]);
    }
}