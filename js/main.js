// Model
class Model {
    constructor(){
        this.title = "Tic Tac Toe";
        this.score = 0;
        this.turn = true;
        this.board = [0,0,0,
                      0,0,0,
                      0,0,0];
        this.possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 4, 6]];
        this.endGame = false;
    }
    setTitle(x){
        this.title = x;
    }
    getTitle(){
        return this.title;
    }
    setScore(x){
        this.score = x;
    }
    getScore(){
        return this.score;
    }
    setTurn(x){
        this.turn = x;
    }
    getTurn(){
        return this.turn;
    }
    setBoard(x){
        this.board = x;
    }
    getBoard(){
        return this.board;
    }
    setPossibleWins(x){
        this.possibleWins = x;
    }
    getPossibleWins(){
        return this.possibleWins;
    }
    setEndGame(x){
        this.endGame = x;
    }
    getEndGame(){
        return this.endGame;
    }
}

// View
class View {
    constructor(){
        // all of the get element by id's
        this.button = document.getElementById('button')
        this.body = document.body
        this.titleDisplay = document.createElement("h1")
        this.scoreDisplay = document.createElement("div")
        this.boardDisplay = document.createElement("button")
    }

    init=(fn)=>{
        this.body.addEventListener("load", fn)
    } 
}

// Controller
class Controller {
    constructor(){
        this.m = new Model()
        this.v = new View()
        this.v.init(this.pageLoad)
        // any view functions will go here, like button clicks
    }
    init=()=>{
        console.log("page loaded")
    }
    pageLoad=()=>{
        console.log("Clicked!")
        this.titleDisplay = document.createElement("h1");
        this.v.body.appendChild(this.titleDisplay)

    }
    
}
/* 
## `tileClick`
- Update model and view 
- set `board` based on which button is clicked
- Show players symbol in view
- remove buttons ability to click
- apply a 'clicked' class to button
- run `checkForWin`
- switch `turn`
## `endGame`
- make popup that displays winner
- increase winner's `score`
- lock down buttons
## `resetButton`
- set model to default
- update view
- remove popup
- unlock buttons
## `checkForWin`

For every array in `possibleWins`, check the value at the index given by the `possibleWins` against the `board`'s first index
 for true/false. If all three numbers are true, AND have the same value, run `endGame`
*/

function init() { 
    let game = new Controller();
    game.init();
}

init();