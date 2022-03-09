function build() { }




function createBoard() {
    board = document.createElement('div')
    board.classList = 'board'
    document.body.prepend(board)
    
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('button')
        tile.classList = `tile`
        tile.addEventListener('click', (e)=>{console.log(e.target); e.target.disabled = true})
        board.prepend(tile)
    }
}
function createChildren() { }








// this.titleContainer = document.createElement('div');
//     this.scoreAndTurnContainer = document.createElement('div');
//     this.boardContainer = document.createElement('div');
//     this.resetContainer = document.createElement('div');

//     this.titleContainer.classList = "titleContainer";
//     this.scoreAndTurnContainer.classList = "scoreAndTurnContainer";
//     this.boardContainer.classList = "boardContainer";
//     this.resetContainer.classList = "resetContainer";

//     this.body.prepend(this.resetContainer);
//     this.body.prepend(this.boardContainer);
//     this.body.prepend(this.scoreAndTurnContainer);
//     this.body.prepend(this.titleContainer);
// this.v.titleDisplay = document.createElement("h1");
// this.v.scoreAndTurnDisplay = document.createElement("div");
// for(let i=0;i<9;i++){
//     this.v.boardDisplay = document.createElement("button");
//     this.v.boardDisplay.style.width = "300px"
//     this.v.boardDisplay.style.height = "300px"
//     this.v.boardContainer.appendChild(this.v.boardDisplay)
// }
// this.v.resetDisplay = document.createElement("button");

// this.v.titleDisplay.innerText = this.m.getTitle()
// this.v.scoreAndTurnDisplay.innerText = `${this.m.getScore()} ${this.m.getTurn()}`
// this.v.resetDisplay.innerText = "RESET"

// console.log(this.m.getTitle())
// this.v.titleContainer.appendChild(this.v.titleDisplay)
// this.v.scoreAndTurnContainer.appendChild(this.v.scoreAndTurnDisplay)
// this.v.resetContainer.appendChild(this.v.resetDisplay)
// createContainers()
createBoard()
// createChildren()