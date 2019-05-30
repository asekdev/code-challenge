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

	removeSinglePet(name) {
		console.log("pets before", this.pets);
		for (let i = 0; i < this.pets.length; i++) {
			if (this.pets[i] === name) {
				this.pets.splice(i, 1);
				return;
			}
		}
		console.log("pets after", this.pets);
	}
}

module.exports = {
	Person
};
