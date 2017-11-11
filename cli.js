
var letter = require("./letter.js");

var inquirer = require("inquirer");

var guesses = 9;

var round = 1;

var wrongGuesses = [];

var valid = /[A-Za-z]/;

var generate = 0;

var wordGenerated = [];

function hangman(now) { 

	this.start = function() {

		if (generate < 1) {
			generate++;
			this.generateWord();
		}

		console.log("=====================================================");
		console.log("Hangman Round: " + round + ".\nYou have " + guesses + " guesses remaining.\nPlease see below for your previous incorrect guesses:\n" + wrongGuesses);
		console.log("=====================================================");
		console.log("Your Current Word is:\n" + wordGenerated);
		console.log("=====================================================");
		inquirer.prompt([
			{
				type: "input",
				message: "Please guess a letter",
				name: "letter",
				validate: function(input) {
					if (input.length < 1) {
						console.log("Please provide a letter as input!");
						return false;
					} else if (input.length > 1) {
						console.log("Please provide a single letter as input!");
						return false;
					} else if (!valid.test(input)) {
						console.log("Please provide an alpha character as input!");
						return false;
					} 
					return true;
				}
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
						generate = 0;
						hangman.start();
					} else{
						console.log("Thanks for playing, goodbye!");
					}
				})
			}
		})
	}


}

hangman.prototype.generateWord = function() {
	wordGenerated = [];
	wordGenerated = new Letter;
}

hangman.prototype.incorrect = function() {
	wrongGuesses.push(currentGuess.letter);
	guesses--;
	round++;
}

hangman.prototype.correct = function() {
	// wrongGuesses.push(currentGuess.letter);
	
	round++;
}



var game = new hangman;

game.start();
