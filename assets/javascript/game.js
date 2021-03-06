var compChoices = [
    ironman = {name: "IRON MAN", link: "ironman.jpg"},
    hulk = {name: "HULK", link: "hulk.jpg"},
    thor = {name: "THOR", link: "thor.jpg"},
    captainamerica = {name: "CAPTAIN AMERICA", link: "captainamerica.jpg"},
    hawkeye = {name: "HAWKEYE", link: "hawkeye.jpg"},
    blackwidow = {name: "BLACK WIDOW", link: "blackwidow.jpg"},
    spiderman = {name: "SPIDER-MAN", link: "spiderman.jpg"},
    antman = {name: "ANT-MAN", link: "antman.jpg"},
    blackpanther = {name: "BLACK PANTHER", link: "blackpanther.jpg"},
    doctorstrange = {name: "DOCTOR STRANGE", link: "doctorstrange.jpg"},
    vision = {name: "VISION", link: "vision.jpg"},
    wintersoldier = {name: "WINTER SOLDIER", link: "wintersoldier.jpg"},
    warmachine = {name: "WAR MACHINE", link: "warmachine.jpg"},
    valkyrie = {name: "VALKYRIE", link: "valkyrie.jpg"},
    starlord = {name: "STAR-LORD", link: "starlord.jpg"},
    rocketraccoon = {name: "ROCKET RACCOON", link: "rocketraccoon.jpg"},
    gamora = {name: "GAMORA", link: "gamora.jpg"},
    drax = {name: "DRAX", link: "drax.jpg"},
    groot = {name: "GROOT", link: "groot.jpg"},
    captainmarvel = {name: "CAPTAIN MARVEL", link: "captainmarvel.jpg"},
];
var goodGuess = [];
var badGuess = [];
var compword = [];
var secretword = [];
var remaining = 0;
var remainingGuesses = 10;
var wins = 0;
var solvedword;
var compImg = 'avengers.png';

// sets new word and resets all vars
function setWord() {
    random = Math.floor(Math.random() * compChoices.length)
    compword = compChoices[random].name;
    remaining = compword.length;
    goodGuess = [];
    badGuess = [];
    secretword = [];
    remainingGuesses = 10;
    // sets secret word to underscores (_) equal to length of computer's choice
    // checks for dashes (-) and spaces ( ) and replaces at same index
    for (var i=0; i < compword.length; i++) {
        if (compword[i] == '-') {
            secretword[i] = '-';
            remaining--;
        }
        else if (compword[i] == ' ') {
            secretword[i] = '\xA0';
            remaining--;
        }
        else {
        secretword[i] = '_';
        }
    }
}

//makes initial page
function makePage() {
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("solvedimg").src='assets/images/' + compImg;
}

// updates html page
function updateWord() {
    document.querySelector("#secretword").innerHTML = secretword.join(" ");
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
    document.querySelector("#badguesses").innerHTML = badGuess.join(" , ");
    }

function updateSolved() {
    document.querySelector("#wins").innerHTML = "WINS: " + wins;
    document.querySelector("#solved").innerHTML = solvedword;
    document.getElementById("solvedimg").src='assets/images/' + compImg;
}

makePage();
setWord();

document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();

    // checks if letter was already guessed
    if (goodGuess.indexOf(userGuess) == -1 && badGuess.indexOf(userGuess) == -1) {
        // ends current word if guesses run out
        if (remainingGuesses == 0) {
            setWord();
            updateWord();
        }
        // ends current word if guessed correctly
        else if (remaining == 0) {
            solvedword = compword;
            compImg = compChoices[random].link;
            wins++;
            setWord();
            updateWord();
            updateSolved();
            // function to display new img and title
        }
        else {
            // if guess is not in word
            if (compword.indexOf(userGuess) == -1) {
                badGuess.push(userGuess);
                remainingGuesses--;
            }
            // loop to check if guess is in computer's word then
            // push good guess to secret word in same index
            for (var j = 0; j < compword.length; j++) {
                if (compword[j] === userGuess) {
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
console.log(compword);
console.log(goodGuess);
console.log(badGuess);
console.log(secretword);
};