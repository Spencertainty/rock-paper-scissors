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
ß}

const playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
const computerChoice = getComputerChoice();
const result = playRound(playerChoice, computerChoice);
    console.log(`Round ${round}: ${result}`);
    

    if (playerScore > computerScore) {
        console.log('Winner Winner, Chicken Dinner!');
    } else if (computerScore > playerScore) {
        console.log('You let a computer beat you!');
    } else {
        console.log("Time game, play another round!");
    }

playGame();
