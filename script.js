let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Please input one of these choices: rock, paper or scissors");
    return choice;
}

function playRound(h, c) {
    let output = "";

    let tempH = h[0].charCodeAt(0);
    let tempC = c[0].charCodeAt(0);

    console.log(tempH-tempC);

    switch (tempH - tempC) {
        case 0:
            output = "it's a tie";
            break;
        case -2:
        case -1:
        case 3:
            output = `you have won! you chose ${h} and your opponent chose ${c}.`;
            break;
        default:
            output = `you have lost :(! you chose ${h} and your opponent chose ${c}.`;
            break;
    }

    return output
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));



