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
        this.app = document.createElement("div")
        this.app.id = "app"
        document.body.appendChild(this.app)
    }
    render(data, tileHandler, gameReset) {
        for(let property in data){ //Create all needed containers for each property on Model until possibleWins
            if(property==='board'){break}
            let div = document.createElement("div")
            div.id = `${property}Container`
            this.app.appendChild(div)
        }
        //title
        this.titleDisplay = document.createElement('h1')
        this.titleDisplay.classList = "title"
        this.titleDisplay.innerText = data.getTitle()
        this.titleContainer = document.getElementById('titleContainer')
        this.titleContainer.appendChild(this.titleDisplay)
        //scoreX
        this.scoreXDisplay = document.createElement('h1')
        this.scoreXDisplay.innerText = `X: ${data.getScoreX()}`
        this.scoreXContainer = document.getElementById('scoreXContainer')
        this.scoreXContainer.appendChild(this.scoreXDisplay)
        //scoreO
        this.scoreODisplay = document.createElement('h1')
        this.scoreODisplay.innerText = `O: ${data.getScoreO()}`
        this.scoreOContainer = document.getElementById('scoreXContainer')
        this.scoreOContainer.appendChild(this.scoreODisplay)
        //turn
        this.turnDisplay = document.createElement('h1')
        this.turnDisplay.classList = 'turn' 
        this.turnDisplay.innerText = `${data.getTurn()}'s turn`
        this.turnContainer = document.getElementById('turnContainer')
        this.turnContainer.appendChild(this.turnDisplay)
        //board
        this.board = document.createElement('div');
        this.board.id = "board"
        this,this.board.classList = "board"
        this.app.appendChild(this.board)
        this.tileBuilder(tileHandler)
        //reset
        this.resetButton = document.createElement('button');
        this.resetButton.id = "resetButton"
        this.resetButton.innerText = "RESET"
        this.resetButton.addEventListener('click', gameReset)
        this.app.appendChild(this.resetButton)
    }
    reset=()=> {
        console.log("RESETTING", this.app)
        while (this.app.firstChild) {
            this.app.removeChild(this.app.firstChild);
        } 
    }
    updateView(data){
        this.titleDisplay.innerText = data.getTitle()
        this.scoreXDisplay.innerText = `X: ${data.getScoreX()}`
        this.scoreODisplay.innerText = `O: ${data.getScoreO()}`
        data.getEndGame() ? this.turnDisplay.innerText = `GAME OVER` : this.turnDisplay.innerText = `${data.getTurn()}'s turn`
            
    }
    tileBuilder(tileHandler){
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = `tile${i}`
            tile.addEventListener('click', tileHandler)
            this.board.append(tile)
        }
    }
    tileLock = () => {
        let tile = document.getElementsByClassName('tile')
        for (let i = 0; i < tile.length; i++) {
            tile[i].disabled = true
        }
    }
}

class Controller {
    constructor() {
        this.m = new Model();
        this.v = new View();
    }
    init(){
        console.log("Initialized")
        this.v.render(this.m, this.tileHandler, this.gameReset)
    }
    tileHandler=(e)=>{
        e.target.disabled = true
        e.target.innerText = this.m.getTurn()
        this.updateBoard(e.target.id)
        this.turnSwitch()
    }
    turnSwitch = () => {
        if (this.m.getTurn() === "X") {
            this.m.setTurn("O")
        } else {
            this.m.setTurn("X")
        }
        this.v.updateView(this.m);
    }
    updateBoard = (tileId) => {
        let pos = tileId.charAt(tileId.length - 1)
        this.m.getBoard()[pos] = this.m.getTurn();
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
                this.gameEnd('win')
            }
        }
        let count = 0;
        for(let i=0;i < current.length;i++){
            if(current[i]){
                count++
            }
            if(count == 9){
                this.gameEnd('tie')
            }
        }
    }
    gameEnd = (condition) => {
        this.m.setEndGame(true)
        this.v.tileLock()
        if(condition == 'win'){
            this.m.setTitle(`PLAYER ${this.m.getTurn()} WINS`)
            this.m.getTurn() == 'X' ? this.m.setScoreX(this.m.getScoreX()+1) : this.m.setScoreO(this.m.getScoreO()+1)
            
        }
        if(condition == 'tie'){
            this.m.setTitle(`TIE GAME`)
        }
        this.v.updateView(this.m)
    }
    gameReset = ()=>{
        this.v.reset()
        this.init()
        this.m.setTitle("Tic Tac Toe")
        this.m.setTurn("X")
        this.m.setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0])
        this.m.setEndGame(false)
        this.v.updateView(this.m)
    }
}


function globalInit() {
    let app = new Controller();
    app.init();
}
globalInit();