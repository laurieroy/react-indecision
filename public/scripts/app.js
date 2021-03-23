"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer?",
	options: ['One', 'Two']
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? "Here are your options" : "No Options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			app.options[0]
		),
		React.createElement(
			"li",
			null,
			app.options[1]
		)
	)
);

var count = 0;
var addOne = function addOne() {
	console.log('orig count: ' + count);
	count++;
	renderCounterApp();
	console.log('count:' + count);
};
var minusOne = function minusOne() {
	console.log('orig count: ' + count);
	count--;
	renderCounterApp();
	console.log('minusOne');
};
var reset = function reset() {
	console.log('reset');
	count = 0;
	renderCounterApp();
	console.log('reset' + count);
};
var someId = 'myidhere';
var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Count: ",
		count
	),
	React.createElement(
		"button",
		{ onClick: addOne, id: "addOne", className: "btn" },
		"+1"
	),
	React.createElement(
		"button",
		{ onClick: minusOne, id: "minusOne", className: "btn" },
		"-1"
	),
	React.createElement(
		"button",
		{ onClick: reset, id: "reset", className: "btn" },
		"reset"
	)
);
console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Count: ",
			count
		),
		React.createElement(
			"button",
			{ onClick: addOne, id: "addOne", className: "btn" },
			"+1"
		),
		React.createElement(
			"button",
			{ onClick: minusOne, id: "minusOne", className: "btn" },
			"-1"
		),
		React.createElement(
			"button",
			{ onClick: reset, id: "reset", className: "btn" },
			"reset"
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
