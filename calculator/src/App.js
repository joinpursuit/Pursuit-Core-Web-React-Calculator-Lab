import React from "react";
import "./App.css";
import Keypad from "./Components/Keypad";
import Output from "./Components/Output";

class App extends React.Component {
  state = { result: "", previousNum: "", currentNum: "", operators: "" };

  btnPressed = (e) => {
    const { result } = this.state;
    this.setState({
      result: result + e.target.value,
    });
  };
  toggleSign = () => {
    try {
      const { result } = this.state;
      this.setState({
        result: result.charAt(0) === "-" ? result.substr(1) : "-" + result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleDecimal = () => {
    const { result } = this.state;
    if (result.indexOf(".") === -1) {
      this.setState({ result: result + "." });
    }
  };
  addOperand = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "+";
    debugger
  };

  subtractOperand = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "-";
  };

  divisionOperand = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "/";
  };
  multiplicationOperand = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "*";
  };

  calculate = () => {
    this.state.currentNum = this.state.result;
    if (this.state.operators === "+") {
      this.setState({
        result: Number(this.state.previousNum) + Number(this.state.currentNum),
      });
    } else if (this.state.operators === "-") {
      this.setState({
        result: Number(this.state.previousNum) - Number(this.state.currentNum),
      });
    } else if (this.state.operators === "/") {
      this.setState({
        result: Number(this.state.previousNum) / Number(this.state.currentNum),
      });
    } else if (this.state.operators === "*") {
      this.setState({
        result: Number(this.state.previousNum) * Number(this.state.currentNum),
      });
    }
  };

  clear = () => {
    this.setState({ result: "" });
    this.setState({ currentNum: "" });
    this.setState({ operators: "" });
    this.setState({ previousNum: "" });
  };
  render() {
    const { result, currentNum } = this.state;
    return (
      <div className="App">
        <Output
          result={Number(result).toLocaleString()}
          currentNum={currentNum}
        />
        <Keypad
          btnPressed={this.btnPressed}
          clear={this.clear}
          calculate={this.calculate}
          handleDecimal={this.handleDecimal}
          toggleSign={this.toggleSign}
          addOperand={this.addOperand}
          subtractOperand={this.subtractOperand}
          divisionOperand={this.divisionOperand}
          multiplicationOperand={this.multiplicationOperand}
        />
      </div>
    );
  }
}

export default App;
