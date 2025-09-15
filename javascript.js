let getComputerChoice = () => {
    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };
    switch(getRandomInt(3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
};

let getHumanChoice = () => {
    let humanSelect = prompt("Rock, Paper, Scissors")
    humanSelect = humanSelect.charAt(0).toUpperCase() + humanSelect.slice(1).toLowerCase();
    return humanSelect;
};

let humanScore = 0, computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
    (humanChoice == "Paper" && computerChoice == "Rock") || 
    (humanChoice == "Scissors" && computerChoice == "Paper")) {
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice == computerChoice) {
        alert("It's a draw")
        console.log("It's a draw!");
    } else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`)
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
};

let playGame = () => {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();
if (humanScore > computerScore) {
    alert(`Game over, you win!
        Your score: ${humanScore}
        Computer score: ${computerScore}`);
} else if (computerScore > humanScore) {
    alert(`Game over, you lose!
        Your score: ${humanScore}
        Computer score: ${computerScore}`)
} else {
    alert(`Game over, it's a draw!
        Your score: ${humanScore}
        Computer score: ${computerScore}`)
}
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);