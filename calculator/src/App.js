import React from "react";
import "./styles/App.css";
import Display from "./components/display";
import Keypad from "./components/keypad";

class App extends React.Component {
  state = { input: '',
            display: 0 };

  handleClear = (e) => {
    this.setState({ input: ' ', display: 0});
  };

  posNeg = () => {
    const {input, display} = this.state
    if (display > 0) {
      this.setState({ input: 0 - Number(input), display: 0 - Number(display) });
    } else {
      this.setState({ input: Math.abs(input), display: Math.abs(display)  });
    }
  };

  handleOperator = (e) => {
    this.setState({display: 0, input: this.state.input + e.target.value})
  }

  handleClick = (e) => {
    const { value } = e.target;
    if (this.state.display === 0) {
      this.setState({ display: value, input: this.state.input + value });
    } else {
      this.setState((prevState) => {
        return { display: prevState.display + value, input: prevState.input + value };
      });
    }
  };

  calculate = (e) => {
    try {
       this.setState({display: eval(this.state.input), input: eval(this.state.input)})
      }
       catch (err) {
         this.setState({display:0, input:""})
       }
    }
  

  render() {
    return (
      <div className="App">
        <Display input={this.state.input} display={this.state.display}/>
        <Keypad
          handleClick={this.handleClick}
          handleClear={this.handleClear}
          posNeg={this.posNeg}
          handleOperator={this.handleOperator}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

export default App;
