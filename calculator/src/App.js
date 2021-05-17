import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentNumber: 0,
      operation: "",
      previousNumber: "",
      resetScreen: true,
    };
  }

  onOperation = (op) => {
    this.setState({
      operation: op,
      previousNumber: this.state.currentNumber,
      resetScreen: true,
    });
  };

  onNumber = (digit) => {
    const { resetScreen } = this.state;
    if (resetScreen) {
      this.setState({ currentNumber: digit, resetScreen: false });
    } else {
      this.setState({
        currentNumber: this.state.currentNumber + digit,
      });
    }
  };

  round = (num) => Math.round(num * 1000000) / 1000000;

  calculate = () => {
    const { operation, currentNumber, previousNumber } = this.state;
    const current = parseFloat(currentNumber);
    const prev = parseFloat(previousNumber);
    if (operation === "-") {
      this.setState({ currentNumber: prev - current, resetScreen: true });
    }
    if (operation === "+") {
      this.setState({ currentNumber: prev + current, resetScreen: true });
    }
    if (operation === "/") {
      this.setState({
        currentNumber: this.round(prev / current),
        resetScreen: true,
      });
    }
    if (operation === "*") {
      this.setState({
        currentNumber: this.round(prev * current),
        resetScreen: true,
      });
    }
  };
  percent = () => {
    this.setState({
      currentNumber:
        (this.state.previousNumber * this.state.currentNumber) / 100,
      resetScreen: true,
    });
  };
  posneg = () => {
    const { currentNumber } = this.state;
    this.setState({
      currentNumber: currentNumber * -1,
    });
  };
  clear = () => {
    this.setState({
      previousNumber: "",
      currentNumber: 0,
      operation: "",
      resetScreen: true,
    });
  };

  render() {
    const {currentNumber,} = this.state;
    return (
      <div className="App">
        <div className="Calculator">
          <section className="Results">
            {parseFloat(currentNumber).toLocaleString()}
          </section>
          <section className="Keypad">
            <button onClick={this.clear}>AC</button>
            <button value="+/-" onClick={this.posneg}>
              +/-
            </button>
            <button value="%" onClick={this.percent}>
              %
            </button>
            <button value="+" onClick={() => this.onOperation("/")}>
              ÷
            </button>
            <button value="7" onClick={() => this.onNumber("7")}>
              7
            </button>
            <button value="8" onClick={() => this.onNumber("8")}>
              8
            </button>
            <button value="9" onClick={() => this.onNumber("9")}>
              9
            </button>
            <button value="x" onClick={() => this.onOperation("*")}>
              x
            </button>
            <button value="4" onClick={() => this.onNumber("4")}>
              4
            </button>
            <button value="5" onClick={() => this.onNumber("5")}>
              5
            </button>
            <button value="6" onClick={() => this.onNumber("6")}>
              6
            </button>
            <button value="-" onClick={() => this.onOperation("-")}>
              -
            </button>
            <button value="1" onClick={() => this.onNumber("1")}>
              1
            </button>
            <button value="2" onClick={() => this.onNumber("2")}>
              2
            </button>
            <button value="3" onClick={() => this.onNumber("3")}>
              3
            </button>
            <button value="+" onClick={() => this.onOperation("+")}>
              +
            </button>
          </section>
          <section className="KeypadLR">
            <button value="0" onClick={() => this.onNumber("0")}>
              0
            </button>
            <button value="." onClick={() => this.onNumber(".")}>
              .
            </button>
            <button value="=" onClick={this.calculate}>
              =
            </button>
          </section>
        </div>
      </div>
    );
  }
}
