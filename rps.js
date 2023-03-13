const outcomes = ["Rock","Paper","Scissors"];
const lowerOutcomes = outcomes.map(x => x.toLowerCase());

function getComputerChoice() {
    //Math.random() generates a random floating point number between 0 and 1
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const choice = outcomes[randomIndex];
    return choice;

}

function playRound(playerSelection, computerSelection) {
    //checks for wrong inputs
    while (typeof playerSelection !== "string" || lowerOutcomes.includes(playerSelection.toLowerCase()) == false) {
        playerSelection = prompt("Wrong input. Try Again. What will you choose?");
    }
    //Converts the first letter to upper case and the rest lower case
    const cleanPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    //WIN cases
    const WIN = (cleanPlayerSelection === "Rock" && computerSelection === "Scissors"
    || cleanPlayerSelection === "Paper" && computerSelection === "Rock" 
    || cleanPlayerSelection === "Scissors" && computerSelection === "Paper")
    //DRAW cases
    const DRAW = (cleanPlayerSelection === computerSelection);

    if (WIN == true) {
        console.log("You win! " + cleanPlayerSelection +  " beats " + computerSelection)
        return "won"
    }
    else if (DRAW == true) {
        console.log("Draw. No one wins")
        return "draw"
    }
    else {
        console.log("You lose..." + computerSelection +  " beats " + cleanPlayerSelection)
        return "lost"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What will you choose?");
        const computerSelection = getComputerChoice();
        const outcome = playRound(playerSelection, computerSelection);
        if (outcome == "won") {
            playerScore += 1;
        }
        else if (outcome == "lost") {
            computerScore += 1;
        }
        //else would do nothing
    }
    if (playerScore > computerScore) {
        return ("You won " + playerScore + "-" + computerScore)
    }
    else if (playerScore < computerScore) {
        return ("You lost " + computerScore + "-" + playerScore)
    }
    else {
        return ("You tied " + computerScore + "-" + playerScore)
    }
}

console.log(game())
    


//Shows message through a button
// document.getElementById("myBtn").onclick = getComputerChoice;