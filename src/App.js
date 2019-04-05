import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		};
	}
	handleChange = () => {
		const { counter } = this.state;
		this.setState({
			counter: counter + 1
		});
	};

	save = () => {
		localStorage.setItem("counter", this.state.counter);
	};

	reset = () => {
		localStorage.clear();
		const counter = 0;
		this.setState(() => ({
			counter
		}));
		//localStorage.removeItem('counter')
	};

	componentDidMount() {
		const counter = JSON.parse(localStorage.getItem("counter") || 0);
		this.setState(() => ({ counter }));
	}
	render() {
		return (
			<div className="App">
				<div>{this.state.counter}</div>
				<button onClick={this.handleChange}>+</button>
				<button onClick={this.save}>Save</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

export default App;
