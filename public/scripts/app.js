'use strict';

// Differences between ES5 and ES6
var add = function add(a, b) {
	console.log(arguments); // all 3 args passed in would show even though only 2 defined
	return a + b;
};
console.log(add(5, 1, 100));

var addArrow = function addArrow(a, b) {
	// console.log(arguments)	// all 3 args passed in would show even though only 2 defined
	return a + b;
};
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

var user = {
	name: 'Laurie',
	cities: ['Tampa', 'Charleston', 'Honolulu', 'Portland'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};
console.log(user.printPlacesLived());

// challenge

var multiplier = {
	multiplyBy: 2,
	numbers: [1, 2, 3],
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};
// number -array of numbers
// multiplyBy -single number
// multiple return new array where numbers have been multiplied
console.log(multiplier.multiply());
