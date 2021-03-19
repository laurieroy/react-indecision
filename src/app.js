console.log("app.js is running")

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer?",
	options: ['One', 'Two']
}

function showSubtitle(subtitle) {
	if(subtitle) {
		return (subtitle)<p>{app.subtitle}</p>;
	}
}



var template = (
	<div>
		<h1>{ app.title }</h1>
		<p>{ app.subtitle }</p>
		<p>{ options.length > 0 ? "Here are your options" : "No Options" }</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name:  "Laurie Roy",
	age:  27,
	location: "Dickinson, ND"
}

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

var template2 = (
	<div>
		<h1>{ user.name ? user.name : "Anonymous" }</h1>
		{ user.age >= 18 && <p>Age: { user.age }</p> }
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);