# Model
`title`: "Tic Tac Toe"
`score`: increases based on wins
`turn`: X or O
`board`: nine empty items
`wincon`: check to see if board is a win condition
`endGame`: triggered after win condition is met
# View
Render objects from model
Create and Append Objects

# Controller

## `tileClick`
- Update model and view 
- set `board` based on which button is clicked
- Show players symbol in view
- remove buttons ability to click
- apply a 'clicked' class to button
- run `checkForWin`
- switch turn
## `endGame`
- make popup that displays winner
- lock down buttons
## `resetButton`
- set model to default
- update view
- remove popup
- unlock buttons
## `checkForWin`

