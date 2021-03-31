console.log("app.js is running")

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer?",
	options: []
}
const onRemoveAll = (e) => {
	e.preventDefault();

	app.options = []
	render();
}

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
}

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div>
			<h1>{ app.title }</h1>
				{ app.subtitle && <p>{app.subtitle}</p>}
			<p>{ app.options.length > 0 ? "Here are your options" : "No Options" }</p>
			<p>{app.options.length }</p>
			<button onClick={onRemoveAll} id="removeAll" className="btn">Remove All Options</button>
			<ol>
				<li>{app.options[0]}</li>
				<li>{app.options[1]}</li>
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();