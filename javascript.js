let getComputerChoise = () => {
    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    switch(getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

console.log(getComputerChoise());