document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");

  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  function checkWinner() {
    for (const combo of winningCombos) {
      const a = combo[0];
      const b = combo[1];
      const c = combo[2];

      if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        status.textContent = "Congratulations! " + gameState[a] + " is the Winner!";
        status.classList.add("you-won");
      }
    }
  }

  squares.forEach(function (square, index) {
    square.classList.add("square");

    square.addEventListener("click", function () {
      gameState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

    square.addEventListener("mouseover", function () {
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", function () {
      square.classList.remove("hover");
    });
  });
});