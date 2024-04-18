let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
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
        displayResult('You let a computer beat you - you should probably try again.');
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