const OUTCOMES = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    //Math.random() generates a random floating point number between 0 and 1
    const randomIndex = Math.floor(Math.random() * OUTCOMES.length);
    const choice = OUTCOMES[randomIndex];
    return choice;
}

function choices(playerChoice,getComputerChoice) {
    return [playerChoice,getComputerChoice];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection);
    //WIN cases
    const WIN = (playerSelection === "Rock" && computerSelection === "Scissors"
    || playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper")
    //DRAW cases
    const DRAW = (playerSelection === computerSelection);

    if (WIN == true) {
        console.log("You win! " + playerSelection +  " beats " + computerSelection)
        playerScore += 1;
    }
    else if (DRAW == true) {
        console.log("Draw. No one wins");
    }
    else {
        console.log("You lose..." + computerSelection +  " beats " + playerSelection);
        computerScore += 1;
    }
    console.log(`Your score: ${playerScore} \nComputer Score: ${computerScore}`)
}

function game() {  
    buttons.forEach((button) => {
        let playerChoice;
        button.addEventListener('click', (e)=> {
            if (button.className === "R") {
                playerChoice = "Rock";
            }
            else if (button.className === "P") {
                playerChoice = "Paper";
            }
            else {
                playerChoice = "Scissors";
            }
            playRound(playerChoice, getComputerChoice());
        })
    })
}

game();