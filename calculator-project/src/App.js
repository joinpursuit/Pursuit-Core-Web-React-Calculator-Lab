import React from "react";
import "./App.css";
import KeyPad from "./Components/KeyPad";

class App extends React.Component {
  state = { result: "", prevNum: "", operator: "" };

  //   hit a number
  // 	- the number pressed pops up if previous key has been pressed or an operation was pressed
  // 	- if the previous key was number, then append the number at the end

  handleNum = (value) => {
    this.setState({ result: this.state.result + value });
  };

  handleZero = (value) => {
    if (this.state.result !== "") {
      this.setState({ result: this.state.result + value });
    }
  };

  // Operators
  // 	- stores the operator that you pressed
  // 	- if there's an operation that's taken place, then you calculate the value and store the operator that you pressed
  handleOperator = (value) => {
    const { result } = this.state;
    if (value === "+/-" && result !== "") {
      this.setState({ result: parseInt(result) * -1 });
    } else if (value === "+") {
      this.setState({ operator: "+", prevNum: result, result: "+" });
    } else if (value === "-") {
      this.setState({ operator: "-", prevNum: result, result: "" });
    } else if (value === "x") {
      this.setState({ operator: "x", prevNum: result, result: "" });
    } else if (value === "÷") {
      this.setState({ operator: "÷", prevNum: result, result: "" });
    }
  };

  calculate = (value) => {
    const { result, operator, prevNum } = this.state;
    if (value === "AC") {
      this.setState({ result: "", prevNum: "", operator: "" });
    } else if (operator === "+") {
      this.setState({ result: parseInt(prevNum) + parseInt(result) });
    } else if (operator === "-") {
      this.setState({ result: parseInt(prevNum) - parseInt(result) });
    } else if (operator === "x") {
      this.setState({ result: parseInt(prevNum) * parseInt(result) });
    } else if (operator === "÷") {
      this.setState({ result: parseInt(prevNum) / parseInt(result) });
    }
  };

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <KeyPad
          handleZero={this.handleZero}
          handleOperator={this.handleOperator}
          handleNum={this.handleNum}
          result={result}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

export default App;
