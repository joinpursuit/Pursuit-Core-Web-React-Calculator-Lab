import "./App.css";
import { Component } from "react";
import ResultInputs from "./Components/ResultInputs";
import KeyPadInput from "./Components/KeyPadInput";

class App extends Component {
  state = { result: "" };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var theResults = "";
    if (this.state.result.includes("-")) {
      theResults = this.state.result.replace("-", "+");
    } else {
      theResults = this.state.result;
    }

    try {
      this.setState({
        result: (eval(theResults) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    // const result = this.state
    return (
      <div className="App">
        <ResultInputs result={this.state.result} />
        <KeyPadInput onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
