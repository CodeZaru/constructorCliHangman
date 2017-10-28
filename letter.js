/*Letter: Used for each letter in the current word. Each letter object should either display an 
underlying character, or a blank placeholder (such as an underscore), depending on whether or not
 the user has guessed the letter. This should contain letter specific logic and data.*/

function letter(value){
    this.value = value;
    this.show = false;
    if (this.value == " "){
        this.show = true;
    }
}

letter.prototype.printInfo = function(){
    if(this.show){
        return this.value;
    }
    return "_ ";
}

exports.letter = letter;