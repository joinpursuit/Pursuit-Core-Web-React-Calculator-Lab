import React from "react";
import "./Keypad.css";

class Keypad extends React.Component {
  render() {
    const {handleNumber, handleClear, decimal, evaluate, handleAddition, handleSubtraction, handleMultiplication, handleDivision, handlePercentage, negativeNum, zero} = this.props;
    return (
      <>
        <div className="row">
          <button name="AC" onClick={handleClear} value="0">AC</button>
          <button name="+/-" onClick={negativeNum} value="+/-">+/-</button>
          <button name="%" onClick={handlePercentage} value="%">%</button>
          <button name="÷" onClick={handleDivision} value="÷">÷</button>
        </div>
        <div className="row">
          <button name="7" onClick={handleNumber} value="7">7</button>
          <button name="8" onClick={handleNumber} value="8">8</button>
          <button name="9" onClick={handleNumber} value="9">9</button>
          <button name="x" onClick={handleMultiplication} value="x">x</button>
        </div>
        <div className="row">
          <button name="4" onClick={handleNumber} value="4">4</button>
          <button name="5" onClick={handleNumber} value="5">5</button>
          <button name="6" onClick={handleNumber} value="6">6</button>
          <button name="-" onClick={handleSubtraction} value="-">-</button>
        </div>
        <div className="row">
          <button name="1" onClick={handleNumber} value="1">1</button>
          <button name="2" onClick={handleNumber} value="2">2</button>
          <button name="3" onClick={handleNumber} value="3">3</button>
          <button name="+" onClick={handleAddition} value="+">+</button>
        </div>
        <div className="row">
          <button name="0" onClick={zero} value="0">0</button>
          <button name="." onClick={decimal} value=".">.</button>
          <button name="=" onClick={evaluate} value="=">=</button>
        </div>
      </>
    );
  }
}

export default Keypad;
