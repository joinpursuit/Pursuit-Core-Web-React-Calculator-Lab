import React from "react";
import NumberButtons from "./NumberButtons";
import OperatorButtons from "./OperatorButtons";
import Display from "./Display";
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    numbers: [],
    isPositive: true,
    oldNums: [],
    operator: "",
    afterOperator: false,
    result: "",
  };

  resetState = () => {
    this.setState({
      numbers: [],
      isPositive: true,
      oldNums: [],
      operator: "",
      afterOperator: false,
      result: "",
    });
  };

  addNums = (newNum) => {
    if (this.state.afterOperator) {
      this.saveOldNums();
    }
    if (this.state.numbers.length <= 8) {
      if (Number(newNum) !== 0) {
        this.setState((prevState) => ({
          numbers: [...prevState.numbers, newNum],
        }));
      } else {
        if (this.state.numbers.length > 0) {
          this.setState((prevState) => ({
            numbers: [...prevState.numbers, newNum],
          }));
        }
      }
    }
  };

  saveOldNums = () => {
    if (this.state.isPositive) {
      this.setState((prevState) => ({
        oldNums: [...prevState.numbers],
        numbers: [],
        afterOperator: false,
        isPositive: true,
      }));
    } else {
      this.setState((prevState) => ({
        oldNums: ["-", ...prevState.numbers],
        numbers: [],
        afterOperator: false,
        isPositive: true,
      }));
    }
  };

  getOperator = (oper) => {
    this.setState({ operator: oper, afterOperator: true });
  };

  getNum = () => {
    let num = this.state.numbers.join("");
    if (this.state.isPositive || Number(num) === 0) {
      return Number(num);
    } else {
      return Number(num) * -1;
    }
  };

  getOldNums = () => {
    let oldNum = this.state.oldNums.join("");
    return Number(oldNum);
  };

  changeNumPosOrNeg = () => {
    this.setState((prevState) => ({ isPositive: !prevState.isPositive }));
  };

  addTwoNums = (num1, num2) => {
    let sum = Number(num1) + Number(num2);
    this.setState({ result: sum });
  };

  subtractNums = (num1, num2) => {
    let difference = Number(num1) - Number(num2);
    this.setState({ result: difference });
  };

  multiplyNums = (num1, num2) => {
    let product = Number(num1) * Number(num2);
    this.setState({ result: product });
  };

  divideNums = (num1, num2) => {
    let quotient = Math.floor(Number(num1) / Number(num2));
    this.setState({ result: quotient });
  };

  render() {
    const showNums = this.getNum();
    const showOldNums = this.getOldNums();

    console.log(this.state);

    return (
      <section className="calculator">
        <NumberButtons addNums={this.addNums} />
        <OperatorButtons
          showNums={showNums}
          showOldNums={showOldNums}
          posOrNeg={this.changeNumPosOrNeg}
          getOperator={this.getOperator}
          addTwoNums={this.addTwoNums}
          operator={this.state.operator}
          subtractNums={this.subtractNums}
          multiplyNums={this.multiplyNums}
          divideNums={this.divideNums}
          resetState={this.resetState}
        />
        <Display
          showNums={showNums}
          showOldNums={showOldNums}
          isPositive={this.state.isPositive}
          result={this.state.result}
          numbers={this.state.numbers}
        />
      </section>
    );
  }
}

export default Calculator;
