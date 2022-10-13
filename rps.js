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
  switch(playerSelection) {
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


function game() {
  let win = 0;
  let lose = 0
  let tie = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(`You chose ${playerSelection}.`);
    const computerSelection = getComputerChoice();
    console.log(`Your opponent chose ${computerSelection}.`);
    let roundResult = playRound(playerSelection, computerSelection); // put the round in a variable so the if statements below work
    if (roundResult === "You won!") {
      win++;
    } else if (roundResult === "You lost!") {
      lose ++;
    } else if (roundResult === "You tied!") {
      tie++;
    }
    console.log(roundResult);
  }
console.log(`You won ${win} times, lost ${lose} times and tied ${tie} times. Thanks for playing!`);
}

game();