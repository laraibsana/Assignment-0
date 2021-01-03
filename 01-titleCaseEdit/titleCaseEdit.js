function titleCaseEdit(title) {
  // Insert code here;
	var CapitalizeString = (str) => str[0].toUpperCase() +
		str.slice(1).toLowerCase();
	var CapitalizeWords = (str) => str.split(' ').map(CapitalizeString).join(' ');
	return CapitalizeWords(title);
}

// Do not edit this line;
module.exports = titleCaseEdit;