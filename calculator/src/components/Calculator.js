import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"
import Display from "./Display.js"
import * as math from "mathjs"


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: "0",
      previousValue: "",
      operator: "",
      waitingForOperand: false
      
    }
  }
  updateDisplay = (value) => {
    let {displayValue} = this.state
    if(value === "x"){
      value = "*"
    } else if (value === "÷"){
      value = "/"
    }
    this.setState({displayValue: displayValue === "0" ? value : displayValue + value})
  }

  handleEqual = () => {
    let {displayValue} = this.state
    let newValue = String(math.evaluate(displayValue))
    this.setState({displayValue: newValue})
  }

  handleDecimel = () => {
    let {displayValue} = this.state
    if (displayValue.indexOf(".") === -1) {
      this.setState({displayValue: displayValue + "."})
    }
  }

  handleInverter = () => {
    let {displayValue} = this.state
    this.setState({displayValue: displayValue.charAt(0) === "-" ? displayValue.substring(1) : "-" + displayValue})
  }

  handleClear = () => {
    this.setState({displayValue: "0"})
  }

  render () {
    let {displayValue} = this.state
    return (
      <div className="wrapper">
        <div>
          <Display displayValue={displayValue}/>
        </div>
        <div className="row">
          <Button handleClick={this.handleClear}>AC</Button>
          <Button handleClick={this.handleInverter}>+/-</Button>
          <Button handleClick={this.updateDisplay}>%</Button>
          <Button handleClick={this.updateDisplay}>÷</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>7</Button>
          <Button handleClick={this.updateDisplay}>8</Button>
          <Button handleClick={this.updateDisplay}>9</Button>
          <Button handleClick={this.updateDisplay}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>4</Button>
          <Button handleClick={this.updateDisplay}>5</Button>
          <Button handleClick={this.updateDisplay}>6</Button>
          <Button handleClick={this.updateDisplay}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>1</Button>
          <Button handleClick={this.updateDisplay}>2</Button>
          <Button handleClick={this.updateDisplay}>3</Button>
          <Button handleClick={this.updateDisplay}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>0</Button>
          <Button handleClick={this.updateDisplay}> </Button>
          <Button handleClick={this.handleDecimel}>.</Button>
          <Button handleClick={this.handleEqual}>=</Button>
        </div>
      </div>
    )
  }
}

export default Calculator