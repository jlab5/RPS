function getComputerChoice() {
    const outcomes = ["Rock","Paper","Scissors"];
    //Math.random() generates a random floating point number between 0 and 1
    let randomIndex = Math.floor(Math.random() * outcomes.length);
    let choice = outcomes[randomIndex];s
    return choice;

}

console.log(getComputerChoice());

// document.getElementById("myBtn").onclick = getComputerChoice;