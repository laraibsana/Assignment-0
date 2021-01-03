function isPalindrome(word) {
  // Insert code here;
	let str= word.split('').reverse().join('');
	if (word === str)
		return true; 
	else 
		return false;
}

// Do not edit this line;
module.exports = isPalindrome;