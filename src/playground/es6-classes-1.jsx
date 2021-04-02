class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}

	getGreeting() {
		return `Hi. I am ${ this.name }!`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major
	}
	getDescription() {
		let description = super.getDescription()

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`
		}
		return description
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getDescription() {
		let description = super.getDescription()

		if (this.homeLocation) {
			description += `${this.name}'s home is ${this.homeLocation}`
		}
	}
	getGreeting() {
		let greeting = super.getGreeting();

		if (this.homeLocation) {
			greeting += ` My home is ${this.homeLocation}`
		}
		return greeting;
	}
}
const me = new Traveler('Laurie Roy', 21, 'the road');
const other = new Traveler(undefined, undefined, 'Nowhere');

console.log(me.getGreeting())
console.log(other.getGreeting())