import React from "react";
import Buttons from "./buttons";
import { evaluate } from "mathjs";

class Calculator extends React.Component {
  state = {
    finalVal: "",
    holder: "",
    currentVal: "0",
    prevVal: "",
    opperater: "",
    holdVal: "",
    toggle: false,
    clearSymbol: false
  };

  numButtonsHandler = e => {
    let res = e.target.value;

    if (this.state.opperater !== "") {
      console.log("here1");
      this.setState(prevState => ({
        prevVal: prevState.currentVal,

        currentVal: prevState.holdVal + res,
        holdVal: prevState.holdVal + res
      }));
    } else if (this.state.currentVal === "0") {
      console.log("here2");
      this.setState({
        currentVal: res
      });
    } else {
      console.log("here3");
      this.setState(prevState => ({
        currentVal: prevState.currentVal + res
      }));
    }
  };

  clearButtonHandler = () => {
    if (this.state.prevVal === "") {
      this.setState({
        prevVal: "",
        opperater: "",
        currentVal: "0",
        holdVal: "",
        finalVal: "",
        clearSymbol: false
      });
    } else if (this.state.prevVal !== "") {
      console.log("here");
      this.setState(prevState => ({
        currentVal: "",
        finalVal: "",
        prevVal: prevState.finalVal,
        opperater: "",
        holder: "",
        holdVal: "",
        clearSymbol: true
      }));
    }
  };
  oppHandler = e => {
    let res = e.target.value;
    this.setState(prevState => ({
      opperater: res,
      finalVal: prevState.currentVal
    }));
  };

  equalHandler = () => {
    const { currentVal, opperater, finalVal } = this.state;
    this.setState(prevState => ({
      currentVal: evaluate(`${finalVal}${opperater}${currentVal}`),
      prevVal: "",
      opperater: prevState.opperater,
      holdVal: "",
      finalVal: prevState.prevVal,
      prevVal: prevState.finalVal
    }));
  };
  toggleHandler = async () => {
    await this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    if (this.state.toggle !== true) {
      this.setState(prevState => ({
        currentVal: prevState.holder
      }));
    } else {
      this.setState(prevState => ({
        holder: prevState.currentVal,
        currentVal: `-${prevState.currentVal}`
      }));
    }
  };
  handlePercent = () => {
    let res = this.state.currentVal / 100;
    this.setState({
      currentVal: `${res}`
    });
  };

  render() {
    console.log(this.state);

    const { currentVal, clearSymbol } = this.state;
    return (
      <Buttons
        currentVal={currentVal}
        numButtonsHandler={this.numButtonsHandler}
        clearButtonHandler={this.clearButtonHandler}
        oppHandler={this.oppHandler}
        equalHandler={this.equalHandler}
        toggleHandler={this.toggleHandler}
        clearSymbol={clearSymbol}
        handlePercent={this.handlePercent}
      />
    );
  }
}

export default Calculator;
