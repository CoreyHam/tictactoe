// Model
class Model {
    constructor() {
        this.title = "Tic Tac Toe";
        this.scoreX = 0;
        this.scoreO = 0;
        this.turn = "X";
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        this.endGame = false;
    }
    setTitle(x) {
        this.title = x;
    }
    getTitle() {
        return this.title;
    }
    setScoreX(x) {
        this.scoreX = x;
    }
    getScoreX() {
        return this.scoreX;
    }
    setScoreO(x) {
        this.scoreO = x;
    }
    getScoreO() {
        return this.scoreO;
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
    resetGame(init) {
        this.setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.setTurn("X");
        this.setEndGame(false);
        init
    }
}

// View
class View {
    constructor() {
        // all of the get element by id's
        this.body = document.body;

    }
    render(data, fn, turnSwitch, resetGame, addGame, reset, gameEnd) {
        console.log("RENDERING")
        if(gameEnd != true){
            
            if (reset) {
                this.body.innerHTML = ''
            }
            this.titleContainer = document.createElement("div");
            this.titleContainer.id = "titleContainer"
            this.board = document.createElement("div");
            this.board.id = "board"
            this.board.classList = 'board'
            this.scoreContainer = document.createElement("div");
            this.scoreContainer.id = "scoreContainer"
            this.resetContainer = document.createElement("div");
            this.resetContainer.id = "resetContainer"
            
            this.body.appendChild(this.titleContainer)
            this.body.appendChild(this.scoreContainer)
            this.body.appendChild(this.board)
            this.body.appendChild(this.resetContainer)
            
            this.titleDisplay = document.createElement("h1");
            this.titleDisplay.innerText = data.getTitle();
            this.titleContainer.appendChild(this.titleDisplay)
            this.scoreDisplay = document.createElement("div");
            
            this.scoreDisplay = document.createElement("h1");
            this.scoreDisplay.innerText = `Score X: ${data.getScoreX()}`
            this.scoreContainer.appendChild(this.scoreDisplay)
            this.scoreDisplay = document.createElement("div");
        this.scoreDisplay = document.createElement("h1");
        this.scoreDisplay.innerText = `Score O: ${data.getScoreO()}`
        this.scoreContainer.appendChild(this.scoreDisplay)
        this.scoreDisplay = document.createElement("div");
        // Tiles
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = `tile${i}`
            console.log(data.getEndGame())
            
            tile.addEventListener('click', (e) => { e.target.disabled = true; e.target.innerText = data.getTurn(); fn(e.target.id); turnSwitch() })
            
            this.board.append(tile)
        }
        this.resetDisplay = document.createElement("button");
        this.resetDisplay.innerText = "RESET";
        this.resetDisplay.addEventListener('click', () => { resetGame() });
        this.resetContainer.appendChild(this.resetDisplay)
        this.scoreDisplay = document.createElement("div");
        
        this.resetDisplay = document.createElement("button");
        this.resetDisplay.innerText = "ADD";
        this.resetDisplay.addEventListener('click', () => { addGame() });
        this.resetContainer.appendChild(this.resetDisplay)
        this.scoreDisplay = document.createElement("div");
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
        this.v.render(this.m, this.updateBoard, this.turnSwitch, this.resetGame, this.addGame);
    }
    updateBoard = (x) => {
        let pos = x.charAt(x.length - 1)
        this.m.getBoard()[pos] = this.m.getTurn();
        // console.log(this.m.board);
        this.checkForWin(this.m.getPossibleWins(), this.m.getBoard());
    }
    checkForWin = (possible, current) => {
        for (let i = 0; i < possible.length; i++) { //For Every array in possibleWins
            let positions = possible[i]
            if (
                current[positions[0]] && // Check the value at the index given by the possibleWins for true/false
                current[positions[0]] === current[positions[1]] && // If the rest of the three numbers are true, run gameWin
                current[positions[0]] === current[positions[2]]
            ) {


                this.gameEnd()
            }
        }
    }
    turnSwitch = () => {
        // console.log("what is get turn doing?", this.m.getTurn())
        if (this.m.getTurn() === "X") {
            this.m.setTurn("O")
            // console.log(this.m.turn)
        } else {
            this.m.setTurn("X")
        }
    }
    resetGame = () => {
        this.m.resetGame(globalInit);
        this.v.render(this.m, this.updateBoard, this.turnSwitch, this.resetGame, this.addGame, "reset");

    }

    addGame = () => {
        globalInit();
    }

    gameEnd = () => {
        this.m.setEndGame(true)
        this.v.render(this.m, this.updateBoard, this.turnSwitch, this.resetGame, this.addGame, "reset", "gameEnd")
        console.log("GAME WON!!!")
    }
}

function globalInit() {
    let app = new Controller();
    app.init();
}

globalInit();