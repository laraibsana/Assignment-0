function pairSum(nums, target) {
  // Insert code here;
	const Num = {};
	if (nums.length <=1) 
		throw "ERROR";
	for(let i=0; i<nums.length; i++){
		let n= target- nums[i];
		if (n in Num)
			return true;
		Num[nums[i]]=i;
	}

	return false;
}

// Do not edit this line;
module.exports = pairSum;