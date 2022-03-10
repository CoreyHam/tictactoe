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

# REQUIREMENTS

[x]The HTML for the tic-tac-toe grid should be dynamically rendered in JS.

[x]Your code should incorporate the use of at least one Class

[x]The entire project must be Object-Oriented and should at least use one of the following design patterns 

[]The game should let the players know who's turn it is.

[x]Game tiles should only be clickable once, and if the game is over they should not be clickable at all.

[]The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.

[x]There should be a Restart Game button that does not refresh the page (set state).

[]During Demo, you should be able to explain what pillars of OOP you used (see Additional Resources), as well as what specific design patterns you incorporated, how you did so, and where they appear in the code.

[x]Use the symbols X and O.

[x]On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.

[x]The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
