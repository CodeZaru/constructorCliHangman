//Modularization - required files and variables
var wordBank = require("./wordbank.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var hangWord = wordBank.hangWord;
var word = new wordConstructor.wordConstructor(wordBank.hangWord);
var guess;
var maxGuess = 15;
//exports.letter;

//Node Required Package
var inquirer = require("inquirer");

function playerGuess(){
    console.log(word.toString());

    if(word.userGuesses.length >= maxGuess){
        console.log("You better run, because hangman is coming down from the gallows... gonna hang you!");

        return;
    }

    inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "Please enter a letter",
        validate: function(value){
        var regexp = /^[a-zA-Z]{1}$/gi;
        return regexp.test(value) ? true : "please enter only one letter";
    }
    }]).then(function(letterInput){
        var letter = letterInput.letter;
        word.findLetter(letter);

        if (word.isComplete()){
            console.log("Correct!--You won! The word was " + word.toString() + "!");
            return;
        }

        console.log("**********Next guess*********");
        console.log("You have " + (maxGuess - word.userGuesses.length) + " guesses left");
        playerGuess();
        });
}

//Starts game:
playerGuess();

