function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
	let NumOfBoolean = 0;
	for(let i=0; i<= arr.length; i++) {
		if (typeof arr[i]=== "boolean")
			NumOfBoolean+=1; 
		
	}
	let NumOfString = 0;
	for(let i=0; i<= arr.length; i++) {
		if (typeof arr[i]=== "string")
			NumOfString+=1; 
	}
	return NumOfBoolean + NumOfString;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;