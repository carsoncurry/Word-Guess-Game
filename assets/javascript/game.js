// Create a Batman-villain themed hangman game

// Step 1: Select the villains to serve as "suspects"

// Step 2: Create an alert telling the user the rules of the game

// Step 3: Have the computer randomly select a name,

// Step 4: Display the name with dashes
    // ex. 'joker' = "_ _ _ _ _"

// Step 5: Display the number of guesses the user has left (7)

// Step 6: Display the number of user wins

// Step 7: Display the number of user losses

// Step 8: Have the user select a letter
    // Step 8A If the guess is right, mark it on the word
    // Step 8B If the guess is wrong, mark it on the "already guessed"

// Step 9: If the user gets all letters right mark it as a win
    // "Holy Hangman, Batman! It was 'correct answer' !"

// Step 10: If the user runs out of guesses mark it as a loss
    // "Oh no! The Batmobile lost a wheel and 'correct answer' got away!"

// Step 11: Reset the game and start the process over

var suspects = [
    "bane",
    "catwoman",
    "clayface",
    "deadshot",
    "deathstroke",
    "firefly",
    "joker",
    "penguin",
    "ratcatcher",
    "riddler",
    "scarecrow",
    "ventriloquist",
    "zsasz",
]

const maxTries = 7;

var wins = 0;
var losses = 0;
var guessesLeft = maxTries;

var currentSuspectText = document.getElementById("currentSuspect-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text");
var totalWinsText = document.getElementById("totalWins-text");
var totalLossesText = document.getElementById("totalLosses-text");

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();

    var computerGuess = suspects[Math.floor(Math.random() * suspects.length)];

    if (userGuess === computerGuess) {

    }

};

// h5 id="currentSuspect"
// h5 id="guessesLeft"
// h5 id="lettersGuessed"
// h5 id="totalWins"
// h5 id="totalLosses"

// referenced: http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial