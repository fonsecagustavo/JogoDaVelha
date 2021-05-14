document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    let buttonReiniciar = document.querySelector("button");
    buttonReiniciar.addEventListener('click',reiniciarGame);

})


function handleClick (event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            alert("O jogo acabou - Vencedor foi jogador " + symbols[playerTime]  )
        },10)
        mudarPlacar();
    }
    updateSquare(position);
    mudarJogador();
    
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
function reiniciarGame() {
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;

    updateSquares();
}

function mudarJogador() {
    let h2 = document.getElementById("jogador");
    
    if(playerTime == 0){
        h2.innerHTML = 'Jogador O';
    }else {
        h2.innerHTML = 'Jogador X';
    }
}

function mudarPlacar() {
    let jogador0 = document.getElementById("jogador0");
    let jogador1 = document.getElementById("jogador1");

    jogador0.innerHTML = `${placar[0]}`
    jogador1.innerHTML = `${placar[1]}`
}