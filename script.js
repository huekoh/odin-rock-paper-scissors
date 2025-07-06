function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

/*
function getHumanChoice() {
    let choice = prompt("Please input one of these choices: rock, paper or scissors");
    return choice;
}
*/

function playRound(h, c) {
    let output = 0;
    const message = document.querySelector(".round-outcome");
    const playerScore = document.querySelector(".player .score-point");
    const comScore = document.querySelector(".computer .score-point");
    let tempH = h[0].charCodeAt(0);
    let tempC = c[0].charCodeAt(0);

    switch (tempH - tempC) {
        case 0:
            message.textContent = `it's a tie, you chose ${h} and your opponent chose ${c}.`;
            break;
        case -2:
        case -1:
        case 3:
            message.textContent = `you won! you chose ${h} and your opponent chose ${c}.`;
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            output = 1;
            break;
        default:
            message.textContent = `you lost :( you chose ${h} and your opponent chose ${c}.`;
            comScore.textContent = parseInt(comScore.textContent) + 1;
            output = -1;
            break;
    }

    console.log(message.textContent);
    return output
}

/*
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
*/

function main() {
    choices = ["rock", "paper", "scissors"];
    choices.forEach(choice => {
        const btn = document.querySelector(`#${choice}`);
        btn.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound(choice, computerSelection);
        });
    });
}

main();

