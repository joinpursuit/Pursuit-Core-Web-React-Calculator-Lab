import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    display: "0",
    previousDisplay: "",
    operator: "",
    value: "",
    newNumTracker: false,
    operatorJustPressed: false,
  };

  handleClear = () => {
    this.setState({
      display: "0",
      previousDisplay: "",
      operator: "",
      newNumTracker: false,
      operatorJustPressed: false,
    });
  };

  enterNumber = (e) => {
    this.setState((prevState) => {
      const { display, operatorJustPressed } = prevState;
      if (display === "0" || operatorJustPressed) {
        return {
          display: e.target.value,
          operatorJustPressed: false,
        };
      } else {
        return {
          display: prevState.display + e.target.value,
        };
      }
    });
  };

  handlePlusSign = () => {
    const { display } = this.state;
    // debugger
    this.setState({
      previousDisplay: display,
      // display: "0",
      operator: "plus",
      newNumTracker: true,
      operatorJustPressed: true,
    });
  };

  handleMinusSign = () => {
    const { display } = this.state;
    this.setState({
      previousDisplay: display,
      // display: "0",
      operator: "minus",
      newNumTracker: true,
      operatorJustPressed: true,
    });
  };

  handleDivisionSign = () => {
    const { display } = this.state;
    this.setState({
      previousDisplay: display,
      // display: "0",
      operator: "dividedBy",
      newNumTracker: true,
      operatorJustPressed: true,
    });
  };

  handleMultiplicationSign = () => {
    const { display } = this.state;
    this.setState({
      previousDisplay: display,
      // display: "0",
      operator: "times",
      newNumTracker: true,
      operatorJustPressed: true,
    });
  };

  handleEqualSign = () => {
    const { operator, display } = this.state;
    if (operator === "plus") {
      this.setState({ display: this.addNumbers(), previousDisplay: display });
    } else if (operator === "minus") {
      this.setState({
        display: this.subtractNumbers(),
        previousDisplay: display,
      });
    } else if (operator === "dividedBy") {
      this.setState({
        display: this.divideNumbers(),
        previousDisplay: display,
      });
    } else if (operator === "times") {
      this.setState({
        display: this.multiplyNumbers(),
        previousDisplay: display,
      });
    }
  };

  handleToggleInteger = () => {
    const { display } = this.state;
    this.setState({ display: -display });
  };

  addNumbers = () => {
    const { previousDisplay, display } = this.state;
    let sum = 0;
    if (display) {
      sum = parseInt(previousDisplay) + parseInt(display);
    }
    return sum;
  };

  subtractNumbers = () => {
    const { previousDisplay, display } = this.state;
    let difference = 0;
    if (display) {
      difference = parseInt(previousDisplay) - parseInt(display);
    }
    return difference;
  };

  divideNumbers = () => {
    const { previousDisplay, display } = this.state;
    let quotient = 0;
    if (display) {
      quotient = parseInt(previousDisplay) / parseInt(display);
    }
    return quotient;
  };

  multiplyNumbers = () => {
    const { previousDisplay, display } = this.state;
    let product = 0;
    if (display) {
      product = parseInt(previousDisplay) * parseInt(display);
    }
    return product;
  };

  render() {
    const { display } = this.state;
    return (
      <div className="Calculator">
        <div className="Display" value={display}>
          {parseInt(display).toLocaleString()}
        </div>
        <button className="TopRow" onClick={this.handleClear} value={0}>
          AC
        </button>
        <button className="TopRow">%</button>
        <button className="Blank"></button>
        <button className="Operator" onClick={this.handleDivisionSign}>
          ÷
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={7}>
          7
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={8}>
          8
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={9}>
          9
        </button>
        <button className="Operator" onClick={this.handleMultiplicationSign}>
          x
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={4}>
          4
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={5}>
          5
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={6}>
          6
        </button>
        <button className="Operator" onClick={this.handleMinusSign}>
          -
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={1}>
          1
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={2}>
          2
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={3}>
          3
        </button>
        <button className="Operator" onClick={this.handlePlusSign}>
          +
        </button>
        <button className="BottomRow" onClick={this.enterNumber} value={0}>
          0
        </button>
        <button className="BottomRow">.</button>
        <button className="BottomRow" onClick={this.handleToggleInteger}>
          ±
        </button>
        <button className="Operator" onClick={this.handleEqualSign}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
