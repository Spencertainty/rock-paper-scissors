let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log('Random index:', randomIndex);
    console.log('Generated choice:', choices[randomIndex]);
    return choices[randomIndex];
}

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
        return `Congrats, you won this round! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Sorry, you lose, try again! ${computerSelection} beats ${playerSelection}`;
    }
}

document.getElementById('rock').addEventListener('click', function() {
    const result = playRound('rock', getComputerChoice());
    console.log(result);
});

document.getElementById('paper').addEventListener('click', function() {
    const result = playRound('paper', getComputerChoice());
    console.log(result);
});

document.getElementById('scissors').addEventListener('click', function() {
    const result = playRound('scissors', getComputerChoice());
    console.log(result);
});