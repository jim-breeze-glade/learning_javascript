const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randNum = Math.floor(Math.random() * 3);
  return options[randNum];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (!hasPlayerWonTheRound(userOption, computerResult)) {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.textContent = getRoundResults(userOption);
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  if (playerScore >= 3) {
    winnerMsgElement.textContent = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore >= 3) {
    winnerMsgElement.textContent = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = "0";
  computerScoreSpanElement.textContent = "0";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}

resetGameBtn.addEventListener("click", () => resetGame());

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => {
  showResults("Rock");
});

paperBtn.addEventListener("click", () => {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
  showResults("Scissors");
});
