const prettify = values => {
	values.forEach(element => {
		console.log("\t\u2022 " + element);
	});
};

const genderExists = (arr, data, index) => {
	return arr.some(g => g.getGender() === data[index].gender);
};

module.exports = {
	prettify,
	genderExists
};
