// variables
let comChoice;
let humanChoice;
let winningStatement;

/**
 * generate a random number between 0 and 4 to choose a 'hand' for the computer
 */
function generateComHand() {
    randomNum = Math.floor(Math.random() * 5);
    switch (randomNum) {
        case 0:
            return comChoice = 'rock';
            break;
        case 1:
            return comChoice = 'paper';
            break;
        case 2:
            return comChoice = 'scissors';
            break;
        case 3:
            return comChoice = 'lizard';
            break;
        case 4:
            return comChoice = 'spock'
            break;
        default:
            return;
    }
}

// event listners for the buttons
let rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', pickedRockLogic)

let paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', pickedPaperLogic)

let scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click', pickedScissorsLogic)

let lizardButton = document.querySelector('#lizard')
lizardButton.addEventListener('click', pickedLizardLogic)

let spockButton = document.querySelector('#spock')
spockButton.addEventListener('click', pickedSpockLogic)

//functions that determine the actions when a specific hand is chosen

/**
 * Logic for when Rock is picked by the player
 */
function pickedRockLogic() {
    generateComHand();
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

/* 
Scissors cuts Paper; 
Paper covers Rock; 
Rock crushes Lizard; 
Lizard poisons Spock; 
Spock smashes Scissors; 
Scissors decapitates Lizard, 
Lizard eats Paper; 
Paper disproves Spock; 
Spock vaporizes Rocks
 and finally, Rock crushes Scissors.
*/