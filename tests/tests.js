const chai = require("chai");
const expect = chai.expect;
const { Person } = require("../src/model/Person");
const { mockJSON } = require("../src/util/mock");

let mockOwnersArray = [];
let mockData = mockJSON;

describe("Data Filtering", () => {
	before(() => {
		for (let i = 0; i < mockData.length; i++) {
			let currentGenderObject;
			let genderExists = mockOwnersArray.some(g => g.getGender() === mockData[i].gender);

			if (!genderExists) {
				mockOwnersArray.push(new Person(mockData[i].gender));
			}

			currentGenderObject = mockOwnersArray.find(g => g["gender"] === mockData[i].gender);

			if (mockData[i].pets) {
				mockData[i].pets.forEach(pet => {
					if (pet.type === "Cat") {
						currentGenderObject.addPet(pet.name);
					}
				});
			}
		}
		mockOwnersArray.forEach(person => {
			person.getAllPets().sort();
		});
	});
	it("Should have unique genders only", () => {
		expect(mockOwnersArray).to.have.lengthOf(3);
	});
	it("Should add cats accordingly to each unique gender", () => {
		expect(mockOwnersArray[0].pets).to.have.lengthOf(3);
		expect(mockOwnersArray[1].pets).to.have.lengthOf(2);
		expect(mockOwnersArray[2].pets).to.have.lengthOf(2);
	});
	it("Should ensure cats are sorted alphabetically", () => {
		expect(mockOwnersArray[0].pets[0]).to.equal("Autumn");
		expect(mockOwnersArray[1].pets[0]).to.equal("Binx");
		expect(mockOwnersArray[2].pets[0]).to.equal("Hunter");
	});
});
