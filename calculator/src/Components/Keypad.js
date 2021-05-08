import React from "react";
class Keypad extends React.Component {
  render() {
    const {
      btnPressed,
      calculate,
      clear,
      handleDecimal,
      toggleSign,
      addOperand,
      subtractOperand,
      divisionOperand,
      multiplicationOperand,
    } = this.props;
    return (
      <section className="button">
        <button onClick={btnPressed} value="7">
          7
        </button>
        <button onClick={btnPressed} value="8">
          8
        </button>
        <button onClick={btnPressed} value="9">
          9
        </button>
        <button onClick={multiplicationOperand} value="*">
          x
        </button>
        <button onClick={divisionOperand} value="/">
          ÷
        </button>
        <button onClick={btnPressed} value="6">
          6
        </button>
        <button onClick={btnPressed} value="5">
          5
        </button>
        <button onClick={btnPressed} value="4">
          4
        </button>
        <button onClick={addOperand} value="+">
          +
        </button>
        <button onClick={subtractOperand} value="-">
          -
        </button>
        <button onClick={btnPressed} value="1">
          1
        </button>
        <button onClick={btnPressed} value="2">
          2
        </button>
        <button onClick={btnPressed} value="3">
          3
        </button>

        <button onClick={clear}>C</button>

        <button onClick={toggleSign} value="">
          +/-
        </button>
        <button onClick={handleDecimal} value=".">
          .
        </button>
        <button onClick={btnPressed} value="0">
          0
        </button>

        <button onClick={calculate} value="=">
          =
        </button>
        <button onClick={btnPressed} value="(">
          (
        </button>
        <button onClick={btnPressed} value=")">
          )
        </button>
      </section>
    );
  }
}

export default Keypad;
