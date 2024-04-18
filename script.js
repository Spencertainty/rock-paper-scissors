let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
        
    if (playerChoice === computerChoice) {
        displayResult("It's a tie, shoot again!");
    } else if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        displayResult(`Congrats, you won this round! ${playerSelection} beats ${computerSelection}`);
    } else {
        displayResult(`Sorry, you lose, try again! ${computerSelection} beats ${playerSelection}`);
    }

    updateScore()
}

function displayResult(message) {
    const resultMessage.textContent = message;
    resultsDiv.appendChild(resultMessage);
}

function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
        displayResult('Congrats, you have beaten a computer! You should feel good about yourself');
        resetGame();
    } else if (computerScore === 5) {
        displayResult('You let a computer beat you. Want to try again?');
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
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