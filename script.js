const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let ties = 0;

//random computer choice
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

//rules of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ties++;
        return `It's a tie you both picked ${playerSelection}`;
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors!';
        
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock!';
        
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper!';
        
    }
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Pick rock, paper, or scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log('Wins: ' + playerScore);
        console.log('Losses: ' + computerScore);
        console.log('Ties: ' + ties);
        if (i === 5) {
            if (playerScore > computerScore) {
                return 'You won!';
            }
            else if (playerScore < computerScore) {
                return 'You lose!';
            }
            else {
                return 'It ended in a tie';
            }
        }
        else {
            playRound(playerSelection, computerSelection);
        }
    }
}

console.log(game());