function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log('Random index:', randomIndex);
    console.log('Generated choice:', choices[randomIndex]);
    return choices[randomIndex];
}

const computerChoice = getComputerChoice();
console.log('Computer choice:', computerChoice);

function playRound(playerSelection, computerSelection) {

const playerChoice = playerSelection.toLowerCase();
const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie, shoot again!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `Congrats, you won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Sorry, you lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));