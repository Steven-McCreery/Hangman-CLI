
var letters = require("./letter.js");

var inquirer = require("inquirer");

var guesses = 9;

var round = 1;

var wrongGuesses = [];

var hangman = {

	start() {
		console.log("=====================================================");
		console.log("Hangman Round: " + round + ".\nYou have " + guesses + " guesses remaining.\nPlease see below for your previous incorrect guesses:\n" + wrongGuesses);
		console.log("=====================================================");
		console.log("Your Current Word is:\n" + letter.makeHiddenArray);
		console.log("=====================================================");
		inquirer.prompt([
			{
				type: "input",
				message: "Please guess a letter",
				name: "letter"
			}
		]).then(function(currentGuess){
			wrongGuesses.push(currentGuess.letter);
			guesses--;
			round++;
			if (guesses > 1) {

				hangman.start();
			} else {
				inquirer.prompt([
					{
						type: "confirm",
						message: "Would you like to play again?",
						name: "confirm",
						default: true
					}
				]).then(function(startOver){
					if (startOver.confirm) {
						guesses = 9;
						round = 1;
						wrongGuesses = [];
						hangman.start();
					} else{
						console.log("Thanks for playing, goodbye!");
					}
				})
			}
		})
	}


}



hangman.start();
