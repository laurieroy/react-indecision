let hideDetails = true;

const app = {
	title: "Visibility Toggle",
}

const toggleText = () => {
	hideDetails = !hideDetails
	render()
}

const render = () => {
	console.log(hideDetails)
	const template = (
		<div>
			<h1>{ app.title }</h1>
			<button 
				btnName={ hideDetails ? "Show Details" : "Hide Details"}
				onClick={toggleText} className="btn">{ hideDetails ? "Show Details ": "Hide Details" }
			</button>
			{ !hideDetails && (
				<div>
					<p>Here is some interesting text</p>
				</div>
			)}
		</div>
	);

	ReactDOM.render(template, document.getElementById('app'));
}

render();
