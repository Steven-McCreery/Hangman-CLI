
function Word(currentWord) {
	
	console.log("word constructor");

	this.currentWord = currentWord;

	this.randomize = function() {
		
		Word.available = [
			"one", "two", "three"
		];

		console.log(Word.available);

		Word.randomWord = Math.floor(Math.random() * Word.available.length);
		Word.currentWord = Word.available[Word.randomWord];
		console.log(Word.currentWord);
		return Word.currentWord;

	};

}

var bob = new Word;
bob.randomize();

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
