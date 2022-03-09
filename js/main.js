// Model
class Model {
    constructor() {
        this.title = "Tic Tac Toe";
        this.score = 0;
        this.turn = "X's Turn";
        this.board = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];
        this.possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 4, 6]];
        this.endGame = false;
    }
    setTitle(x) {
        this.title = x;
    }
    getTitle() {
        return this.title;
    }
    setScore(x) {
        this.score = x;
    }
    getScore() {
        return this.score;
    }
    setTurn(x) {
        this.turn = x;
    }
    getTurn() {
        return this.turn;
    }
    setBoard(x) {
        this.board = x;
    }
    getBoard() {
        return this.board;
    }
    setPossibleWins(x) {
        this.possibleWins = x;
    }
    getPossibleWins() {
        return this.possibleWins;
    }
    setEndGame(x) {
        this.endGame = x;
    }
    getEndGame() {
        return this.endGame;
    }
}

// View
class View {
    constructor() {
        // all of the get element by id's
        this.body = document.body;

    }
    render(data) {
        console.log(data)
        this.board = document.createElement("div");
        this.board.id = "board"
        this.board.classList = 'board'
        this.scoreContainer = document.createElement("div");
        this.scoreContainer.id = "scoreContainer"
        this.boardContainer = document.createElement("div");
        this.boardContainer.id = "boardContainer"

        this.body.appendChild(this.board)
        this.body.appendChild(this.scoreContainer)
        this.body.appendChild(this.boardContainer)

        this.titleDisplay = document.createElement("h1");
        this.scoreDisplay = document.createElement("div");
        this.boardDisplay = document.createElement("button");
        
        // Create Tiles
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.addEventListener('click', (e) => { console.log(e.target); e.target.disabled = true })
            board.prepend(tile)
        }
    }

}

// Controller
class Controller {
    constructor() {
        this.m = new Model();
        this.v = new View();
        // this.init(this.pageLoad)
        // any view functions will go here, like button clicks
    }

    init = () => {
        console.log("page loaded");
        this.v.render(this.m);
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

function globalInit() {
    let app = new Controller();
    app.init();
}

globalInit();