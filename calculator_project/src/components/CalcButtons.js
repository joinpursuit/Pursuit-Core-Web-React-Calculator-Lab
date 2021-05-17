import React from "react";
import "./Calculator.css";

class CalcButton extends React.Component {
  render() {
    const {
      input,
      handleClear,
      handleButton,
      handleOperation,
      handleDecimal,
      handlePercentage,
      handlePosNeg,
      handleZero,
      calculate,
      handleDisplay,
    } = this.props;
    return (
      <div id="calculator">
        <div className="display">{input === "" ? "0" : handleDisplay()}</div>
        <button
          onClick={handleClear}
          value="A/C"
          className="displayPeach"
        >
          A/C
        </button>
        <button
          onClick={handleClear}
          value="C"
          className="displayPeach"
        >
          C
        </button>
        <button
          onClick={handlePercentage}
          value="%"
          className="displayPeach"
        >
          %
        </button>
        <button
          onClick={handleOperation}
          value="/"
          className="displayPeach"
        >
          /
        </button>
        <button onClick={handleButton} value="1">
          1
        </button>
        <button onClick={handleButton} value="2">
          2
        </button>
        <button onClick={handleButton} value="3">
          3
        </button>
        <button
          onClick={handleOperation}
          value="x"
          className="displayPeach"
        >
          x
        </button>
        <button onClick={handleButton} value="4">
          4
        </button>
        <button onClick={handleButton} value="5">
          5
        </button>
        <button onClick={handleButton} value="6">
          6
        </button>
        <button
          onClick={handleOperation}
          value="-"
          className="displayPeach"
        >
          -
        </button>
        <button onClick={handleButton} value="7">
          7
        </button>
        <button onClick={handleButton} value="8">
          8
        </button>
        <button onClick={handleButton} value="9">
          9
        </button>
        <button
          onClick={handleOperation}
          value="+"
          className="displayPeach"
        >
          +
        </button>
        <button onClick={handlePosNeg} value="+/-">
          +/-
        </button>
        <button onClick={handleZero} value="0">
          0
        </button>
        <button onClick={handleDecimal} value=".">
          .
        </button>
        <button
          onClick={calculate}
          value="="
          className="displayPeach"
        >
          =
        </button>
      </div>
    );
  }
}

export default CalcButton;
