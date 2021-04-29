import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
    state = { display: 0 }

    enterNumber = (e) => {
        this.setState({ display: e.target.value })
        debugger
    }

  render() {
      const { display } = this.state
    return (
      <div className="Calculator">
        <div className="Display" value={display}>0</div>
        <button className="TopRow">AC</button>
        <button className="TopRow">%</button>
        <button className="Operator">÷</button>
        <button className="SecondRow" onClick={this.enterNumber} value={7}>7</button>
        <button className="SecondRow">8</button>
        <button className="SecondRow">9</button>
        <button className="Operator">x</button>
        <button className="ThirdRow">4</button>
        <button className="ThirdRow">5</button>
        <button className="ThirdRow">6</button>
        <button className="Operator">-</button>
        <button className="FourthRow">1</button>
        <button className="FourthRow">2</button>
        <button className="FourthRow">3</button>
        <button className="Operator">+</button>
        <button className="BottomRow">0</button>
        <button className="BottomRow">.</button>
        <button className="BottomRow">±</button>
        <button className="Operator">=</button>
      </div>
    );
  }
}

export default Calculator;
