/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ai.js":
/*!*******************!*\
  !*** ./src/Ai.js ***!
  \*******************/
/*! exports provided: Ai */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ai\", function() { return Ai; });\n//\"ИИ\" игры. По сути ставить знак на случайную свободную ячейку\r\nclass Ai {\r\n    constructor(props){\r\n      this.board = props.board;\r\n    }\r\n    randomInteger(min, max) {\r\n        return Math.floor(min + Math.random() * (max + 1 - min));\r\n    }\r\n\r\n    makeTurn(figure) {\r\n        let index1 = 0;\r\n        let index2 = 0;\r\n        for (; ;) {\r\n            index1 = this.randomInteger(0, 2);\r\n            index2 = this.randomInteger(0, 2);\r\n            if (this.board.cells[index1][index2].figure === \"\") {\r\n                break;\r\n            }\r\n        }\r\n        this.board.cells[index1][index2].placeFigure(figure);\r\n        this.board.turnCounter++;\r\n        this.board.checkWinner(this.board.cells[index1][index2]);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Ai.js?");

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.js */ \"./src/Cell.js\");\n\r\n\r\n\r\n//Класс игрового поля. Содержит массив ячеек поля. Осуществляет проверку победы\r\n\r\nclass Board {\r\n    constructor(props) {\r\n        this.cells = null;\r\n        this.turnCounter = 0;\r\n        this.game = props.game;\r\n        this.container = null;\r\n        this.draw = \"draw\";\r\n    }\r\n\r\n    init() {\r\n        this.insertBoardToDOM();\r\n        this.cells = new Array(3);\r\n        for (let i = 0; i < 3; i++) {\r\n            this.cells[i] = new Array(3);\r\n        }\r\n        for (let i = 0; i < 3; i++) {\r\n            for (let j = 0; j < 3; j++) {\r\n                this.cells[i][j] = new _Cell_js__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"]({ board: this, x: i, y: j, game: this.game });\r\n                this.cells[i][j].insertCellToDOM();\r\n            }\r\n        }\r\n    }\r\n    hideCells(){\r\n        for (let i = 0; i < 3; i++) {\r\n            for (let j = 0; j < 3; j++) {\r\n                this.cells[i][j].container.className = \"hiddenElement\";\r\n            }\r\n        }\r\n    }\r\n\r\n    insertBoardToDOM() {\r\n        this.container = document.createElement(\"div\");\r\n        this.container.id = \"board\";\r\n        document.getElementById(\"app\").appendChild(this.container);\r\n    }\r\n\r\n    checkWinner(cell) {\r\n        for (let i = 0; i < 3; i++) {\r\n            if (this.cells[cell.x][i].figure !== cell.figure)\r\n                break;\r\n            if (i == 2) {\r\n                this.game.handleVictory(cell.figure);\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < 3; i++) {\r\n            if (this.cells[i][cell.y].figure != cell.figure)\r\n                break;\r\n            if (i == 2) {\r\n                this.game.handleVictory(cell.figure);\r\n            }\r\n        }\r\n\r\n        if (cell.x == cell.y) {\r\n            for (let i = 0; i < 3; i++) {\r\n                if (this.cells[i][i].figure != cell.figure)\r\n                    break;\r\n                if (i == 2) {\r\n                    this.game.handleVictory(cell.figure);\r\n                }\r\n            }\r\n        }\r\n\r\n        if (cell.x + cell.y == 2) {\r\n            for (let i = 0; i < 3; i++) {\r\n                if (this.cells[i][2 - i].figure != cell.figure)\r\n                    break;\r\n                if (i == 3 - 1) {\r\n                    this.game.handleVictory(cell.figure);\r\n                }\r\n            }\r\n        }\r\n        \r\n            \r\n        if (this.turnCounter === 9) {\r\n            this.game.handleVictory(this.draw);\r\n         } \r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Board.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n//Класс ячейки игроового поля.\r\nclass Cell {\r\n    constructor(props) {\r\n        this.figure = \"\";\r\n        this.container = null;\r\n        this.x = props.x;\r\n        this.y = props.y;\r\n        this.game = props.game;\r\n    }\r\n\r\n    insertCellToDOM() {\r\n        this.container = document.createElement(\"div\");\r\n        this.container.className = \"cell\";\r\n        document.getElementById(\"board\").appendChild(this.container);\r\n        this.container.onclick = this.handleClick.bind(this);\r\n    }\r\n\r\n    placeFigure(figure) {\r\n        this.figure = figure;\r\n        if (this.figure == \"x\") {\r\n            this.container.className+=\" cross\"\r\n        }\r\n        else {\r\n            this.container.className+=\" circle\";\r\n        }\r\n    }\r\n\r\n    handleClick() {\r\n        this.game.hanlePlayerTurn(this);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/NoughtsAndCrossesGame.js":
/*!**************************************!*\
  !*** ./src/NoughtsAndCrossesGame.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoughtsAndCrossesGame; });\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./src/Board.js\");\n/* harmony import */ var _Ai_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ai.js */ \"./src/Ai.js\");\n\r\n\r\n\r\n\r\n//Основной класс игры\r\n\r\nclass NoughtsAndCrossesGame {\r\n    constructor(props) {\r\n        this.statesEnum = { playing: \"playing\", gameover: \"gameover\" };\r\n        this.state = this.statesEnum.playing;\r\n        this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__[\"Board\"]({ game: this });\r\n        this.ai = new _Ai_js__WEBPACK_IMPORTED_MODULE_1__[\"Ai\"]({ board: this.board });\r\n        this.playerFigure = props.playerFigure;\r\n        this.aiFigure = props.playerFigure === \"x\" ? \"o\" : \"x\";\r\n        this.aiScore = 0;\r\n        this.drawScore = 0;\r\n        this.playerScore = 0;\r\n        this.turnOwner = props.turnOwner;\r\n        this.history = [];\r\n    }\r\n\r\n    init() {\r\n        console.log(\"nothintn\");\r\n        this.board.init();\r\n        if (this.turnOwner === \"ai\") {\r\n            this.handleAiTurn();\r\n        }\r\n    }\r\n\r\n    handleAiTurn() {\r\n        if (this.turnOwner === \"ai\" && this.state !== this.statesEnum.gameover) {\r\n            setTimeout(() => {\r\n                this.ai.makeTurn(this.aiFigure);\r\n                this.turnOwner = \"player\";\r\n            }, 100);\r\n        }\r\n    }\r\n\r\n    hanlePlayerTurn(cell) {\r\n        if (cell.figure === \"\" && this.turnOwner === \"player\") {\r\n            cell.placeFigure(this.playerFigure);\r\n            this.board.turnCounter++;\r\n            this.board.checkWinner(cell);\r\n            if (this.state !== this.statesEnum.gameover) {\r\n                this.turnOwner = \"ai\";\r\n                this.handleAiTurn();\r\n            }\r\n\r\n        }\r\n    }\r\n\r\n    newRound(props) {\r\n        this.board.container.remove();\r\n        this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__[\"Board\"]({ game: this });\r\n        this.state = this.statesEnum.playing;\r\n        this.ai = new _Ai_js__WEBPACK_IMPORTED_MODULE_1__[\"Ai\"]({ board: this.board })\r\n        this.playerFigure = props.playerFigure;\r\n        this.aiFigure = props.playerFigure === \"x\" ? \"o\" : \"x\";\r\n        this.turnOwner = props.turnOwner;\r\n\r\n        this.init();\r\n    }\r\n\r\n    handleVictory(winFigure) {\r\n        if (this.state === this.statesEnum.playing) {\r\n            this.state = this.statesEnum.gameover;\r\n            this.turnOwner = \"\";\r\n            let winner = \"\";\r\n            if (winFigure === \"draw\") {\r\n                winner = \"draw\"\r\n            }\r\n            else {\r\n                winner = winFigure === this.playerFigure ? \"player\" : \"ai\";\r\n            }\r\n\r\n            if (winner === \"player\") {\r\n                this.playerScore++;\r\n                this.history.push(\"Игрок одолел Компьютер\");\r\n            }\r\n            else if (winner === \"ai\") {\r\n                this.aiScore++;\r\n                this.history.push(\"Компьютер одолел игрока\");\r\n            }\r\n            else {\r\n                this.drawScore++;\r\n                this.history.push(\"Ничья\")\r\n            }\r\n            this.showVictoryScreen(winner);\r\n\r\n        }\r\n    }\r\n\r\n    showVictoryScreen(winner) {\r\n        let victoryScreen = document.createElement(\"div\")\r\n        victoryScreen.id = \"victoryScreen\";\r\n        victoryScreen.innerHTML = `<p class = \"result\">${winner === \"draw\" ? \"Ничья\" : winner === \"player\" ? \"Победа Игрока\" : \"Победа Компьютера\"}</p>\r\n                                    <p>Игрок: ${this.playerScore}</p>\r\n                                    <p>Компьютер: ${this.aiScore}</p>\r\n                                    <p>Ничьих: ${this.drawScore}</p>\r\n                                    <label>Выбор очередности: </label>\r\n                            <input type=\"radio\" name=\"turnNewRound\" value=\"first\" checked>\r\n                            <label>1-ый</label>\r\n                            <input type=\"radio\" name=\"turnNewRound\" value=\"second\">\r\n                            <label>2-ой</label><br>\r\n                            <label>Выбор знака: </label>\r\n                            <input type=\"radio\" name=\"figureNewRound\" value=\"x\" checked>\r\n                            <label>X</label>\r\n                            <input type=\"radio\" name=\"figureNewRound\" value=\"o\">\r\n                            <label>O</label>\r\n                            <button class = \"newGameButton\" onclick=\"startNewRound()\">Новый раунд</button>\r\n                            <p>История раундов:</p>\r\n                            <ol>\r\n                            ${this.history.map((elmt) => `\r\n                            <li>${elmt}</li>\r\n                          `).join('')}\r\n                          </ol>`;\r\n        setTimeout(function () {\r\n            this.board.container.appendChild(victoryScreen);\r\n            this.board.hideCells()\r\n        }.bind(this), 600);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/NoughtsAndCrossesGame.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NoughtsAndCrossesGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoughtsAndCrossesGame.js */ \"./src/NoughtsAndCrossesGame.js\");\n\r\n\r\n\r\nvar game;\r\nwindow.startNewGame = () => {\r\n    console.log(\"1233\");\r\n    if(document.getElementById(\"board\")){\r\n        document.getElementById(\"board\").remove();\r\n    }\r\n    let turnOwner = document.querySelector('input[name=\"turn\"]:checked').value===\"first\" ? \"player\" : \"ai\";\r\n    let playerFigure = document.querySelector('input[name=\"figure\"]:checked').value;\r\n    game = new _NoughtsAndCrossesGame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({turnOwner: turnOwner, playerFigure: playerFigure});\r\n    game.init();\r\n}\r\n\r\nwindow.startNewRound = () =>{\r\n    let turnOwner = document.querySelector('input[name=\"turnNewRound\"]:checked').value===\"first\" ? \"player\" : \"ai\";\r\n    let playerFigure = document.querySelector('input[name=\"figureNewRound\"]:checked').value;\r\n    game.newRound({turnOwner:turnOwner, playerFigure : playerFigure});\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });