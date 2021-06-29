import React from "react";
import "./Calculator.css";

class NumberButtons extends React.Component {
  handleClick = (e) => {
    const { addNums } = this.props;
    const newNum = e.target.value;
    addNums(newNum);
  };

  render() {
    return (
      <section className="numberButtons">
        <button type="button" name="9" value={9} onClick={this.handleClick}>
          9
        </button>
        <button type="button" name="8" value={8} onClick={this.handleClick}>
          8
        </button>
        <button type="button" name="7" value={7} onClick={this.handleClick}>
          7
        </button>
        <button type="button" name="6" value={6} onClick={this.handleClick}>
          6
        </button>
        <button type="button" name="5" value={5} onClick={this.handleClick}>
          5
        </button>
        <button type="button" name="4" value={4} onClick={this.handleClick}>
          4
        </button>
        <button type="button" name="3" value={3} onClick={this.handleClick}>
          3
        </button>
        <button type="button" name="2" value={2} onClick={this.handleClick}>
          2
        </button>
        <button type="button" name="1" value={1} onClick={this.handleClick}>
          1
        </button>
        <button
          id="button0"
          type="button"
          name="0"
          value={0}
          onClick={this.handleClick}
        >
          0
        </button>
      </section>
    );
  }
}

export default NumberButtons;
