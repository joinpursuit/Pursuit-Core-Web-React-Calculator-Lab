// import React from "react";
// import "./Button.css";

// class Button extends React.Component {
// 	state = { input: "" };

// 	handleClick = (e) => {
// 		this.setState({ input: e.target.value });
// 	};

// 	render() {
// 		const { input } = this.state;
// 		// add onChange and pass the value of the button to
// 		// App ==> Display ???

// 		return (
// 			<section className="btn-container">
// 				<div className="display">{input}</div>
// 				<div className="row">
// 					<button onClick={this.handleClear}>AC</button>
// 					{/* &#177; */}
// 					<button>+/-</button>
// 					<button>%</button>
// 					<button>&#247;</button>
// 				</div>
// 				<div className="row">
// 					<button onClick={this.handleClick} value="7">
// 						7
// 					</button>
// 					<button onClick={this.handleClick} value="8">
// 						8
// 					</button>
// 					<button onClick={this.handleClick} value="9">
// 						9
// 					</button>
// 					<button>x</button>
// 				</div>

// 				<div className="row">
// 					<button onClick={this.handleClick} value="4">
// 						4
// 					</button>
// 					<button onClick={this.handleClick} value="5">
// 						5
// 					</button>
// 					<button onClick={this.handleClick} value="6">
// 						6
// 					</button>
// 					<button>-</button>
// 				</div>

// 				<div className="row">
// 					<button onClick={this.handleClick} value="1">
// 						1
// 					</button>
// 					<button onClick={this.handleClick} value="2">
// 						2
// 					</button>
// 					<button onClick={this.handleClick} value="3">
// 						3
// 					</button>
// 					<button>+</button>
// 				</div>

// 				<div className="row">
// 					<button onClick={this.handleClick} value="0">
// 						0
// 					</button>
// 					<button>.</button>
// 					<button onClick={this.handleClick} value="00">
// 						00
// 					</button>
// 					<button>=</button>
// 				</div>
// 				<div className="clear-btn">
// 					<button>Clear</button>
// 				</div>
// 			</section>
// 		);
// 	}
// }

// export default Button;
