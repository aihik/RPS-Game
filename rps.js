let humanScore = 0;
let computerScore  = 0;

// Function to get the computer's choice
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else 
    return 'scissors';
}

// function to get user's choice
function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let userInput;

    while (true) {
        userInput = prompt('Choose: Rock | Paper | Scissors');
        if (userInput) {
            const normalizedInput = userInput.trim().toLowerCase();
            if (validChoices.includes(normalizedInput)) {
                return normalizedInput;
            }
        }
        alert("Invalid choice! Please type one of the following: Rock, Paper, Scissors.");
    }
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: {paper:'loose', scissors:'win', rock:'draw'},
        paper: {rock:'win', scissors:'loose', paper:'draw'},
        scissors: {paper:'win', scissors:'draw', rock:'loose'},
    }

    let result = outcomes[humanChoice][computerChoice];
    if (result === 'win') {
        humanScore+= 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`YOU: ${humanScore} | COMP: ${computerScore}`);
    } else if (result === 'loose') {
        computerScore+= 1;
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
        console.log(`YOU: ${humanScore} | COMP: ${computerScore}`);
    } else {
        console.log(`It's a draw! both chose ${humanChoice}`);
        console.log(`YOU: ${humanScore} | COMP: ${computerScore}`);
    }

    return {humanScore, computerScore};
}

function playGame(rounds) {
    for (let index = 1; index <= rounds; index++) {
        console.log(`Round: ${index}`);
        console.log(`--------------------------------------------------------`)
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score => YOU: ${humanScore} | AI PLAYER: ${computerScore}`);
    } else if(computerScore > humanScore) {
        console.log(`You lost the game! Final Score => YOU: ${humanScore} | AI PLAYER: ${computerScore}`);
    } else {
        console.log(`It's a draw! Final Score => YOU: ${humanScore} | AI PLAYER: ${computerScore}`);
    }
}