// variables
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const LIZARD = "lizard"
const SPOCK = "spock"
const BUTTONS = document.querySelectorAll('[data-button]');

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

// event listeners for the buttons
// returned values are passed on to the other functions as parameters
document.querySelector('#rock').addEventListener('click', () => {
    const comChoice = generateComHand();
    const winningStatement = pickedRockLogic(comChoice);
    const message = createsWinningMessage(ROCK, comChoice, winningStatement);
    displayWinningScreen(message);
})
document.querySelector('#paper').addEventListener('click', () => {
    const comChoice = generateComHand();
    const winningStatement = pickedPaperLogic(comChoice);
    const message = createsWinningMessage(PAPER, comChoice, winningStatement);
    displayWinningScreen(message);
})
document.querySelector('#scissors').addEventListener('click', () => {
    const comChoice = generateComHand();
    const winningStatement = pickedScissorsLogic(comChoice);
    const message = createsWinningMessage(SCISSORS, comChoice, winningStatement)
    displayWinningScreen(message);
})
document.querySelector('#lizard').addEventListener('click', () => {
    const comChoice = generateComHand();
    const winningStatement = pickedLizardLogic(comChoice);
    const message = createsWinningMessage(LIZARD, comChoice, winningStatement)
    displayWinningScreen(message);
})
document.querySelector('#spock').addEventListener('click', () => {
    const comChoice = generateComHand();
    const winningStatement = pickedSpockLogic(comChoice);
    const message = createsWinningMessage(SPOCK, comChoice, winningStatement)
    displayWinningScreen(message);
})
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
    document.querySelector('.header-div').innerHTML = message;
}
/**
 * reset score, games played and the display
 */

document.getElementById('reset-btn').addEventListener('click', () => {
    document.querySelector('.header-div').innerHTML = `<h3>Click a button to play against the computer.</h3>
    <h3>Choose between rock, paper, scissors, lizard and spock below:</h3>
    <h2>Make a choice!</h2>`;
    document.querySelector('#score').innerHTML = 0;
    document.querySelector('#games-played').innerHTML = 0;
})

//functions that determine the actions when a specific hand is chosen
/**
 * Logic for when Rock is picked by the player
 */
function pickedRockLogic(comChoice) {
    if (comChoice === 'rock') {
        return 'It is a tie.'
    } else if (comChoice === 'paper') {
        return 'The computer won.'
    } else if (comChoice === 'scissors') {
        return 'Congrats. You won!'
    } else if (comChoice === 'lizard') {
        return 'Congrats. You won!'
    } else {
        return 'The computer won.'
    }
}
/**
 * Logic for when Paper is picked by the player
 */
function pickedPaperLogic(comChoice) {
    if (comChoice === 'rock') {
        return 'Congrats. You won!'
    } else if (comChoice === 'paper') {
        return 'It is a tie.'
    } else if (comChoice === 'scissors') {
        return 'The computer won.'
    } else if (comChoice === 'lizard') {
        return 'The computer won.'
    } else {
        return 'Congrats. You won!'
    }
}
/**
 * Logic for when Scissors is picked by the player
 */
function pickedScissorsLogic(comChoice) {
    if (comChoice === 'rock') {
        return 'The computer won.'
    } else if (comChoice === 'paper') {
        return 'Congrats. You won!'
    } else if (comChoice === 'scissors') {
        return 'It is a tie.'
    } else if (comChoice === 'lizard') {
        return 'Congrats. You won!'
    } else {
        return 'The computer won.'
    }
}
/**
 * Logic for when Lizard is picked by the player
 */
function pickedLizardLogic(comChoice) {
    if (comChoice === 'rock') {
        return 'The computer won.'
    } else if (comChoice === 'paper') {
        return 'Congrats. You won!'
    } else if (comChoice === 'scissors') {
        return 'The computer won.'
    } else if (comChoice === 'lizard') {
        return 'It is a tie.'
    } else {
        return 'Congrats. You won!'
    }
}
/**
 * Logic for when Spock is picked by the player
 */
function pickedSpockLogic(comChoice) {
    if (comChoice === 'rock') {
        return 'Congrats. You won!'
    } else if (comChoice === 'paper') {
        return 'The computer won.'
    } else if (comChoice === 'scissors') {
        return 'Congrats. You won!'
    } else if (comChoice === 'lizard') {
        return 'The computer won.'
    } else {
        return 'It is a tie.'
    }
}


