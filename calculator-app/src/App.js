import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import * as math from 'mathjs';
//import Clear from './Components/Clear';

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: '0',
    };
    this.handleClear = this.handleClear.bind(this);
  };

  handleButtonClick = (button) => {
    const { result } = this.state;
    
    if(result === '0') {
      this.setState({ 
        result: '' + button
      })
    } 
    else {
      this.setState({
        result: result + button
      })
    };
  };

  handleClear = (button) => {
    this.setState({
      result: '0'
    });
  };

  handleEqual = (button) => {
    const { result } = this.state;
    const finalResult = Math.round(math.evaluate(result))

    this.setState({
      result: Number(finalResult).toLocaleString('en-US')
    });
  };
  
  handleSign = (button) => {
    this.setState({
      result: this.state.result * -1
    });
  };

  render() {
    const { result } = this.state;
  
    return (
      <section className='calc-container'>
      <div className='calculator'>
        <p className='result'>{result}</p>  

        <Buttons 
          className='button-container' 
          buttonClick={this.handleButtonClick} 
          handleSign={this.handleSign}
        />

        <button className='clear' name='clear' value='allClear' onClick={this.handleClear}>AC</button>
        <button className='equal' name='=' value='=' onClick={this.handleEqual}>=</button>
       
      </div>
      </section>
    );
  };
};

export default App;
