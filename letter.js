var Word = require("./word");

var word = new Word;

console.log("Letter File's Word: " + Word);

function Letter(Word) {

	console.log("letter constructor");
	
	this.Word = Word;

}

Letter();

Letter.prototype.makeHiddenArray = (function() {
	
	console.log("letter prototype");

	newWord = [];

	newWord = Letter.randomize();

	for (var i = 0; i < newWord.length; i++) {
		var underscores = underscores + "_ ";
		console.log(underscores);
	}

})();

module.exports = Letter;