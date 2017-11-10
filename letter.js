var Word = require("./word");

var word = new Word;

var underscores = "";

// console.log("Letter File's Word: " + Word);

function Letter(Word) {

	console.log("letter constructor");
	
	this.word = word;

	this.makeHiddenArray = (function() {

		newWord = [];

		newWord = this.word.randomize();

		console.log("New Word is: " + newWord);

		for (var i = 0; i < newWord.length; i++) {
			underscores = underscores + "_ ";
		}

		console.log(underscores);

		return underscores;
	})();
}
Letter();

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