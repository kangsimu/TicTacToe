const cells = document.querySelectorAll(".cell");
const gameDisplay = document.getElementsByTagName(".display");
const restartGame = document.getElementById("restart");

//entering names before starting game
let player1Name = window.prompt("Enter Player 1's name!");
let player2Name = window.prompt("Enter Player 2's name!");

//changing player names
let player1 = document.getElementsByClassName("player1")[0];
player1.innerHTML = player1Name
let player2 = document.getElementsByClassName("player2")[0];
player2.innerHTML = player2Name

//const X_SIGN = "X";
const X = "X";

//const O_SIGN = "O";
const O = "O";
let currentPlayer = X;
const board = new Array(9).fill(null);

//clicking each boxes 
const cellClicked = (e) => {
   const id = e.target.id;
   
   if (!board[id]){
      board[id] = currentPlayer;
      e.target.innerText = currentPlayer;   
      
      //is game over?
      if (checkline()) endGame ();
      
      //if they draw
      if (!board.some((e) => e === null)) endGame ("draw");
      
      currentPlayer = currentPlayer === X ? O : X;
   }
   //console.log(board)
}

const endGame = (result) => {
   gameDisplay.innerText = result == "draw" ? "Draw!" : currentPlayer + " won the game!";
      //console.log("Game ended")
   cells.forEach((cell) => cell.addEventListener("click", cellClicked));
}
//restart the game
const restartButton = () => {
   currentPlayer = X;
   board.fill[null];
   cells.forEach((cell) => {
      cell.innerText = "";
   });
   gameDisplay.innerText = "Let's play!";

   restart.addEventListener("click", restartGame)
}



//winning combinations
const winningCombos = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   //colunmns
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   //diagnols
   [0, 4, 8],
   [2, 4, 6]
];   
const checkline = () => {
   //top row
   if (currentPlayer == board[0] && (board[0] == board[1] && board[0] == board[2]))
      return true;
   //middle row
   if (currentPlayer == board[3] && (board[3] == board[4] && board[3] == board[5])) 
      return true;
   //bottom row
   if (currentPlayer == board[6] && (board[6] == board[7] && board[6] == board[8]))
      return true;
   //left column
   if (currentPlayer == board[0] && (board[0] == board[3] && board[0] == board[6]))
      return true;
   //center column
   if (currentPlayer == board[1] && (board[1] == board[4] && board[1] == board[7]))
      return true;
   //right column
   if (currentPlayer == board[2] && (board[2] == board[5] && board[2] == board[8]))
      return true;
   //forward slash diagonal
   if (currentPlayer == board[0] && (board[0] == board[4] && board[0] == board[8]))
      return true;
   //backward slash diagonal
   if (currentPlayer == board[2] && (board[2] == board[4] && board[2] == board[6]))
      return true;
   
      return false;

}

//cellClicked eventlistener
cells.forEach((cell) => cell.addEventListener("click", cellClicked))
//restart eventlistener


