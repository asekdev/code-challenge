const { Person } = require("./src/model/Person");
const { prettify } = require("./src/util/helper");
const { getData } = require("./src/api");

const main = async () => {
	let data;
	let genderExists;
	let owners = [];

	//Get data
	await getData()
		.then(res => {
			data = res.data;
		})
		.catch(err => {
			console.log("Something happened when requesting data");
			console.log("Error: ", err.message);
			process.exit();
		});

	for (let i = 0; i < data.length; i++) {
		let currentGenderObject;

		genderExists = owners.some(g => g.getGender() === data[i].gender);

		if (!genderExists) {
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
