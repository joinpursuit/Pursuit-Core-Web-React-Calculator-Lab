import CalcButton from "./components/CalcButtons";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: "", prevNum: "", startNewNum: true, operator: "" };

  handleDisplay = () => {
    const {input} = this.state;
    if(input.length < 3) {
      return input
    } else {
      return parseFloat(input).toLocaleString()
    }
  }

  handleButton = (e) => {
    const { value } = e.target;
    if(this.state.input.length < 9) {
      if (this.state.startNewNum) {
        this.setState({ input: value, startNewNum: false });
      } else {
        this.setState({ input: this.state.input + value });
      }
    }
  };

  handlePosNeg = (e) => {
    const { value } = e.target;
    const { input } = this.state;
    this.setState({ input: input * -1 });
  };

  handleZero = (e) => {
    const { value } = e.target;
    const { input } = this.state;
    if (input !== "") {
      this.setState({ input: input + value });
    }
  };

  handleOperation = (e) => {
    const { value } = e.target;
    this.setState({
      input: "",
      startNewNum: true,
      prevNum: this.state.input,
      operator: value,
    });
  };

  handleDecimal = (e) => {
    const { value } = e.target;
    const { input, startNewNum } = this.state;
    if(startNewNum) {
      this.setState({input: "0" + value, startNewNum: false})
    } else if (!input.includes(value)) {
        this.setState({ input: input + value});
    }
  };

  handlePercentage = (e) => {
    const { value } = e.target;
    this.setState({ input: this.state.input / 100 });
  };

  handleClear = (e) => {
    const { value } = e.target;
    const { input, prevNum, operator } = this.state;
    if (value === "A/C") {
      this.setState({
        input: "",
        prevNum: "",
        operator: "",
        startNewNum: true,
      });
    }
    if (value === "C") {
      if (operator === "") {
        this.setState({
          input: "",
          prevNum: "",
          operator: "",
          startNewNum: true,
        });
      } else if (input !== "" && prevNum !== "" && operator !== "") {
        this.setState({
          input: "",
          prevNum: prevNum,
          operator: operator,
          startNewNum: true,
        });
      }
    }
  };

  calculate = (e) => {
    const { value } = e.target;
    if (this.state.operator === "+") {
      this.setState({
        input: parseFloat(this.state.input) + parseFloat(this.state.prevNum),
        startNewNum: true,
      });
    } else if (this.state.operator === "-") {
      this.setState({
        input: parseFloat(this.state.prevNum) - parseFloat(this.state.input),
        startNewNum: true,
      });
    } else if (this.state.operator === "x") {
      this.setState({
        input: parseFloat(this.state.prevNum) * parseFloat(this.state.input),
        startNewNum: true,
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input: parseFloat(this.state.prevNum) / parseFloat(this.state.input),
        startNewNum: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <CalcButton
          handleButton={this.handleButton}
          handleClear={this.handleClear}
          handlePosNeg={this.handlePosNeg}
          handleOperation={this.handleOperation}
          input={this.state.input}
          handleDecimal={this.handleDecimal}
          handlePercentage={this.handlePercentage}
          handleZero={this.handleZero}
          calculate={this.calculate}
          handleDisplay={this.handleDisplay}
        />
      </div>
    );
  }
}

export default App;
