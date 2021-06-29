import React from "react";
import "./Calculator.css";

class OperatorButtons extends React.Component {
  handlePosOrNeg = () => {
    const { posOrNeg, showNums } = this.props;
    posOrNeg(showNums);
  };

  handleOperators = (e) => {
    const { getOperator } = this.props;
    const oper = e.target.value;
    getOperator(oper);
  };

  handleEqualBtn = () => {
    const {
      addTwoNums,
      showNums,
      showOldNums,
      subtractNums,
      operator,
      multiplyNums,
      divideNums,
    } = this.props;
    if (operator === "+") {
      addTwoNums(showNums, showOldNums);
    } else if (operator === "-") {
      subtractNums(showOldNums, showNums);
    } else if (operator === "*") {
      multiplyNums(showOldNums, showNums);
    } else if (operator === "/") {
      divideNums(showOldNums, showNums);
    }
  };

  handleAC = () => {
    const { resetState } = this.props;
    resetState();
  };

  render() {
    return (
      <section className="operatorButtons">
        <button
          type="button"
          name="+"
          value={"+"}
          onClick={this.handleOperators}
        >
          +
        </button>
        <button
          type="button"
          name="-"
          value={"-"}
          onClick={this.handleOperators}
        >
          -
        </button>
        <button
          type="button"
          name="*"
          value={"*"}
          onClick={this.handleOperators}
        >
          *
        </button>
        <button
          type="button"
          name="/"
          value={"/"}
          onClick={this.handleOperators}
        >
          /
        </button>
        <button type="button" name="AC" value={"AC"} onClick={this.handleAC}>
          AC
        </button>
        <button
          type="button"
          name="+/-"
          value={"+/-"}
          onClick={this.handlePosOrNeg}
        >
          +/-
        </button>

        <button
          id="buttonEqual"
          type="button"
          name="="
          value={"="}
          onClick={this.handleEqualBtn}
        >
          =
        </button>
      </section>
    );
  }
}

export default OperatorButtons;
