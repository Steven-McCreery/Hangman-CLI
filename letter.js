var word = require("./word");


function letter (word) {

	console.log("letter constructor");
	
	this.word = word;

}

letter.prototype.makeHiddenAerray() {
	
	console.log("letter prototype");

	newWord = [];

	newWord = word.randomize;

	for (var i = 0; i < newWord.length; i++) {
		var underscores = underscores + "_ ";
		console.log(underscores);
	}
}

module.exports = letter;