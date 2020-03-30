/* Project: Games of Chance
 * Author: Daniel Xiang
 * Version: 1.0.0
 * Since: 2020-03-12
 */

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    // Generate a random number btw 0 - 9
    return Math.floor(Math.random() * 10);
}

function getAbsDist(num1, num2) {
    return Math.abs(num1 - num2);
}

function compareGuesses(userGuess, computerGuess, target) {
    /* Determine whether the user wins or not based on  
       how close his or her guess is to the target. */
    let result = null;
    let userDist = getAbsDist(userGuess, target);
    let compDist = getAbsDist(computerGuess, target);
    (userDist <= compDist) ? result = true : result = false;
    return result;
}

function updateScore(winner) {
    // Update winner's score
    (winner === 'human') ? humanScore++ : computerScore++;
}

function advanceRound() {
    // Go to next round
    currentRoundNumber++;
}
