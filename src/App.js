import './App.css';
import React from 'react';
import KeyLayout from './Components/KeyLayout';
import CalcDisplay from  './Components/CalcDisplay';
import { evaluate, typeOf } from 'mathjs';

export default class App extends React.Component{
  state = {
    input: '',
    result: ''
  }

  handleClear = () => {
    this.setState({
      input: '',
      result: ''
    })
  }

  handleClick = val => {
    const {input} = this.state;
    if(typeOf(val) === 'Object'){
      val = val.icon
    }
    this.setState({
      input: input + val
    })
  }

  handleEqual = () => {
    const {input} = this.state;
    this.setState({
      input: '',
      result: evaluate(input),
    })
  }
  handleZero = val => {
    const {input} = this.state;
    if(input !== ''){
      this.setState({
        input: input + val.icon
      })
    }
  }

  //iterate string backwards and check for an operator
  // meets and operator allow a decimal again
  //no arg needed just handle "."
  handleDecimal = val => {
    
    // "+-/*"
    const {input} = this.state;
    let hasDouble = /(\.)\1/.test(input);
    let value = val.icon;
    if(hasDouble){
      value = value.replace(/\.+/g, ".")
      console.log(value)
    }
    if(typeOf(val) === 'Object'){
      val = val.icon
    }
    this.setState({
      input: input + val
    })
  }
  
  render() {
    const {result,input} = this.state;
    console.log(input)
    return (
      <div className="App">
        <div className="CalcBody">
          <CalcDisplay result={result} input={input}/>
          <KeyLayout
            handleEqual={this.handleEqual}
            handleClick={this.handleClick}
            handleClear={this.handleClear}
            handleZero={this.handleZero}
            handleDecimal={this.handleDecimal}
          />
        </div>
      </div>
    );
  }
}
