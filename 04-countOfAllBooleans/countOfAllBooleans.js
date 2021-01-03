function countOfAllBooleans(arr) {
  // Insert code here;
	let NumOfBoolean = 0;
	for(let i=0; i<= arr.length; i++) {
		if (typeof arr[i]=== "boolean")
		NumOfBoolean+=1; 
	}
	return NumOfBoolean;
}

// Do not edit this line;
module.exports = countOfAllBooleans;