import { Component } from "react";
import formatNums from "../helpers/formatNums";
import "../styles/Calculator.css";

class Calculator extends Component {
  state = { input: "", operator: null, isOperand: false, memory: null };

  handleNumbers = (e) => {
    const { isOperand } = this.state;
    if (isOperand) {
      this.setState({
        input: e.target.value,
        isOperand: false,
      });
    } else {
      this.setState((prevState) => ({
        input: prevState.input + e.target.value,
      }));
    }
  };

  handleSpecialKeys = (e) => {
    const { value } = e.target;
    let { input, memory, operator, isOperand } = this.state;

    if (value === "+/-") {
      this.setState({ input: input * -1 });
    }
    if (value === "AC" || value === "C") {
      this.setState({
        input: "",
        operator: null,
        isOperand: false,
        memory: null,
      });
    }
    if (value === "%") {
      this.setState({ input: input / 100 });
    }
    if (value === ".") {
      if (isOperand) {
        this.setState({ input: value, isOperand: false });
      } else if (!input.includes(value)) {
        this.setState({ input: input.toString() + value });
      }
    }
    if (value === "=") {
      if (operator === "+") {
        this.setState({ input: memory + Number(input) });
      } else if (operator === "-") {
        this.setState({ input: memory - input });
      } else if (operator === "*") {
        this.setState({ input: memory * input });
      } else if (operator === "/") {
        this.setState({ input: memory / input });
      }
      this.setState({ memory: null, isOperand: true });
    }
  };

  handleOperators = (operatorKey) => {
    const { input, operator, memory } = this.state;
    const num = Number(input);
    const operations = {
      "/": (memory, num) => memory / num,
      "*": (memory, num) => memory * num,
      "-": (memory, num) => memory - num,
      "+": (memory, num) => memory + num,
    };

    if (memory === null) {
      this.setState({ memory: num });
    } else if (operator) {
      const math = operations[operator](memory, num);
      this.setState({ memory: math, input: math });
    }
    this.setState({
      operator: operatorKey,
      isOperand: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefalut();
  };

  render() {
    const { input } = this.state;
    return (
      <main className="wrapper">
        <section className="Calculator">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={formatNums(input.toString()) || 0}
              readOnly={true}
              maxLength={11}
            />
            <div>
              <input
                type="button"
                value={input !== "" ? "C" : "AC"}
                onClick={this.handleSpecialKeys}
              />
              <input
                type="button"
                value="+/-"
                onClick={this.handleSpecialKeys}
              />
              <input type="button" value="%" onClick={this.handleSpecialKeys} />
              <input
                type="button"
                value="/"
                onClick={() => this.handleOperators("/")}
                className="focus"
              />
            </div>
            <div>
              <input type="button" value="7" onClick={this.handleNumbers} />
              <input type="button" value="8" onClick={this.handleNumbers} />
              <input type="button" value="9" onClick={this.handleNumbers} />
              <input
                type="button"
                value="*"
                onClick={() => this.handleOperators("*")}
                className="focus"
              />
            </div>
            <div>
              <input type="button" value="4" onClick={this.handleNumbers} />
              <input type="button" value="5" onClick={this.handleNumbers} />
              <input type="button" value="6" onClick={this.handleNumbers} />
              <input
                type="button"
                value="-"
                onClick={() => this.handleOperators("-")}
                className="focus"
              />
            </div>
            <div>
              <input type="button" value="1" onClick={this.handleNumbers} />
              <input type="button" value="2" onClick={this.handleNumbers} />
              <input type="button" value="3" onClick={this.handleNumbers} />
              <input
                type="button"
                value="+"
                onClick={() => this.handleOperators("+")}
                className="focus"
              />
            </div>
            <div>
              <input type="button" value="0" onClick={this.handleNumbers} />
              <input type="button" value="00" onClick={this.handleNumbers} />
              <input type="button" value="." onClick={this.handleSpecialKeys} />
              <input type="button" value="=" onClick={this.handleSpecialKeys} />
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Calculator;
