 const cells = document.querySelectorAll(".cell");

 const O = "O";
 const X = "X";

 let currentPlayer = O;
 const board = new Array(9).fill(null);

 const cellClicked = (e) => {
    const id = e.target.id;

    board[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    currentPlayer = currentPlayer === O ? X : O;

    console.log(board)
 };
 cells.forEach((cell) => cell.addEventListener("click", cellClicked))
