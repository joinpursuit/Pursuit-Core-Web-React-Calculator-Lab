import { Component } from 'react';
import "./App.css";
import Keypad from "./Keypad";
import CalcOutput from "./CalcOutput";

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      result: "0",
      operators: "",
      num1: "",
      previousNum: ""
    }
  } 
  handleClick = (e) => {
    const { result } = this.state;
    this.setState({ result: result + e.target.value });
  };
  addition = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "+"; 
  };
  subtract = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "-";
  };

  division = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "/";
  };
  multiplication = () => {
    this.state.previousNum = this.state.result;
    this.setState({ result: "" });
    this.state.operators = "*";
  };


calculate = () => { 
  this.state.num1 = this.state.result
  if(this.state.operators === "+"){
    this.setState({result: parseInt(this.state.previousNum) + parseInt(this.state.num1)})
  }else if(this.state.operators === "-"){
    this.setState({result: parseInt(this.state.previousNum) - parseInt(this.state.num1)})
  }else if(this.state.operators === "*"){
    this.setState({result: parseInt(this.state.previousNum) * parseInt(this.state.num1)})
  }else if(this.state.operators === "/"){
    this.setState({result: parseInt(this.state.previousNum) / parseInt(this.state.num1)})
  }
  }

reset = () => {
  this.setState({
      result: "0",
      num1: "",
      previousNum: "",
      operators: ""
  })
};
negative = () => {
  this.setState({
    result: this.state.result * -1
  })
};

render() { 
return (
  <div className="App">
    <h1>React Calculator</h1>
    <CalcOutput result={this.state.result}/>
    <Keypad handleClick ={this.handleClick} calculate={this.calculate} addition = {this.addition} subtract = {this.subtract} division = {this.division} multiplication = {this.multiplication} negative = {this.negative} reset = {this.reset}/>
  </div>
);
}
}
export default App;