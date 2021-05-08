import React from "react";
import Buttons from "./Components/Buttons";
import "./App.css";

class App extends React.Component {
  state = {
    inputA: "0",
    inputB: "0",
    operator: "",
    complete: false,
  };

  numberButton = (value) => {
    if (this.state.inputA === "0" || this.state.complete === true) {
      this.setState({ inputA: value, complete: false });
    } else {
      this.setState((prevState) => ({
        inputA: prevState.inputA + value,
      }));
    }
  };

  operators = (value) => {
    const arr = ["+", "-", "*", "÷"];
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        this.setState((prevState) => ({ inputB: prevState.inputA }));
        this.setState({ operator: arr[i] });
        this.setState({ inputA: "0" });
      }
    }
  };

  equals = () => {
    const { inputA, inputB, operator } = this.state;
    console.log(this.state);
    this.setState({ complete: true });
    if (operator === "+") {
      return this.setState({ inputA: parseInt(inputB) + parseInt(inputA) });
    } else if (operator === "-") {
      return this.setState({ inputA: parseInt(inputB) - parseInt(inputA) });
    } else if (operator === "*") {
      return this.setState({ inputA: parseInt(inputB) * parseInt(inputA) });
    } else if (operator === "÷") {
      return this.setState({ inputA: parseInt(inputB) / parseInt(inputA) });
    }
  };

  positiveNegative = (value) => {
    const { inputA } = this.state;

    return this.setState({ inputA: parseInt(inputA) * parseInt(value) + "" });
  };

  percentage = () => {
    const { inputA, inputB } = this.state;
    this.setState({
      inputA: (parseInt(inputB) * parseInt(inputA)) / parseInt("100"),
    });
  };

  allClear = () => {
    this.setState({ inputA: "0", inputB: "0", operator: "", complete: false });
  };

  render() {
    const { inputA } = this.state;
    return (
      <div className="App">
        <Buttons
          inputA={inputA}
          numberButton={this.numberButton}
          operators={this.operators}
          equals={this.equals}
          allClear={this.allClear}
          positiveNegative={this.positiveNegative}
          percentage={this.percentage}
        />
      </div>
    );
  }
}

export default App;
