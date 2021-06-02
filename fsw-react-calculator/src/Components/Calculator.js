import React from "react";
import Buttons from "./Buttons";

import "../calculator.css"

class Calculator extends React.Component {
  state = { display: "0", userNum1: "", userNum2: "", operator: "", justEvaluated: false, enterSecondNum: false};

  enterNum = (num) => {
    this.setState((prevState) => {
      let newDisplay;
      if (prevState.display === "0" || prevState.justEvaluated || prevState.enterSecondNum) {
        newDisplay = num;
     
      } else  {
        newDisplay = prevState.display + num;
      }
      return {
        display: newDisplay,
        userNum2: newDisplay,
        justEvaluated: false,
        enterSecondNum: false
      };
    });
  };

  addition = (addition) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        operator: addition,
        enterSecondNum: true
      };
    });
  };
  subtraction = (subtraction) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        operator: subtraction,
        enterSecondNum: true
      };
    });
  };
  multiplication = (multiplication) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        operator: multiplication,
        enterSecondNum: true
      };
    });
  };
  division = (division) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        operator: division,
        enterSecondNum: true
      };
    });
  };

  equals = () => {
    this.setState((prevState) => {
      let total = 0;
 
switch(prevState.operator){
        case "addition":
          total = Number(prevState.userNum1) + Number(prevState.userNum2);
          break;  
        case "subtraction":
          total = Number(prevState.userNum1) - Number(prevState.userNum2);
          break;  
        case "multiplication":
          total = Number(prevState.userNum1) * Number(prevState.userNum2);
          break;  
        case "division":
          total = Number(prevState.userNum1) / Number(prevState.userNum2);
          break;  
        default:
          total = 'no operator chosen'
      }
      return {
        display: total,
        justEvaluated: true,
        enterSecondNum: false
      };
    });
  };

  clear = () => {
    this.setState((prevState) => {
      return {
        display: "0",
        userNum1: "",
        userNum2: "",
        enterSecondNum: false
      };
    });
  };


  posNegButton = () => {
    const { display } = this.state;
    this.setState({ display: Number(display) * -1 });
  };

  render() {
    const { display} = this.state;

    return (
      <div className="calculator-div">
        
        <Buttons
          displayString={Number(display).toLocaleString()}
          enterNum={this.enterNum}
          addition={this.addition}
          subtraction={this.subtraction}
          multiplication={this.multiplication}
          division={this.division}
          posNegButton={this.posNegButton}
          equals={this.equals}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default Calculator;
