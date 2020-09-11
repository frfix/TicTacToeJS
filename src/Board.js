"use strict";
import { Cell } from "./Cell.js";

//Класс игрового поля. Содержит массив ячеек поля. Осуществляет проверку победы

export class Board {
    constructor(props) {
        this.cells = null;
        this.turnCounter = 0;
        this.game = props.game;
        this.container = null;
        this.draw = "draw";
    }

    init() {
        this.insertBoardToDOM();
        this.cells = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.cells[i] = new Array(3);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cells[i][j] = new Cell({ board: this, x: i, y: j, game: this.game });
                this.cells[i][j].insertCellToDOM();
            }
        }
    }
    hideCells(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cells[i][j].container.className = "hiddenElement";
            }
        }
    }

    insertBoardToDOM() {
        this.container = document.createElement("div");
        this.container.id = "board";
        document.getElementById("app").appendChild(this.container);
    }

    checkWinner(cell) {
        for (let i = 0; i < 3; i++) {
            if (this.cells[cell.x][i].figure !== cell.figure)
                break;
            if (i == 2) {
                this.game.handleVictory(cell.figure);
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.cells[i][cell.y].figure != cell.figure)
                break;
            if (i == 2) {
                this.game.handleVictory(cell.figure);
            }
        }

        if (cell.x == cell.y) {
            for (let i = 0; i < 3; i++) {
                if (this.cells[i][i].figure != cell.figure)
                    break;
                if (i == 2) {
                    this.game.handleVictory(cell.figure);
                }
            }
        }

        if (cell.x + cell.y == 2) {
            for (let i = 0; i < 3; i++) {
                if (this.cells[i][2 - i].figure != cell.figure)
                    break;
                if (i == 3 - 1) {
                    this.game.handleVictory(cell.figure);
                }
            }
        }
        
            
        if (this.turnCounter === 9) {
            this.game.handleVictory(this.draw);
         } 
    }
}