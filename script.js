function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Please input one of these choices: rock, paper or scissors");
    return choice;
}

function playRound(h, c) {
    let message = "";
    let output = 0;

    let tempH = h[0].charCodeAt(0);
    let tempC = c[0].charCodeAt(0);

    switch (tempH - tempC) {
        case 0:
            message = `it's a tie, you chose ${h} and your opponent chose ${c}.`;
            break;
        case -2:
        case -1:
        case 3:
            message = `you have won! you chose ${h} and your opponent chose ${c}.`;
            output = 1;
            break;
        default:
            message = `you have lost :(! you chose ${h} and your opponent chose ${c}.`;
            output = -1;
            break;
    }
    
    console.log(message);
    return output
}

function playGame() {
    let gameCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (gameCount < 5) {
        console.log(`you are playing round ${gameCount + 1}.`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let temp = playRound(humanSelection, computerSelection);
        humanScore += temp;
        computerScore -= temp;
        ++gameCount;
    }

    if (humanScore > computerScore) {
        console.log("FINAL: you have won overall!!");
    } else if ((humanScore < computerScore)) {
        console.log("FINAL: and you have lost :( better luck next time!");
    } else {
        console.log("FINAL: well, seems like it's a tie overall heh.");
    }
}

playGame();



