function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log('Random index:', randomIndex);
    console.log('Generated choice:', choices[randomIndex]);
    return choices[randomIndex];
}

const computerChoice = getComputerChoice();
console.log('Computer choice:', computerChoice);