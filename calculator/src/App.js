import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: "", previousNum: "", currentNum: "", operator: "" };

  handleClick = (e) => {
    this.setState({
      input: this.state.input + e.target.value,
    });
  };
  // clears input when clicked
  handleClear = (e) => {
    this.setState({ input: "" });
  };

  handlePlusNegative = (e) => {
    this.setState({
      input: Number(this.state.input) * -1,
    });
  };

  add = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "plus",
    });
  };

  handleEqual = () => {
    // console.log(this.state.input);
    this.state.currentNum = this.state.input;
    if (this.state.input === "") {
      // console.log("its zero");
      this.setState({
        input: 0,
        previousNum: "",
        currentNum: "",
        operator: "",
      });
    } else if (this.state.operator === "plus") {
      this.setState({
        input: Number(this.state.previousNum) + Number(this.state.currentNum),
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input: Number(this.state.previousNum) - Number(this.state.currentNum),
      });
    } else if (this.state.operator === "division") {
      this.setState({
        input: Number(this.state.previousNum) / Number(this.state.currentNum),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: Number(this.state.previousNum) * Number(this.state.currentNum),
      });
    }
  };

  handleMinus = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "minus",
    });
  };

  handleDivision = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "division",
    });
  };

  handleMultiply = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "multiply",
    });
  };

  handleDecimal = () => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + "." });
    }
  };
  // do percentage
  render() {
    const { input } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          {/* prints to screen */}

          <div className="screen">{new Intl.NumberFormat().format(input)}</div>

          <button className="button" id="AC" onClick={this.handleClear}>
            AC
          </button>
          <button
            className="button"
            id="plusminus"
            onClick={this.handlePlusNegative}
          >
            &#177;
          </button>
          <button className="button" id="percent" onClick={this.handleClick}>
            %
          </button>

          <button className="button" id="divide" onClick={this.handleDivision}>
            &#247;
          </button>
          <button
            className="button"
            value="7"
            id="seven"
            onClick={this.handleClick}
          >
            7
          </button>
          <button className="button" value="8" onClick={this.handleClick}>
            8
          </button>
          <button className="button" value="9" onClick={this.handleClick}>
            9
          </button>
          <button className="button" id="times" onClick={this.handleMultiply}>
            X
          </button>
          <button className="button" value="4" onClick={this.handleClick}>
            4
          </button>
          <button className="button" value="5" onClick={this.handleClick}>
            5
          </button>
          <button className="button" value="6" onClick={this.handleClick}>
            6
          </button>
          <button className="button" id="subtract" onClick={this.handleMinus}>
            -
          </button>
          <button className="button" value="1" onClick={this.handleClick}>
            1
          </button>
          <button className="button" value="2" onClick={this.handleClick}>
            2
          </button>
          <button className="button" value="3" onClick={this.handleClick}>
            3
          </button>
          <button className="button" id="add" onClick={this.add}>
            +
          </button>
          <button className="button" value="0" onClick={this.handleClick}>
            0
          </button>
          <button className="button" onClick={this.handleDecimal}>
            .
          </button>
          <button className="button" onClick={this.handleEqual}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
