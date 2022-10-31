let win = 0;
let lose = 0;
let tie = 0;
let roundCount = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", function () { buttonRound("rock") });

const paper = document.querySelector("#paper");
paper.addEventListener("click", function () { buttonRound("paper") });

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function () { buttonRound("scissors") });

const results = document.querySelector("#results");

const score = document.querySelector("#score");

const resetBtn = document.querySelector("#restart");
resetBtn.style.display = "none";
resetBtn.addEventListener("click", function () { resetGame()});


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    choice = "rock";
  } else if (choice === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}


function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "You tied!";
      } else if (computerSelection === "paper") {
        return "You lost!";
      } else {
        return "You won!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        return "You won!";
      } else if (computerSelection === "paper") {
        return "You tied!";
      } else {
        return "You lost!";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        return "You lost!";
      } else if (computerSelection === "paper") {
        return "You won!";
      } else {
        return "You tied!";
      }
      break;
    default:
      return "Sorry something went wrong.";
  }
}


function buttonRound(playerSelection) {
  if (roundCount < 5) {
    roundCount++;
    //console.log(roundCount);
    
    const computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    
    results.textContent = `You chose ${playerSelection}. Your opponent chose ${computerSelection}. ${roundResult}`;

    if (roundResult === "You won!") {
      win++;
    } else if (roundResult === "You lost!") {
      lose++;
    } else if (roundResult === "You tied!") {
      tie++;
    }

    score.textContent = `You won ${win} times, lost ${lose} times and tied ${tie} times.`;
  }

  if (roundCount === 5) {
    results.textContent = "You lost! Better luck next time.";
    resetBtn.style.display = "block";

    if (win > lose && win > tie) {
      results.textContent = "You won!";
    }
  }
}


function resetGame() {
  win = 0;
  lose = 0;
  tie = 0;
  roundCount = 0;
  resetBtn.style.display = "none";
  score.textContent = "";
  results.textContent = "";
}