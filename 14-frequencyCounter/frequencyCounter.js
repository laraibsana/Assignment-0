function frequencyCounter(word) {
  // Insert code here;
	let object = {}
	for(let i = 0; i < word.length; i++){
		if (object[word[i]])
			object[word[i]] += 1;
		else
			object[word[i]] = 1;
	}
	return object;
}

// Do not edit this line;
module.exports = frequencyCounter;