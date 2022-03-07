tictactoe

# Model
Store info / State

## `Objects`

`Board` - array of 9 `Squares`

`Squares` - Blank / X / O

`Player Turn` - X or O

# View
Render to Screen (no brains)

Do as the model and controller say.

# Controller
Handle Events

When user clicks on one of the `Squares`, change the state. Use `Player Turn` to decide what to change the square to.