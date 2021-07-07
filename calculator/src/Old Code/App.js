// import "./App.css";
// import React, { Component } from "react";
// import Buttons from "./Components/Buttons";
// import Output from "./Components/Output";

// class App extends Component {
//   state = {
//     result: "",
//   };

//   buttonPressed = (buttonName) => {
//     if (buttonName === "=") {
//       this.calculate();
//     } else if (buttonName === "=" && this.state.result === "") {
//       this.reset();
//     } else if (buttonName === "AC") {
//       this.reset();
//     } else if (buttonName === "C") {
//       this.reset();
//     } else if (buttonName === "%") {
//       this.percent();
//     } else if (buttonName === "+-") {
//       this.inverse();
//     } else
//       this.setState({
//         result: (this.state.result + buttonName).toLocaleString(),
//       });
//   };

//   calculate = () => {
//     try {
//       this.setState({
//         result: (eval(this.state.result).toFixed(1) || "") + "",
//       });
//     } catch (e) {
//       this.setState({
//         result: "",
//       });
//     }
//   };

//   reset = () => {
//     this.setState({
//       result: "",
//     });
//   };

//   percent = () => {
//     this.setState({
//       result: this.state.result / 100,
//     });
//   };

//   inverse = () => {
//     this.setState({
//       result: -this.state.result,
//     });
//   };

//   render() {
//     return (
//       <div className="calculator">
//         <div className="container">
//           <Output result={this.state.result} />
//           <Buttons buttonPressed={this.buttonPressed} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
