# Model
- `title`: "Tic Tac Toe"
- `score`: increases based on wins
- `turn`: X or O
- `board`: nine empty items
- `possibleWins`: check to see if board is a win condition
- `endGame`: triggered after win condition is met
# View
- Render objects from model by Creating and Appending divs

# Controller
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

For every array in `possibleWins`, check the value at the index given by the `possibleWins` against the `board`'s first index for true/false. If all three numbers are true, AND have the same value, run `endGame`