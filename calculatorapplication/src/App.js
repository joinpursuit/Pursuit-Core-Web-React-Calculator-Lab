import React from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";
// import * as math from "mathjs";

class App extends React.Component {
  state = {
    currentInput: "0",
    history: "",
    toCalculate: false,
    operator: null,
  };

  detectClick = (target) => {
    const { currentInput, toCalculate, history, operator } = this.state;

    if (toCalculate) {
      this.setState((prevState) => {
        return {
          toCalculate: false,
          currentInput: target.name,
          history: prevState.history + prevState.currentInput + operator,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          currentInput:
            currentInput === "0"
              ? target.name
              : prevState.currentInput + target.name,
        };
      });
    }
  };

  operation = (target) => {
    this.setState({
      toCalculate: true,
      operator: target.name,
    });
  };

  changePositivity = (target) => {
    const { currentInput, operator } = this.state;
    if (typeof currentInput === "number") {
      this.setState((prevState) => {
        return {
          currentInput: prevState.currentInput * -1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          currentInput:
            prevState.currentInput.charAt(0) === "-"
              ? prevState.currentInput.substr(1)
              : "-" + prevState.currentInput,
        };
      });
    }
  };

  clear = (e) => {
    this.setState({ currentInput: "0" });
  };

  calculate = () => {
    const { currentInput, toCalculate, operator, history } = this.state;
    // debugger
    this.setState({
      currentInput: eval(history + currentInput),
      history: "",
      operator: "",
    });
  };

  addDecimal = () => {
    const { currentInput, toCalculate } = this.state;
    if (toCalculate) {
      this.setState({ currentInput: "0.", toCalculate: false });
    } else {
      if (currentInput.indexOf(".") === -1) {
        this.setState((prevState) => {
          return {
            currentInput: prevState.currentInput + ".",
          };
        });
      }
    }
  };

  render() {
    console.log(this.state);
    // debugger
    const { currentInput } = this.state;
    return (
      <div className="App">
        <section className="calculator-container">
          <Screen currentInput={currentInput} />
          <Buttons
            detectClick={this.detectClick}
            clear={this.clear}
            operation={this.operation}
            calculate={this.calculate}
            addDecimal={this.addDecimal}
            changePositivity={this.changePositivity}
          />
        </section>
      </div>
    );
  }
}

export default App;
