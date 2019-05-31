class Person {
	constructor(gender) {
		this.gender = gender;
		this.pets = [];
	}

	getGender() {
		return this.gender;
	}

	setGender(gender) {
		this.gender = gender;
	}

	addPet(pet) {
		this.pets.push(pet);
	}

	getAllPets() {
		return this.pets;
	}
}

module.exports = {
	Person
};
