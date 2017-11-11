

// console.log("Letter File's Word: " + Word);

	
function Letter(currentWord) {
	// requiring word file
	var Word = require("./word");

	// constructing new word within letter function
	var word = new Word;
	
	// setting properties and methods
	console.log("letter constructor");
	
	var underscores = "";

	var newWord = [];

	this.newWord = newWord;
	
	this.word = word;

	this.underscores = underscores;

	this.makeHiddenArray = (function() {

		newWord = this.currentWord;

		console.log("New Word is: " + newWord);

		// taking the generated word from imported constructor and transforming it into underscores
		for (var i = 0; i < newWord.length; i++) {
			underscores = underscores + "_ ";
		}

		console.log("The New Word transformed into underscores is: " + underscores);


	})();

	return this.newWord;

	return this.underscores;
}
// Letter();

// Letter.prototype.makeHiddenArray = (function() {
	
// 	console.log("letter prototype");

// 	newWord = [];

// 	newWord = Letter.Word.randomize();

// 	for (var i = 0; i < newWord.length; i++) {
// 		var underscores = underscores + "_ ";
// 		console.log(underscores);
// 	}

// })();

module.exports = Letter;