/*Word: Used to create an object representing the current word the
 user is attempting to guess. This should contain word specific logic and data.
*/

var letterConstructor = require("./letter.js");

function word(value){
    this.value = value;
    this.letters = [];
    this.userGuesses = "";
    for (var i = 0; i < this.value.length; i++){
        this.letters.push(new letterConstructor.letter(this.value[i]));
    }
};

word.prototype.isComplete = function(){
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) return false;
    }
    return true;
};

word.prototype.findLetter = function(letter){
    var lowerCaseLetter = letter.toLowerCase();

    if (this.userGuesses.indexOf(lowerCaseLetter) != -1){
        return "Letter previously guessed!";
    }
    //add letter to userGuesses
    this.userGuesses += lowerCaseLetter; 
    
    for (var i = 0; i < this.letters.length; i++){
        if(this.letters[i].value.toLowerCase() == lowerCaseLetter){
            this.letters[i].show = true;
        }
    }
};

word.prototype.toString = function() {
    var output = " ";

    for (var i = 0; i < this.letters.length; i++){
        output += this.letters[i].printInfo();
    }
    return output;
};

exports.wordConstructor = word;