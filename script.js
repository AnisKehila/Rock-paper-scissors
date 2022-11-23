let userScore = 0;
let computerScore = 0;
let computerChoicesList = document.querySelector('#computer-choice');
let userChoicesList = document.querySelector('#user-choice');
let scoreDisplay = document.querySelector('#score');
let msgDisplay = document.querySelector('#msg');
// Function for generating random choices for computer
function getComputerChoice() {
    const choices = ['rock' , 'paper' , 'scisors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// gets user choice and starts the game
let choices = document.querySelectorAll('.imgs div');

    choices.forEach(playerChoice => {
        playerChoice.addEventListener('click' , () => startGame(playerChoice.getAttribute('data-choice') , getComputerChoice()));
    });

// game function

// function to append choices
function appendChoices(userChoice , computerChoice) {
    let userChoiceEle = document.createElement('li');
    let userChoiceNode = document.createTextNode(userChoice);
    userChoiceEle.appendChild(userChoiceNode);
    userChoicesList.appendChild(userChoiceEle);
    let computerChoiceEle = document.createElement('li');
    let computerChoiceNode = document.createTextNode(computerChoice);
    computerChoiceEle.appendChild(computerChoiceNode);
    computerChoicesList.appendChild(computerChoiceEle);
}
// update score function
function updateScore(score) {
    scoreDisplay.innerHTML = score;
}
//display a note
function displayMsg(msg) {
    msgDisplay.innerHTML = msg;
}
function startGame(userChoice , computerChoice) {
    if(userScore >= 5 || computerScore >= 5) return; 
    appendChoices(userChoice , computerChoice);
    if(userChoice == 'rock') {
        if(computerChoice == 'rock') {
            displayMsg('It\'s a tie');
        } else if(computerChoice == 'paper') {
            displayMsg('You Lose!Paper beats rock');
            computerScore++;
        } else if(computerChoice == 'scisors') {
            displayMsg('You Win!Rock beats scissors');
            userScore++;
        }
    } else if(userChoice == 'paper') {
        if(computerChoice == 'paper') {
            displayMsg('It\'s a tie');
        } else if(computerChoice == 'rock') {
            displayMsg('You Win!Paper beats rock');
            userScore++;
        } else if(computerChoice == 'scisors') {
            displayMsg('You Lose!scissors beats paper');
            computerScore++;
        }
    } else if(userChoice == 'scisors') {
        if(computerChoice == 'scisors') {
            displayMsg('It\'s a tie');
        } else if(computerChoice == 'rock') {
            displayMsg('You Lose!Rock beats scissors');
            computerScore++;
        } else if(computerChoice == 'paper') {
            displayMsg('You Win!scissors beats paper');
            userScore++;
        }
    }
    let score = `${userScore} - ${computerScore}`;
    updateScore(score);
    if(userScore >= 5 ) {
        displayMsg('Game Over You Win!')
    } else if(computerScore >= 5) {
        displayMsg('Game Over You Lose!')
    }
}
