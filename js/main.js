// Model
class Model {
    constructor() {
        this.title = "Tic Tac Toe";
        this.scoreX = 0;
        this.scoreO = 0;
        this.turn = "X's Turn";
        this.board = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];
        this.possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
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
    render(data, fn) {
        console.log(data)

        this.titleContainer = document.createElement("div");
        this.titleContainer.id = "titleContainer"
        this.board = document.createElement("div");
        this.board.id = "board"
        this.board.classList = 'board'
        this.scoreContainer = document.createElement("div");
        this.scoreContainer.id = "scoreContainer"

        this.body.appendChild(this.titleContainer)
        this.body.appendChild(this.scoreContainer)
        this.body.appendChild(this.board)

        this.titleDisplay = document.createElement("h1");
        this.titleDisplay.innerText = data.title;
        this.titleContainer.appendChild(this.titleDisplay)
        this.scoreDisplay = document.createElement("div");

        this.scoreDisplay = document.createElement("h1");
        this.scoreDisplay.innerText = `Score X: ${data.scoreX}`
        this.scoreContainer.appendChild(this.scoreDisplay)
        this.scoreDisplay = document.createElement("div");
        this.scoreDisplay = document.createElement("h1");
        this.scoreDisplay.innerText = `Score O: ${data.scoreO}`
        this.scoreContainer.appendChild(this.scoreDisplay)
        this.scoreDisplay = document.createElement("div");
        // Tiles
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = `tile${i}`
            tile.addEventListener('click', (e) => { e.target.disabled = true; e.target.innerText = "X"; fn(e.target.id) })
            board.append(tile)
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
        this.v.render(this.m, this.updateBoard);
    }
    updateBoard = (x) => {
        let pos = x.charAt(x.length - 1)
        console.log(pos);
        this.m.board[pos] = 'X';
        console.log(this.m.board);
        this.checkForWin(this.m.possibleWins, this.m.board);
    }
    checkForWin = (possible, current) => {
        for (let i = 0; i < possible.length; i++) { //For Every array in possibleWins
            let positions = possible[i]
            if (
                current[positions[0]] && // Check the value at the index given by the possibleWins for true/false
                current[positions[0]] === current[positions[1]] && // If the rest of the three numbers are true, run gameWin
                current[positions[0]] === current[positions[2]]
            ) {

                console.log("GAME WON!!!")
            }
        }
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