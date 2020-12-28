document.addEventListener("DOMContentLoaded", ()=>{
// DOM VARS
const squares = document.querySelectorAll(".square");
const playerScore = document.getElementById("player");

const arrLength = 9;
const moves = new Array(arrLength).fill(null);
    // HELPER FCNS
    // iterate over array. array destr in each iteration. check for the el at all three indices are the same
    function checkWinner(arr){
        // arr of arrs that are horiz, vert, diagonal winning combos, argh
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < winCombos.length; i++){
            const[a, b, c] = winCombos[i]
            if(arr[a] && arr[a]===arr[b] && arr[a]===arr[c]){
                //return if the winner is X or O (the one in a)
                console.log("There is a winner")
                return arr[a];
            }
        }
        return null;
    }
    // for end of game:
    function checkBoard(arr){
        let count = 0;
        
        arr.forEach(el=>{
            if(el !== null){
                count ++;
            }
           
        });
        console.log("checkboard fired "+ count)
        if (count === 9){
            playerScore.innerText = "game over"
            return true;
        } else {
            return false;
        }
        
    }
    let player = 'X'
    function handleClick(){
        const dataId =this.getAttribute("data-id");
        moves[dataId] = player;
        console.log(moves)
        player = player === 'X' ? 'O' : 'X';
        checkWinner(moves)
        checkBoard(moves)
        playerScore.innerText = player;

    }

    squares.forEach(square =>{
        square.addEventListener("click", handleClick)
    })


    

})
