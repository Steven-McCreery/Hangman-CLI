
var letters = require("./letter.js");

var prompt = require("prompt");

var guesses = 9;

var round = 1;

var hangman = {

	start() {
		console.log("==========================");
		console.log("Hangman Round: " + round + ".\nYou have " + guesses + " guesses remaining.");
		console.log("==========================");
		console.log("Guess a letter ");
	}


}



hangman.start();
