// variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";

/**
 * generate a random number between 0 and 4 to choose a 'hand' for the computer
 */
function generateComHand() {
    const randomNum = Math.floor(Math.random() * 5);
    switch (randomNum) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        case 3:
            return LIZARD;
        case 4:
            return SPOCK;
        default:
            return;
    }
}

// functions which are called when their respective buttons are clicked
// returned values are passed on to the other functions as parameters
const ROCKFUNCTION = function (ROCK) {
    const comChoice = generateComHand();
    const winningStatement = pickedRockLogic(comChoice);
    const message = createsWinningMessage(ROCK, comChoice, winningStatement);
    displayWinningScreen(message);
    // update scoreboard
    const playerScore = incrementPlayerScore(winningStatement);
    const computerScore = incrementComScore(winningStatement);
    const gameCount = incrementGameAmount();
    updateScore(gameCount, playerScore, computerScore);

}
const PAPERFUNCTION = function (PAPER) {
    const comChoice = generateComHand();
    const winningStatement = pickedPaperLogic(comChoice);
    const message = createsWinningMessage(PAPER, comChoice, winningStatement);
    displayWinningScreen(message);
    // update scoreboard
    const playerScore = incrementPlayerScore(winningStatement);
    const computerScore = incrementComScore(winningStatement);
    const gameCount = incrementGameAmount();
    updateScore(gameCount, playerScore, computerScore);
}
const SCISSORSFUNCTION = function(SCISSORS) {
    const comChoice = generateComHand();
    const winningStatement = pickedScissorsLogic(comChoice);
    const message = createsWinningMessage(SCISSORS, comChoice, winningStatement);
    displayWinningScreen(message);
    // update scoreboard
    const playerScore = incrementPlayerScore(winningStatement);
    const computerScore = incrementComScore(winningStatement);
    const gameCount = incrementGameAmount();
    updateScore(gameCount, playerScore, computerScore);
}
const LIZARDFUNCTION = function(LIZARD) {
    const comChoice = generateComHand();
    const winningStatement = pickedLizardLogic(comChoice);
    const message = createsWinningMessage(LIZARD, comChoice, winningStatement)
    displayWinningScreen(message);
    // update scoreboard
    const playerScore = incrementPlayerScore(winningStatement);
    const computerScore = incrementComScore(winningStatement);
    const gameCount = incrementGameAmount();
    updateScore(gameCount, playerScore, computerScore);
}
const SPOCKFUNCTION = function(SPOCK){
    //find out the winner and display the winning message
    const comChoice = generateComHand();
    const winningStatement = pickedSpockLogic(comChoice);
    const message = createsWinningMessage(SPOCK, comChoice, winningStatement);
    displayWinningScreen(message);
    // update scoreboard
    const playerScore = incrementPlayerScore(winningStatement);
    const computerScore = incrementComScore(winningStatement);
    const gameCount = incrementGameAmount();
    updateScore(gameCount, playerScore, computerScore);
}
/**
 * creates winning message according to the games result
 */
function createsWinningMessage(humanChoice, comChoice, winningStatement) {
    return `You chose ${humanChoice}. The COM chose ${comChoice}. ${winningStatement} `
}
/**
 * displays winning screen content according to the games result
 */
function displayWinningScreen(message) {
    document.querySelector('.header-div').innerHTML = message
}
/**
 * reset score, games played and the display
 */
document.getElementById('reset-btn').addEventListener('click', () => {
    document.querySelector('.header-div').innerHTML = `<h3>Click a button to play against the computer.</h3>
    <h3>Choose between rock, paper, scissors, lizard and spock below:</h3>
    <h2>Make a choice!</h2>`;
    document.querySelector('#score-human').innerHTML = 0;
    document.querySelector('#score-com').innerHTML = 0;
    document.querySelector('#games-played').innerHTML = 0;
})

/**
 * increments player score by 1 if necessary
 */
function incrementPlayerScore(winningStatement) {
    const playerScore = document.querySelector('#score-human').innerHTML;
    if (winningStatement === 'Congrats. You won!') {
        return (parseFloat(playerScore) + 1);
    } else {
        return playerScore;
    }
}
/**
 * increments COM score by 1 if necessary
 */
function incrementComScore(winningStatement) {
    const comScore = document.querySelector('#score-com').innerHTML;
    if (winningStatement === 'The computer won.') {
        return (parseFloat(comScore) + 1);
    } else {
        return comScore;
    }
}
/**
 * increments gameCount
 */
function incrementGameAmount() {
    const gameAmount = document.querySelector('#games-played').innerHTML;
    return (parseFloat(gameAmount) + 1);
}
/**
 * updates the scoreboard
 */
function updateScore(gameCount, playerScore, computerScore) {
    document.querySelector('#score-human').innerHTML = playerScore;
    document.querySelector('#score-com').innerHTML = computerScore;
    document.querySelector('#games-played').innerHTML = gameCount;
}

//functions that determine the actions when a specific hand is chosen
/**
 * Logic for when Rock is picked by the player
 */
function pickedRockLogic(comChoice) {
    if (comChoice === 'paper' || comChoice === 'spock') {
        return 'The computer won.';
    } else if (comChoice === 'scissors' || comChoice === 'lizard') {
        return 'Congrats. You won!';
    } else {
        return 'It is a tie.';
    }
}
/**
 * Logic for when Paper is picked by the player
 */
function pickedPaperLogic(comChoice) {
    if (comChoice === 'rock' || comChoice === 'spock') {
        return 'Congrats. You won!';
    } else if (comChoice === 'scissors' || comChoice === 'lizard') {
        return 'The computer won.';
    } else {
        return 'It is a tie.';
    }
}
/**
 * Logic for when Scissors is picked by the player
 */
function pickedScissorsLogic(comChoice) {
    if (comChoice === 'rock' || comChoice === 'spock') {
        return 'The computer won.';
    } else if (comChoice === 'paper' || comChoice === 'lizard') {
        return 'Congrats. You won!';
    } else {
        return 'It is a tie.';
    }
}
/**
 * Logic for when Lizard is picked by the player
 */
function pickedLizardLogic(comChoice) {
    if (comChoice === 'rock' || comChoice === 'scissors') {
        return 'The computer won.';
    } else if (comChoice === 'paper' || comChoice === 'spock') {
        return 'Congrats. You won!';
    } else {
        return 'It is a tie.';
    }
}
/**
 * Logic for when Spock is picked by the player
 */
function pickedSpockLogic(comChoice) {
    if (comChoice === 'rock' || comChoice === 'scissors') {
        return 'Congrats. You won!';
    } else if (comChoice === 'paper' || comChoice === 'lizard') {
        return 'The computer won.';
    } else {
        return 'It is a tie.';
    }
}


