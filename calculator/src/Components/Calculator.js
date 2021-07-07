import { React, Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    output: "",
    prevState: "",
    addNum: "true",
    operator: "",
  };

  render() {
    const numPressed = (e) => {
      const { value } = e.target;
      const { output, addNum } = this.state;
      if (addNum) {
        this.setState({ output: value, addNum: false });
      } else {
        this.setState({ output: output + value });
      }
    };

    const operatorPressed = (e) => {
      const { value } = e.target;
      const { output } = this.state;
      this.setState({
        prevState: output,
        operator: value,
        addNum: true,
      });
    };

    const calculate = () => {
      const { output, prevState, operator } = this.state;
      if (operator === "+") {
        this.setState({
          output: Number(prevState) + Number(output),
          addNum: true,
        });
      } else if (operator === "-") {
        this.setState({
          output: Number(prevState) - Number(output),
          addNum: true,
        });
      } else if (operator === "*") {
        this.setState({
          output: Number(prevState) * Number(output),
          addNum: true,
        });
      } else if (operator === "/") {
        this.setState({
          output: Number(prevState) / Number(output),
          addNum: true,
        });
      }
    };

    const reset = () => {
      this.setState({
        output: "",
        prevState: "",
        addNum: "true",
        operator: "",
      });
    };

    const backspace = () => {
      this.setState({ output: output.slice(0, -1) });
    };

    const inverse = () => {
      this.setState({ output: Number(output) * -1 });
    };

    const percent = () => {
      this.setState({ output: Number(output) / 100 });
    };

    const decimal = (e) => {
      const { value } = e.target;
      const { output } = this.state;
      if (!output.includes(value)) {
        this.setState({ output: output + value });
      }
    };

    const { output } = this.state;
    return (
      <div className="container">
        <div className="output">
          {output === "" ? 0 : Number(output).toLocaleString()}
        </div>
        <div className="buttons">
          <button name="%" onClick={percent} class="neonPurple">
            %
          </button>
          <button name="AC" onClick={reset} class="neonPurple">
            AC
          </button>
          <button name="C" onClick={backspace} class="neonPurple">
            C
          </button>
          <button name="+" onClick={operatorPressed} value="+" class="neonBlue">
            +
          </button>
          <button href="#" name="1" onClick={numPressed} value="1" class="neonPink">
            1
          </button>
          <button name="2" onClick={numPressed} value="2" class="neonPink">
            2
          </button>
          <button name="3" onClick={numPressed} value="3" class="neonPink">
            3
          </button>
          <button name="-" onClick={operatorPressed} value="-" class="neonBlue">
            -
          </button>
          <button name="4" onClick={numPressed} value="4" class="neonPink">
            4
          </button>
          <button name="5" onClick={numPressed} value="5" class="neonPink">
            5
          </button>
          <button name="6" onClick={numPressed} value="6" class="neonPink">
            6
          </button>
          <button name="/" onClick={operatorPressed} value="/" class="neonBlue">
            /
          </button>
          <button name="7" onClick={numPressed} value="7" class="neonPink">
            7
          </button>
          <button name="8" onClick={numPressed} value="8" class="neonPink">
            8
          </button>
          <button name="9" onClick={numPressed} value="9" class="neonPink">
            9
          </button>
          <button name="*" onClick={operatorPressed} value="*" class="neonBlue">
            *
          </button>
          <button name="±" onClick={inverse} class="neonPurple">
            ±
          </button>
          <button name="0" onClick={numPressed} value="0" class="neonPink">
            0
          </button>
          <button name="." onClick={decimal} value="." class="neonPurple">
            .
          </button>
          <button name="=" onClick={calculate} class="neonGreen">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
