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

let humanScore = 0, computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
    (humanChoice == "Paper" && computerChoice == "Rock") || 
    (humanChoice == "Scissors" && computerChoice == "Paper")) {
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        body.appendChild(result);

        // alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`You win! ${humanChoice} beats ${computerChoice}. ${humanScore}`);
        humScore.textContent = `Your score is: ${humanScore}`;
        body.appendChild(humScore);
        pcScore.textContent = `Computer score is: ${computerScore}`;
        body.appendChild(pcScore);

    } else if (humanChoice == computerChoice) {
        // alert("It's a draw");
        result.textContent = "It's a draw";
        body.appendChild(result);

        humScore.textContent = `Your score is: ${humanScore}`;
        body.appendChild(humScore);
        pcScore.textContent = `Computer score is: ${computerScore}`;
        body.appendChild(pcScore);
        console.log("It's a draw!");
    } else {
        computerScore++;
        // alert(`You lose! ${computerChoice} beats ${humanChoice}.`)
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        body.appendChild(result);

        humScore.textContent = `Your score is: ${humanScore}`;
        body.appendChild(humScore);
        pcScore.textContent = `Computer score is: ${computerScore}`;
        body.appendChild(pcScore);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    if (humanScore == 5 || computerScore == 5) {
        rock.removeEventListener('click', rockHandler);
        paper.removeEventListener('click', paperHandler);
        scissors.removeEventListener('click', scissorsHandler);
        if (humanScore == 5) {
            result.textContent = "You win the game!";
        } else {
            result.textContent = "Computer wins the game!"
        }
    }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const body = document.querySelector("body");
const result = document.createElement("div");
const humScore = document.createElement("div");
const pcScore = document.createElement("div");

const rockHandler = () => {
    playRound("Rock", getComputerChoice());
};
const paperHandler = () => {
    playRound("Paper", getComputerChoice());
};
const scissorsHandler = () => {
    playRound("Scissors", getComputerChoice());
};

rock.addEventListener('click', rockHandler);
paper.addEventListener('click', paperHandler);
scissors.addEventListener('click', scissorsHandler);
