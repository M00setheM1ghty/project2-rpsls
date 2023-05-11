// variables
let comChoice;
let humanChoice;
let winningStatement;
const ROCK = "rock"
const TIE = 'It is a tie.'

/**
 * generate a random number between 0 and 4 to choose a 'hand' for the computer
 */
function generateComHand() {
    randomNum = Math.floor(Math.random() * 5);
    switch (randomNum) {
        case 0:
            return comChoice = 'rock';
        case 1:
            return comChoice = 'paper';
        case 2:
            return comChoice = 'scissors';
        case 3:
            return comChoice = 'lizard';
        case 4:
            return comChoice = 'spock'
        default:
            return;
    }
}

// event listners for the buttons with functions
let rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', () => { pickedRockLogic(); createsWinningMessage(ROCK) })

let paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', () => { pickedPaperLogic(); createsWinningMessage() })

let scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click', () => { pickedScissorsLogic(); createsWinningMessage() })

let lizardButton = document.querySelector('#lizard')
lizardButton.addEventListener('click', () => { pickedLizardLogic(); createsWinningMessage() })

let spockButton = document.querySelector('#spock')
spockButton.addEventListener('click', () => { pickedSpockLogic(); createsWinningMessage() })

//functions that determine the actions when a specific hand is chosen
/**
 * Logic for when Rock is picked by the player
 */
function pickedRockLogic() {
    generateComHand();
    humanChoice = 'rock';
    if (comChoice === 'rock') {
        return winningStatement = 'It is a tie.'
    } else if (comChoice === 'paper') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'scissors') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'lizard') {
        return winningStatement = 'Congrats. You won!'
    } else {
        return winningStatement = 'The computer won.'
    }
}
/**
 * Logic for when Paper is picked by the player
 */
function pickedPaperLogic() {
    generateComHand();
    humanChoice = 'paper';
    if (comChoice === 'rock') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'paper') {
        return winningStatement = 'It is a tie.'
    } else if (comChoice === 'scissors') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'lizard') {
        return winningStatement = 'The computer won.'
    } else {
        return winningStatement = 'Congrats. You won!'
    }
}
/**
 * Logic for when Scissors is picked by the player
 */
function pickedScissorsLogic() {
    generateComHand();
    humanChoice = 'scissors';
    if (comChoice === 'rock') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'paper') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'scissors') {
        return winningStatement = 'It is a tie.'
    } else if (comChoice === 'lizard') {
        return winningStatement = 'Congrats. You won!'
    } else {
        return winningStatement = 'The computer won.'
    }
}
/**
 * Logic for when Lizard is picked by the player
 */
function pickedLizardLogic() {
    generateComHand();
    humanChoice = 'lizard';
    if (comChoice === 'rock') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'paper') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'scissors') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'lizard') {
        return winningStatement = 'It is a tie.'
    } else {
        return winningStatement = 'Congrats. You won!'
    }
}
/**
 * Logic for when Spock is picked by the player
 */
function pickedSpockLogic() {
    generateComHand();
    humanChoice = 'spock';
    if (comChoice === 'rock') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'paper') {
        return winningStatement = 'The computer won.'
    } else if (comChoice === 'scissors') {
        return winningStatement = 'Congrats. You won!'
    } else if (comChoice === 'lizard') {
        return winningStatement = 'The computer won.'
    } else {
        return winningStatement = 'It is a tie.'
    }
}

// variables for createWinningMessage function
let winningMessage;
/**
 * creates winning message according to the games result
 */
function createsWinningMessage(humanChoice, comChoice, winningStatement) {
    winningMessage = `You chose ${humanChoice}. The COM chose ${comChoice}. ${winningStatement} `
}

// variables for displayWinningScreen function
let targetDiv = document.querySelector('.header-div');
let displayMessage;
/**
 * displays winning screen content according to the games result
 */
function displayWinningScreen() {
    displayMessage = document.createElement('div');
    displayMessage.innerText = toString(winningMessage);
}