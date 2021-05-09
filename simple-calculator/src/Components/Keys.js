import { Component } from "react";
import "./Button.css";

class Keys extends Component {
  render() {
    const {
      handleInputInteger,
      handleDot,
      handleClear,
      turnNegative,
      handlePercentage,
      handleOperation,
    } = this.props;

    return (
      <section className="buttons">
        <button className="function" onClick={() => handleClear()}>
          AC{" "}
        </button>
        <button className="function" onClick={() => turnNegative()}>
          ±
        </button>
        <button className="function" onClick={() => handlePercentage()}>
          %
        </button>
        <button className="operator" onClick={() => handleOperation("/")}>
          ÷
        </button>
        <button className="integer" onClick={() => handleInputInteger(7)}>
          7
        </button>
        <button className="integer" onClick={() => handleInputInteger(8)}>
          8
        </button>
        <button className="integer" onClick={() => handleInputInteger(9)}>
          9
        </button>
        <button className="operator" onClick={() => handleOperation("*")}>
          x
        </button>
        <button className="integer" onClick={() => handleInputInteger(4)}>
          4
        </button>
        <button className="integer" onClick={() => handleInputInteger(5)}>
          5
        </button>
        <button className="integer" onClick={() => handleInputInteger(6)}>
          6
        </button>
        <button className="operator" onClick={() => handleOperation("-")}>
          −
        </button>
        <button className="integer" onClick={() => handleInputInteger(1)}>
          1
        </button>
        <button className="integer" onClick={() => handleInputInteger(2)}>
          2
        </button>
        <button className="integer" onClick={() => handleInputInteger(3)}>
          3
        </button>
        <button className="operator" onClick={() => handleOperation("+")}>
          +
        </button>
        <button className="integer" onClick={() => handleInputInteger(0)}>
          0
        </button>
        <button className="integer" value="." onClick={() => handleDot()}>
          .
        </button>
        <button className="operator" onClick={() => handleOperation("=")}>
          =
        </button>
      </section>
    );
  }
}

export default Keys;
