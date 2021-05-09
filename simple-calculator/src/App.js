import { Component } from "react";
import "./App.css";
import Keys from "./Components/Keys";

class App extends Component {
  state = {
    inputValue: "0",
    inputValueInMemory: null,
    pendingOp: false,
    operator: null,
  };

  handleInputInteger = (integer) => {
    const { inputValue, pendingOp } = this.state;
    if (pendingOp) {
      this.setState({ inputValue: integer, pendingOp: false });
    } else {
      this.setState({
        inputValue: inputValue === "0" ? String(integer) : inputValue + integer,
      });
    }
  };

  handleDot = () => {
    const { inputValue, pendingOp } = this.state;
    if (pendingOp) {
      this.setState({ inputValue: ".", pendingOp: false });
    } else if (!(inputValue).includes(".")) {
      this.setState({
        inputValue: Number(inputValue) + ".",
        pendingOp: false,
      });
    }
  };

  handleClear = () => {
    this.setState({
      inputValue: "0",
      inputValueInMemory: null,
      pendingOp: false,
      operator: null,
    });
  };

  turnNegative = () => {
    const { inputValue } = this.state;
    this.setState({
      inputValue: inputValue.includes("-")
        ? inputValue.slice(1)
        : "-" + inputValue,
    });
  };

  handlePercentage = () => {
    const { inputValue } = this.state;
    this.setState({
      inputValue: String(Number(inputValue) / 100),
    });
  };

  handleOperation = (nextOperator) => {
    const { inputValue, operator, inputValueInMemory } = this.state;
    const nextinputValue = Number(inputValue);
    const operations = {
      "/": (previnputValue, nextinputValue) => previnputValue / nextinputValue,
      "*": (previnputValue, nextinputValue) => previnputValue * nextinputValue,
      "+": (previnputValue, nextinputValue) => previnputValue + nextinputValue,
      "-": (previnputValue, nextinputValue) => previnputValue - nextinputValue,
      "=": (previnputValue, nextinputValue) => nextinputValue,
    };

    if (inputValueInMemory === null) {
      this.setState({ inputValueInMemory: nextinputValue });
    } else if (operator) {
      const currentinputValue = inputValueInMemory || 0;
      const computedinputValue = operations[operator](
        currentinputValue,
        nextinputValue
      );

      this.setState({
        inputValueInMemory: computedinputValue,
        inputValue: Number(computedinputValue),
      });
    }

    this.setState({ pendingOp: true, operator: nextOperator });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <section className="App">
        <div className="top"></div>
        <div className="display">{Number(inputValue).toLocaleString("en-US")}</div>
        <Keys
          inputValue={inputValue}
          handleInputInteger={this.handleInputInteger}
          handleDot={this.handleDot}
          handleClear={this.handleClear}
          turnNegative={this.turnNegative}
          handlePercentage={this.handlePercentage}
          handleOperation={this.handleOperation}
        />
      </section>
    );
  }
}

export default App;
