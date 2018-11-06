var compChoices = [
    "iron man",
    "hulk",
    "thor",
    "captain america",
    "hawkeye",
    "black widow",
    "spider-man",
    "ant-man",
    "black panther",
    "doctor strange"
];
var goodGuess = [];
var badGuess = [];
var compGuess = [];
var secretword = [];
var remaining = 0;
var remainingGuesses = 10;
var wins = -1;

// sets new word and resets all vars
function setWord() {
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    remaining = compGuess.length;
    goodGuess = [];
    badGuess = [];
    secretword = [];
    remainingGuesses = 10;
    for (var i=0; i < compGuess.length; i++) {
        if (compGuess[i] == '-') {
            secretword[i] = '-';
            remaining--;
        }
        else if (compGuess[i] == ' ') {
            secretword[i] = '\xA0';
            remaining--;
        }
        else {
        secretword[i] = '_';
        }
    }
}

// updates html page
function updateWord() {
    document.querySelector("#secretword").innerHTML = secretword.join(" ");
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
    document.querySelector("#badguesses").innerHTML = badGuess.join(" , ");
    document.querySelector("#wins").innerHTML = "WINS: " + wins;
    }

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    // checks if letter was already guessed
    if (goodGuess.indexOf(userGuess) == -1 && badGuess.indexOf(userGuess) == -1) {
        // ends current word if guesses run out
        if (remainingGuesses == 0){
            setWord();
            updateWord();
        }
        // ends current word if guessed correctly
        else if (remaining == 0) {
            setWord();
            updateWord();
            wins++;
        }
        else {
            // if guess is not in word
            if (compGuess.indexOf(userGuess) == -1) {
                badGuess.push(userGuess);
                remainingGuesses--;
            }
            // loop to check if guess is in computer's word then
            // push good guess to secret word in same index
            for (var j = 0; j < compGuess.length; j++) {
                if (compGuess[j] === userGuess) {
                    secretword[j] = userGuess;
                    goodGuess.push(userGuess);
                    remaining--;
                }
            }
        }
        updateWord();
    }
    
console.log(remaining);
console.log(userGuess);
console.log(compGuess);
console.log(goodGuess);
console.log(badGuess);
console.log(secretword);
};