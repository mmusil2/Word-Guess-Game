var compChoices = ["spiderman", "hulk", "thor", "hawkeye"];
var badGuess = [];
var compGuess = [];
var secretword = [];
var remaining = 0;
var remainingGuesses = 10;
var wins = -1;


function setWord() {
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    remaining = compGuess.length;
    badGuess = [];
    secretword = [];
    remainingGuesses = 10;
    for (var i=0; i < compGuess.length; i++) {
        secretword[i] = '_';
    }
}

function updateWord() {
    document.querySelector("#secretword").innerHTML = secretword.join(" ");
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
    document.querySelector("#badguesses").innerHTML = badGuess.join(" , ");
    document.querySelector("#wins").innerHTML = "WINS: " + wins;
    }

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    if (remainingGuesses == 0){
        setWord();
        updateWord();
    }

    else if (remaining == 0) {
        setWord();
        updateWord();
        wins++;
    }
    else {
        if (compGuess.indexOf(userGuess) == -1) {
            badGuess.push(userGuess);
            remainingGuesses--;
        }

        for (var j = 0; j < compGuess.length; j++) {
            if (compGuess[j] === userGuess) {
                secretword[j] = userGuess;
                remaining--;
            }
        }
    }
    updateWord();

console.log(remaining);
console.log(userGuess);
console.log(compGuess);
console.log(badguesses);
console.log(secretword);
};