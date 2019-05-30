const prettify = values => {
	values.forEach(element => {
		console.log("\t- " + element);
	});
};

module.exports = {
	prettify
};
