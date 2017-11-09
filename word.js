
function word = (currentWord, available) {
	
	console.log("word constructor");

	this.currentWord = currentWord;


}

word.prototype.randomize() {
	
	console.log("word prototype");
	
	available = [
		"one", "two", "three"
	],

	word.currentWord = funciton() {
		Math.floor(Math.random() * word.available.length);
	}

}


module.exports = word;
