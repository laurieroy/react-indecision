console.log("app.js is running")

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer?",
	options: ['One', 'Two']
}

const template = (
	<div>
		<h1>{ app.title }</h1>
			{ app.subtitle && <p>{app.subtitle}</p>}
		<p>{ app.options.length > 0 ? "Here are your options" : "No Options" }</p>
		<ol>
			<li>{app.options[0]}</li>
			<li>{app.options[1]}</li>
		</ol>
	</div>
);

let count = 0;
const addOne = () => {
	console.log('orig count: ' + count)
	count++
	renderCounterApp();
	console.log('count:' + count)
};
const minusOne = () => {
	console.log('orig count: ' + count)
	count--
	renderCounterApp();
	console.log('minusOne')
};
const reset = () => {
	console.log('reset')
	count = 0;
	renderCounterApp();
	console.log('reset'+ count)
};
const someId = 'myidhere'
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne} id="addOne" className="btn">+1</button>
		<button onClick={minusOne} id="minusOne" className="btn">-1</button>
		<button onClick={reset} id="reset" className="btn">reset</button>
	</div>
);
console.log(templateTwo)

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne} id="addOne" className="btn">+1</button>
			<button onClick={minusOne} id="minusOne" className="btn">-1</button>
			<button onClick={reset} id="reset" className="btn">reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();