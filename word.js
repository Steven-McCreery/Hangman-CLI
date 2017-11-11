
function Word(currentWord) {
	
	console.log("word constructor");

	this.currentWord = currentWord;

	this.randomize = (function() {
		
		this.available = [
			"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
		];

		console.log(this.available);

		this.randomWord = Math.floor(Math.random() * this.available.length);
		this.currentWord = this.available[this.randomWord];
		console.log(this.currentWord);
		return this.currentWord;

	})();

}

// Word();
// var bob = new Word;
// bob.randomize();

// Word.prototype.randomize = (function() {
	
// 	console.log("word prototype");
	
// 	Word.available = [
// 		"one", "two", "three"
// 	];

// 	console.log(Word.available);

// 	Word.randomWord = Math.floor(Math.random() * Word.available.length);
// 	Word.currentWord = Word.available[Word.randomWord];
// 	console.log(Word.currentWord);

// })();


module.exports = Word;
