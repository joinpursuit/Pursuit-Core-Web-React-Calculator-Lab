import React from "react";
import "./App.css";
import Keypad from "./components/Keypad";
import ResultDisplay from "./components/ResultDisplay";

class App extends React.Component {
  state = { result: 0, prevNumber: "", currentNum: 0, operator: ""};

  handleNumber = (e) => {
    e.preventDefault();
    this.setState({result: this.state.prevNumber + e.target.value})
    this.setState({prevNumber: this.state.prevNumber + e.target.value})
    // debugger
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({result: e.target.value})
    this.setState({prevNumber: ""})
  }

  zero = (e) => {
    e.preventDefault();
    if(this.state.result !== 0) {
      this.setState({result: this.state.result + e.target.value})
      this.setState({result: this.state.prevNumber + e.target.value})
      this.setState({prevNumber: this.state.prevNumber + e.target.value})
    }
  }

  decimal = (e) => {
    e.preventDefault();
    if(this.state.result.indexOf(".") === -1) {
      this.setState({input: this.state.result + e.target.value})
      this.setState({result: this.state.prevNumber + e.target.value})
      this.setState({prevNumber: this.state.prevNumber + e.target.value})
    }
  }

  handleAddition = (e) => {
    e.preventDefault();
    this.setState({currentNum: this.state.result});
    this.setState({result: "", operator: "plus", prevNumber: ""});
    // this.state.operator = "plus";
  }

  handleSubtraction = (e) => {
    e.preventDefault();
    this.setState({currentNum: this.state.result});
    this.setState({result: "", operator: "subtract", prevNumber: ""});
    // this.state.operator = "plus";
  }
  
  handleMultiplication = (e) => {
    e.preventDefault();
    this.setState({currentNum: this.state.result});
    this.setState({result: "", operator: "multiplication", prevNumber: ""});
    // this.state.operator = "plus";
  }

  handleDivision = (e) => {
    e.preventDefault();
    this.setState({currentNum: this.state.result});
    this.setState({result: "", operator: "division", prevNumber: ""});
    // this.state.operator = "plus";
  }

  negativeNum = (e) => {
    e.preventDefault();
    this.setState({result: Number(this.state.result) * -1});
  }

  evaluate = (e) => {
    e.preventDefault();
    if(this.state.operator === "plus") {
      this.setState({result: Number(this.state.currentNum) + Number(this.state.result)})
    } else if(this.state.operator === "subtract") {
      this.setState({result: Number(this.state.currentNum) - Number(this.state.result)})
    } else if(this.state.operator === "multiplication") {
      this.setState({result: Number(this.state.currentNum) * Number(this.state.result)})
    } else if(this.state.operator === "division") {
      this.setState({result: Number(this.state.currentNum) / Number(this.state.result)})
    } 
  }

  render() {
    return (
      <div className="App">
        {/* <h3>Calculator App</h3> */}
        <div className="calculator-perimeter">
          <ResultDisplay result={this.state.result}/>
          <Keypad handleNumber={this.handleNumber} handleClear={this.handleClear} handleAddition={this.handleAddition} handleSubtraction={this.handleSubtraction} handleMultiplication={this.handleMultiplication} handleDivision={this.handleDivision} negativeNum={this.negativeNum} evaluate={this.evaluate} zero={this.zero} decimal={this.decimal}/>
        </div>
      </div>
    );
  }
}

export default App;
