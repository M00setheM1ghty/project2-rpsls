// variables
let comChoice;
let humanChoice;
/**
 * generate a random number between 0 and 4 to choose a 'hand' for the computer
 */
function generateComHand() {
    randomNum = Math.floor(Math.random()*5);
    switch(randomNum){
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
            
}

//functions that determine the actions when a specific hand is chosen

/**
 * Logic for when Rock is picked by the player
 */
function pickedRockLogic() {}
/**
 * Logic for when Paper is picked by the player
 */
function pickedPaperLogic() {}
/**
 * Logic for when Scissors is picked by the player
 */
function pickedScissorsLogic() {}
/**
 * Logic for when Lizard is picked by the player
 */
function pickedLizardLogic() {}
/**
 * Logic for when Spock is picked by the player
 */
function pickedSpockLogic() {}
