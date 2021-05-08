import React from "react";
class Calculator extends React.Component {
  state = { input: "", addNum: true, prevInput: "", operator: "" };
  render() {
    const handleOperator = (e) => {
      const { value } = e.target;
      const { input } = this.state;
      this.setState({
        prevInput: input,
        operator: value,
        addNum: true,
      });
    };
    const handleDecimal = (e) => {
      const { value } = e.target;
      const { input } = this.state;
      if (!input.includes(value)) {
        this.setState({ input: input + value });
      }
    };
    const handleClick = (e) => {
      const { value } = e.target;
      const { input, addNum } = this.state;
      if (addNum) {
        this.setState({ input: value, addNum: false });
      } else {
        this.setState({ input: input + value });
      }
    };

    const handleEqual = () => {
      const { input, prevInput, operator } = this.state;
      if (operator === "+") {
        this.setState({
          input: Number(prevInput) + Number(input),
          addNum: true,
        });
      } else if (operator === "-") {
        this.setState({
          input: Number(prevInput) - Number(input),
          addNum: true,
        });
      } else if (operator === "*") {
        this.setState({
          input: Number(prevInput) * Number(input),
          addNum: true,
        });
      } else if (operator === "/") {
        this.setState({
          input: Number(prevInput) / Number(input),
          addNum: true,
        });
      }
    };

    const handleClear = () => {
      this.setState({
        input: "",
        addNum: true,
        prevInput: "",
        operator: "",
      });
    };
    const handlePosNeg = () => {
      this.setState({ input: Number(input) * -1 });
    };
    const handlePercent = () => {
      this.setState({ input: Number(input) / 100 });
    };
    const handleOneClear = () => {
      this.setState({ input: input.slice(0, -1) });
    };
    const { input } = this.state;
    return (
      <div className="App">
        <div className="Container">
          <div className="inputScreen">
            {input === "" ? "0" : Number(input).toLocaleString()}
          </div>
          <div className="keypad">
            <button onClick={handleClear} className="lightGray">
              AC
            </button>
            <button onClick={handleOneClear} className="lightGray">
              C
            </button>
            <button onClick={handlePercent} className="lightGray">
              %
            </button>
            <button onClick={handleOperator} value="/" className="orange">
              &divide;
            </button>
            <button onClick={handleClick} value="7">
              7
            </button>
            <button onClick={handleClick} value="8">
              8
            </button>
            <button onClick={handleClick} value="9">
              9
            </button>
            <button onClick={handleOperator} value="*" className="orange">
              &times;
            </button>
            <button onClick={handleClick} value="4">
              4
            </button>
            <button onClick={handleClick} value="5">
              5
            </button>
            <button onClick={handleClick} value="6">
              6
            </button>
            <button onClick={handleOperator} value="-" className="orange">
              &minus;
            </button>
            <button onClick={handleClick} value="1">
              1
            </button>
            <button onClick={handleClick} value="2">
              2
            </button>
            <button onClick={handleClick} value="3">
              3
            </button>
            <button onClick={handleOperator} value="+" className="orange">
              +
            </button>
            <button onClick={handleClick} value="0">
              0
            </button>
            <button onClick={handleDecimal} value=".">
              .
            </button>
            <button onClick={handlePosNeg}>+/-</button>
            <button onClick={handleEqual} className="orange">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
