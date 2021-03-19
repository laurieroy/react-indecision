var nameVar = "Laurie";
// var nameVar = "Mike";

console.log('nameVar:', nameVar);

let nameLet = 'Jen';
// let nameLet = "Jon"
console.log('nameLet:', nameLet);

const nameConst = "Jon"
const name2Const = "Gunther"
console.log('nameConst:', nameConst);

function getPetName() {
	var petName = ''
	return petName
}
// though returned not available to parent global scope
// getPetName();
// console.log(petName)

const petName = getPetName();	// works if define in current scope
console.log(petName)

var fullName = 'Laurie Roy'; // assuming is valid

// if (fullName) {
// 	const firstName = fullName.split(' ')[0]
// 	console.log(firstName)
// }

// console.log(firstName)	// not defined

let firstName

if (fullName) {
	firstName = fullName.split(' ')[0]
	console.log(firstName)
}

console.log(firstName)	// now works
