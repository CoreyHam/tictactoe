// Check for a win

const possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 4, 6]]
const boardTiles = [0, -1, 0, 0, 1, 0, 0, 1, 0]

function checkForWin(possible, current) {
    for (let i = 0; i < possible.length; i++) {
        positions = possible[i]
        let count = 0
        for (let j = 0; j < positions.length; j++) {
            if (current[positions[j]]) {
                count++;   
            }
            if(count == 3){
                console.log("GAME WON!!!")
            }
        }
    }
}

checkForWin(possibleWins, boardTiles)

// if all values in given three positions are true (not 0), do something

// function checkForWin(possibleWins, tiles){
//     // we need to look at the index of the array and see if each are true or false
//     let temp = possibleWins
//     for(let i = 0; i<=7;i++){
//         test = temp.shift()
//         position = test.forEach(element => console.log("element", element))
//         for(let j = 0; j<3;j++){
//         testuh = tiles[test[j]]
//         console.log("this the test", testuh)
//         }
//         // console.log("BREAK", i+1, possibleWins.length)
//     }
// }

// console.log("before if", current[j])
// if(current[j]==true){
//     console.log("should be 1?", current[j])
//                 count ++;
//             }
//             // console.log("the count", count)

// if current[positions[0]] && current[positions[0]] === current[positions[1]] && current[positions[0]] === current[positions[2]]

// line[0] && line[0]===line[1] && line[0] === line[2]