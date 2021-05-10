import { Component } from "react";

import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

import "./App.css";


export default class App extends Component {
  state = {
    inputValue: "0",
    operator: "",
    elementOne: 0,
    toggleDisplay: false,
    functionEntered: false,
    equalInteger: -Infinity,
    negativeInput: false,
  };



  handleNegative = () => {
    const {inputValue, negativeInput} = this.state;
    if(!negativeInput && inputValue !== "0") {
      this.setState({inputValue: `-${inputValue}`, negativeInput: true});
    } else if(inputValue.charAt(0) === "-") {
      debugger
      this.setState({inputValue: inputValue.substring(1), negativeInput: false})
    }
  }
    
  //   const { negaviteInput } = this.state;
  //   this.setState((prevState) => ({ negaviteInput: !prevState.negaviteInput }));
  //   if (negaviteInput) {
  //     // -Math.abs(Number(inputValue));
  //   }
  // };



  handleNumber = (e) => {
    const { inputValue } = this.state;
      if (inputValue === "0") {
        this.setState({ inputValue: Math.abs(Number(e.target.value)) });
      } else {
        this.setState((prevState) => ({
          toggleDisplay: false,
          inputValue: Math.abs(prevState.inputValue + e.target.value),
        }));
      }
  };

  // handleDecimal = (e) => {
  //   const { decimal } = this.state;
  //   this.setState({decimal: true})
  //   this.handleNumber(e);
  // }

  handleOperator = (e) => {
    if (this.state.elementOne === 0) {
      this.setState((prevState) => ({
        operator: e.target.value,
        functionEntered: true,
        toggleDisplay: true,
        elementOne: Number(prevState.inputValue),
        inputValue: "",
      }));
    } else {
      const { operator } = this.state;
      switch (operator) {
        case "+":
          this.setState((prevState) => ({
            toggleDisplay: true,
            elementOne: prevState.elementOne + Number(prevState.inputValue),
            operator: e.target.value,
            inputValue: "",
          }));
          break;
        case "−":
          this.setState((prevState) => ({
            toggleDisplay: true,
            elementOne: prevState.elementOne - Number(prevState.inputValue),
            operator: e.target.value,
            inputValue: "",
          }));
          break;
        case "×":
          this.setState((prevState) => ({
            toggleDisplay: true,
            elementOne: prevState.elementOne * Number(prevState.inputValue),
            operator: e.target.value,
            inputValue: "",
          }));
          break;
        case "÷":
          this.setState((prevState) => ({
            toggleDisplay: true,
            elementOne: prevState.elementOne / Number(prevState.inputValue),
            operator: e.target.value,
            inputValue: "",
          }));
          break;
        case "=":
          this.setState(
            {
              toggleDisplay: true,
            },
            this.handleEqual(),
            { operator: e.target.value },
            { inputValue: "" }
          );
          break;

        default:
          break;
      }
    }
  };

  handleClear = () => {
    this.setState({
      inputValue: "0",
      operator: "",
      elementOne: 0,
      toggleDisplay: false,
      functionEntered: false,
      equalInteger: -Infinity,
      negaviteInput: false,
    });
  };

  handleEqual = (equalOperator) => {
    switch (equalOperator) {
      case "+":
        this.setState((prevState) => ({
          toggleDisplay: true,
          elementOne: prevState.elementOne + Number(prevState.inputValue),
          equalInteger: Number(prevState.inputValue),
          inputValue: "",
        }));
        break;
      case "−":
        this.setState((prevState) => ({
          toggleDisplay: true,
          elementOne: prevState.elementOne - Number(prevState.inputValue),
          equalInteger: Number(prevState.inputValue),
          inputValue: "",
        }));
        break;
      case "×":
        this.setState((prevState) => ({
          toggleDisplay: true,
          elementOne: prevState.elementOne * Number(prevState.inputValue),
          equalInteger: Number(prevState.inputValue),
          inputValue: "",
        }));
        break;
      case "÷":
        this.setState((prevState) => ({
          toggleDisplay: true,
          elementOne: prevState.elementOne / Number(prevState.inputValue),
          equalInteger: Number(prevState.inputValue),
          inputValue: "",
        }));
        break;

      default:
        break;
    }
  };

  render() {
    console.log(this.state);
    const {
      inputValue,
      toggleDisplay,
      functionEntered,
      elementOne,
      operator,
    } = this.state;

    return (
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <Display
          inputValue={inputValue}
          toggleDisplay={toggleDisplay}
          functionEntered={functionEntered}
          elementOne={elementOne}
        />
        <Buttons
          // negaviteInput={this.negaviteInput}
          operator={operator}
          handleNumber={this.handleNumber}
          handleClear={this.handleClear}
          handleOperator={this.handleOperator}
          handleEqual={this.handleEqual}
          handleDecimal={this.handleDecimal}
          handleNegative={this.handleNegative}
        />
      </div>
    );
  }
}
