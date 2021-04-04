class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props)
		this.toggleVisibility = this.toggleVisibility.bind(this)

		this.state = {
			hideDetails: true
		}
	}

	toggleVisibility() {
		this.setState((prevState) => {
			console.log("in setState: " + prevState)
			return {
				hideDetails: !prevState.hideDetails
			}
		});
	}

	render() {
		return(
			<div>
				<h1>Visibility Toggle</h1>
				<button 
					btnName={ this.state.hideDetails ? "Show Details" : "Hide Details"}
					onClick={this.toggleVisibility} className="btn">
						{ this.state.hideDetails ? "Show Details ": "Hide Details" }
				</button>
				{ !this.state.hideDetails && (
					<div>
						<p>Here is some interesting text</p>
					</div>
				)}
			</div>
		);
	}
}
ReactDOM.render(< VisibilityToggle />, document.getElementById('app'));

// let hideDetails = true;

// const app = {
// 	title: "Visibility Toggle",
// }

// const toggleText = () => {
// 	hideDetails = !hideDetails
// 	render()
// }

// const render = () => {
// 	console.log(hideDetails)
// 	const template = (
// 		<div>
// 			<h1>{ app.title }</h1>
// 			<button 
// 				btnName={ hideDetails ? "Show Details" : "Hide Details"}
// 				onClick={toggleText} className="btn">{ hideDetails ? "Show Details ": "Hide Details" }
// 			</button>
// 			{ !hideDetails && (
// 				<div>
// 					<p>Here is some interesting text</p>
// 				</div>
// 			)}
// 		</div>
// 	);

// 	ReactDOM.render(template, document.getElementById('app'));
// }

// render();
