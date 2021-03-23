// Differences between ES5 and ES6
const add = function (a,b){
	console.log(arguments)	// all 3 args passed in would show even though only 2 defined
	return a + b;
}
console.log(add(5, 1, 100));

const addArrow = (a,b) => {
	// console.log(arguments)	// all 3 args passed in would show even though only 2 defined
	return a + b;
}
console.log(addArrow(5, 1, 100));	

// arg obj is no longer bound
// this is no longer bound w/arrow functions
// const user = {
// 	name: 'Laurie',
// 	cities: ['Tampa', 'Charleston', 'Honolulu', 'Portland'],
// 	printPlacesLived: function () {
// 		this.cities.forEach((city) => {
// 			console.log(this.name + ' has lived in ' + city)
// 		})
// 	}
// }
// const user = {
// 	name: 'Laurie',
// 	cities: ['Tampa', 'Charleston', 'Honolulu', 'Portland'],
// 	printPlacesLived() {
// 		this.cities.forEach((city) => {
// 			console.log(this.name + ' has lived in ' + city)
// 		})
// 	}
// }

// user.printPlacesLived()

// const user = {
// 	name: 'Laurie',
// 	cities: ['Tampa', 'Charleston', 'Honolulu', 'Portland'],
// 	printPlacesLived() {
// 		 cityMessages = this.cities.map((city) => {
// 			return this.name + ' has lived in ' + city;
// 		});
// 		return cityMessages;
// 		}
// 	};
// console.log(user.printPlacesLived());

const user = {
	name: 'Laurie',
	cities: ['Tampa', 'Charleston', 'Honolulu', 'Portland'],
	printPlacesLived() {
		return this.cities.map((city) =>  this.name + ' has lived in ' + city);
	}
};
console.log(user.printPlacesLived());

// challenge

const multiplier = {
	multiplyBy: 2,
	numbers: [1, 2, 3],
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy)
	}
};
// number -array of numbers
// multiplyBy -single number
// multiple return new array where numbers have been multiplied
console.log(multiplier.multiply());