function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
	let product=1;
	for(let i=0; i<=args.length; i++){
		if (typeof args[i]=== "number")
			product *= args[i];
		else if (typeof args[i] === "object")
			for(let x=0; x<=args[i].length; x++){
				product *= args[i][x];
			}
	}
	return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;