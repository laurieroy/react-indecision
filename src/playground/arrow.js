// const square = function (x) {
// 	return x * x;
// }

// console.log(square(8))
//  ES5 syntax
// const squareArrow = (x) =>  {
// 	return x ** 2
// }
// // ES6 expression syntax
// const squareArrow = (x) =>  x ** 2

// console.log(squareArrow(8))

// get first name
var fullName = 'Laurie Roy'; // assuming is valid

if (fullName) {
	const firstName = fullName.split(' ')[0]
	console.log(firstName)
}

// reg arrow function
const getFirstName = (fullName) => { 
	return fullName.split(' ')[0]
}
console.log(getFirstName(fullName))

// arrow 
const getFirstNameArrow = (fullName) => fullName.split(' ')[0]
console.log(getFirstNameArrow(fullName))