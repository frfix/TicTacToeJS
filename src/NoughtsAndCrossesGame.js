"use strict";
import { Board } from "./Board.js";
import { Ai } from "./Ai.js";

//Основной класс игры

export class NoughtsAndCrossesGame {
    constructor(props) {
        this.statesEnum = { playing: "playing", gameover: "gameover" };
        this.state = this.statesEnum.playing;
        this.board = new Board({ game: this });
        this.ai = new Ai({ board: this.board });
        this.playerFigure = props.playerFigure;
        this.aiFigure = props.playerFigure === "x" ? "o" : "x";
        this.aiScore = 0;
        this.drawScore = 0;
        this.playerScore = 0;
        this.turnOwner = props.turnOwner;
        this.history = [];
    }

    init() {
        this.board.init();
        if (this.turnOwner === "ai") {
            this.handleAiTurn();
        }
    }

    handleAiTurn() {
        if (this.turnOwner === "ai" && this.state !== this.statesEnum.gameover) {
            setTimeout(() => {
                this.ai.makeTurn(this.aiFigure);
                this.turnOwner = "player";
            }, 100);
        }
    }

    hanlePlayerTurn(cell) {
        if (cell.figure === "" && this.turnOwner === "player") {
            cell.placeFigure(this.playerFigure);
            this.board.turnCounter++;
            this.board.checkWinner(cell);
            if (this.state !== this.statesEnum.gameover) {
                this.turnOwner = "ai";
                this.handleAiTurn();
            }

        }
    }

    newRound(props) {
        this.board.container.remove();
        this.board = new Board({ game: this });
        this.state = this.statesEnum.playing;
        this.ai = new Ai({ board: this.board })
        this.playerFigure = props.playerFigure;
        this.aiFigure = props.playerFigure === "x" ? "o" : "x";
        this.turnOwner = props.turnOwner;

        this.init();
    }

    handleVictory(winFigure) {
        if (this.state === this.statesEnum.playing) {
            this.state = this.statesEnum.gameover;
            this.turnOwner = "";
            let winner = "";
            if (winFigure === "draw") {
                winner = "draw"
            }
            else {
                winner = winFigure === this.playerFigure ? "player" : "ai";
            }

            if (winner === "player") {
                this.playerScore++;
                this.history.push("Игрок одолел Компьютер");
            }
            else if (winner === "ai") {
                this.aiScore++;
                this.history.push("Компьютер одолел игрока");
            }
            else {
                this.drawScore++;
                this.history.push("Ничья")
            }
            this.showVictoryScreen(winner);

        }
    }

    showVictoryScreen(winner) {
        let victoryScreen = document.createElement("div")
        victoryScreen.id = "victoryScreen";
        victoryScreen.innerHTML = `<p class = "result">${winner === "draw" ? "Ничья" : winner === "player" ? "Победа Игрока" : "Победа Компьютера"}</p>
                                    <p>Игрок: ${this.playerScore}</p>
                                    <p>Компьютер: ${this.aiScore}</p>
                                    <p>Ничьих: ${this.drawScore}</p>
                                    <label>Выбор очередности: </label>
                            <input type="radio" name="turnNewRound" value="first" checked>
                            <label>1-ый</label>
                            <input type="radio" name="turnNewRound" value="second">
                            <label>2-ой</label><br>
                            <label>Выбор знака: </label>
                            <input type="radio" name="figureNewRound" value="x" checked>
                            <label>X</label>
                            <input type="radio" name="figureNewRound" value="o">
                            <label>O</label>
                            <button class = "newGameButton" onclick="startNewRound()">Новый раунд</button>
                            <p>История раундов:</p>
                            <ol>
                            ${this.history.map((elmt) => `
                            <li>${elmt}</li>
                          `).join('')}
                          </ol>`;
        setTimeout(function () {
            this.board.container.appendChild(victoryScreen);
            this.board.hideCells()
        }.bind(this), 600);
    }

}