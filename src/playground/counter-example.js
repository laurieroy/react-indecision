
let count = 0;
const addOne = () => {
	count++
	renderCounterApp();
};
const minusOne = () => {
	count--
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
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