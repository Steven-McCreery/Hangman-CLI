
// requiring the letter file 
var Letter = require("./letter");

// requiring the inquirer npm package
var inquirer = require("inquirer");

// setting initial remaining guesses
var guesses = 9;

// starting the rounds counter at one
var round = 1;

// setting blank array for receiving incorrect guesses
var wrongGuesses = [];

// setting blank array for receiving correct guesses
var rightGuesses = [];

// regex for validating user input as letters
var valid = /[A-Za-z]/;

// preventing looping function from regenerating 
var generate = 0;

var under = [];
// hangman constructor function
function Hangman(letter) {

	this.letter = function() {
		var letter = new Letter;
		this.letter = letter;
		// wordGenerated = letter.underscores;
		under = this.underscores;
		console.log(this.underscores);
		// console.log("the current word generated is: " + under);
		this.start();
	}
	
	// running function within hangman constructor
	this.start = function() {

		// if (generate < 1) {
		// 	generate++;
		// 	this.generateWord();
		// 	under = this.underscores;
		// }

		// logging out a user interface that responds to the entries
		console.log("=====================================================");
		console.log("Hangman Round: " + round + ".\nYou have " + guesses + " guesses remaining.\nPlease see below for your previous incorrect guesses:\n" + wrongGuesses);
		console.log("=====================================================");
		console.log("Your Current Word is:\n" + under);
		console.log("=====================================================");
		// using inquirer to receive and validate user's input
		inquirer.prompt([
			{
				type: "input",
				message: "Please guess a letter",
				name: "guess",
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
			// receiving the user's input
			wrongGuesses.push(currentGuess.guess);
			guesses--;
			round++;
			if (guesses > 0) {
				game.start();
			} else {
				// using inquirer to determine if another game is wanting to be played
				inquirer.prompt([
					{
						type: "confirm",
						message: "Would you like to play again?",
						name: "confirm",
						default: true
					}
				]).then(function(startOver){
					// resetting game if the user wants to play again
					if (startOver.confirm) {
						guesses = 9;
						round = 1;
						wrongGuesses = [];
						generate = 0;
						game.start();
					} else{
						// ending the game
						console.log("Thanks for playing, goodbye!");
					}
				})
			}
		})
	}


}

// setting game to a new instance of the hangman constructor
var game = new Hangman;

// making a prototype function to handle the generation of a new word/underscores
Hangman.prototype.generateWord = function() {
	// console.log("prototype function is running");
	// letter = new Letter;
	// wordGenerated = letter.underscores;
	// this.underscores = letter.underscores;
	// console.log("the current word generated is: " + wordGenerated);
}

Hangman.prototype.incorrect = function() {
	// wrongGuesses.push(currentGuess.letter);
	// guesses--;
	// round++;
}

Hangman.prototype.correct = function() {
	// rightGuesses.push(currentGuess.letter);
	// round++;
}

// starting the game when called from the console
game.letter();


