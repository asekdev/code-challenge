const { test } = require("./src/api");
const { Person } = require("./src/model/Person");
const { prettify } = require("./src/util");

let jess = new Person("female");

jess.addPet("dog");
jess.addPet("cat");
jess.addPet("bird");
jess.addPet("lizard");

// jess.removeSinglePet("cat");

let sortedValues = jess.getAllPets().sort();

prettify(sortedValues);
test();
