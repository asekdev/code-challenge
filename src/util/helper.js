const prettify = values => {
	values.forEach(element => {
		console.log("\t\u2022 " + element);
	});
};

module.exports = {
	prettify
};
