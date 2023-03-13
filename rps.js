function getComputerChoice() {
    const outcomes = ["Rock","Paper","Scissors"];
    //Math.random() generates a random floating point number between 0 and 1
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const choice = outcomes[randomIndex];
    return choice;

}

function playRound(playerSelection, computerSelection) {
    //Converts the first letter to upper case and the rest lower case
    const cleanPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

    //WIN cases
    const WIN = (cleanPlayerSelection === "Rock" && computerSelection === "Scissors"
    || cleanPlayerSelection === "Paper" && computerSelection === "Rock" 
    || cleanPlayerSelection === "Scissors" && computerSelection === "Paper")
    //DRAW cases
    const DRAW = (cleanPlayerSelection === computerSelection)
    console.log(WIN)

    if (WIN == true) {
        return "You win! " + cleanPlayerSelection +  " beats " + computerSelection; 
    }
    else if (DRAW == true) {
        return "Draw. No one wins"
    }
    else {
        return "You lose..." + computerSelection +  " beats " + cleanPlayerSelection; 
    }
}

const playerSelection = "RoCk";
const computerSelection = getComputerChoice();
console.log(playerSelection,computerSelection)
console.log(playRound(playerSelection,computerSelection))
    


//Shows message through a button
// document.getElementById("myBtn").onclick = getComputerChoice;