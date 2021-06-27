import { Component } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Input from "./Components/Input";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "0", operator: "", previousNumber: ""};
  }


 

  handleInput = (e) => {
    
    this.setState({ input: e.target.value});
  };

   handleZero = (value) => {
     if (this.state.input !== "") {
       this.setState({ input: this.state.input + value})
     }
   }

  

   handleOp = (e) => {
     this.setState({
       operator: e.target.value, previousNumber: this.state.input })
   }


   handleEqual = () => { 
     const {operator, input, previousNumber} = this.state
     let sum = 0
    if (operator === "/"){
      sum = Number(previousNumber) / Number(input)
      this.setState({input: sum})
    } else if (operator === "*") {
      sum = Number(previousNumber) * Number(input)
      this.setState({input: sum})
    } else if (operator === "-"){
      sum = Number(previousNumber) - Number(input)
      this.setState({input: sum})
    } else if (operator === "+"){
      sum = Number(previousNumber) + Number(input)
      this.setState({input: sum})
    }
   }

   handleClear = () => {
     this.setState({input: "0"})
   }
   


  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <Input input={this.state.input} />
          <div className="row">
            <Buttons handleInput={this.handleInput} handleEqual={this.handleEqual} handleOp={this.handleOp} handleClear={this.handleClear}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
