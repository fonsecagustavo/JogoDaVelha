document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    let buttonRestart = document.querySelector("button");
    buttonRestart.addEventListener('click',restartGame);

})


function handleClick (event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            alert("O jogo acabou - Vencedor foi jogador " + symbols[playerTime]  )
        },10)
        changeScoreboard();
    }
    updateSquare(position);
    changePlayer();
    
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol == ''){
            square.innerHTML = '';
        }
    })
}
function restartGame() {
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;

    updateSquares();
}

function changePlayer() {
    let h2 = document.getElementById("jogador");
    
    if(playerTime == 0){
        h2.innerHTML = 'Jogador O';
    }else {
        h2.innerHTML = 'Jogador X';
    }
}

function changeScoreboard() {
    let player0 = document.getElementById("player0");
    let player1 = document.getElementById("player1");

    player0.innerHTML = `${scoreboard[0]}`
    player1.innerHTML = `${scoreboard[1]}`
}