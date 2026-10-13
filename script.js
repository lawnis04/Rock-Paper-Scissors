let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please choose rock, paper, or scissors:",
  ).toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Invalid choice. Please choose rock, paper, or scissors.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "Your score: " + humanScore + " | Computer score: " + computerScore,
  );

  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "Your score: " + humanScore + " | Computer score: " + computerScore,
  );

  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "Your score: " + humanScore + " | Computer score: " + computerScore,
  );

  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "Your score: " + humanScore + " | Computer score: " + computerScore,
  );

  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    "Your score: " + humanScore + "| Computer score: " + computerScore,
  );

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
