// Function for generating random choices for computer
function getComputerChoice() {
    const choices = ['rock' , 'paper' , 'scisors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// Getting user choice
function playerChoice(choice) {
    console.log(choice) ;
    return choice;
}
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scisors = document.getElementById('scissors');
rock.addEventListener('click' , playerChoice);
paper.addEventListener('click' , playerChoice);
scisors.addEventListener('click' , playerChoice);