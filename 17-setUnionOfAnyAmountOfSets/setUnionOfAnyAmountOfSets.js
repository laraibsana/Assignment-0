function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
	let NewSet= new Set();
	for (let i of args){
		for(let j of i){
			NewSet.add(j);
		}
	}
	return NewSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;