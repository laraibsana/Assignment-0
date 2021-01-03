function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
	let first = nums[0];
	let n = nums.length-1;
	let last = nums[n];
	return first + last;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;