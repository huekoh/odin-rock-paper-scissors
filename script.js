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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

