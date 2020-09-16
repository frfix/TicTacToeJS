"use strict";
import NoughtsAndCrossesGame from "./NoughtsAndCrossesGame.js";

var game;
window.startNewGame = () => {
    console.log("1233");
    if(document.getElementById("board")){
        document.getElementById("board").remove();
    }
    let turnOwner = document.querySelector('input[name="turn"]:checked').value==="first" ? "player" : "ai";
    let playerFigure = document.querySelector('input[name="figure"]:checked').value;
    game = new NoughtsAndCrossesGame({turnOwner: turnOwner, playerFigure: playerFigure});
    game.init();
}

window.startNewRound = () =>{
    let turnOwner = document.querySelector('input[name="turnNewRound"]:checked').value==="first" ? "player" : "ai";
    let playerFigure = document.querySelector('input[name="figureNewRound"]:checked').value;
    game.newRound({turnOwner:turnOwner, playerFigure : playerFigure});
}

