let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function play(cell) {
  if (board[cell.id] === "") {
    cell.innerText = currentPlayer;
    board[cell.id] = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      reset();
    } else if (checkDraw()) {
      alert("It's a draw!");
      reset();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winCombinations.some(combination => {
    return (
      board[combination[0]] !== "" &&
      board[combination[0]] === board[combination[1]] &&
      board[combination[1]] === board[combination[2]]
    );
  });
}

function checkDraw() {//заполнена ли клетка?
  return board.every(cell => cell !== "");
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  document.querySelectorAll(".cell").forEach(cell => {
    cell.innerText = "";
  });
}

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => play(cell));
});