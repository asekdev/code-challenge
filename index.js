const { Person } = require("./src/model/Person");
const { prettify } = require("./src/util/helper");
const { getData } = require("./src/api");
const { genderExists } = require("./src/util/helper");

const main = async () => {
	let data;
	let owners = [];

	//Get data
	await getData()
		.then(res => {
			data = res.data;
		})
		.catch(err => {
			console.log("Error: ", err.message);
		});

	for (let i = 0; i < data.length; i++) {
		let currentGenderObject;

		if (!genderExists(owners, data, i)) {
			owners.push(new Person(data[i].gender));
		}

		//Locate Person object in owners so we can operate on it
		currentGenderObject = owners.find(g => g["gender"] === data[i].gender);

		if (data[i].pets) {
			data[i].pets.forEach(pet => {
				if (pet.type === "Cat") {
					currentGenderObject.addPet(pet.name);
				}
			});
		}
	}

	//Sort the arrays
	owners.forEach(person => {
		person.getAllPets().sort();
	});

	//Print result
	owners.forEach(person => {
		console.log(person.getGender());
		prettify(person.getAllPets());
	});
};

main();

module.exports = {
	genderExists
};
