import React from "react";
import "./Calculator.css";

class Display extends React.Component {
  handleDisplay = () => {
    const { showNums, isPositive, result, numbers } = this.props;
    if (result === "") {
      return showNums.toLocaleString();
    } else {
      return Number(result).toLocaleString();
    }
  };
  render() {
    return (
      <section className="display">
        <span>{this.handleDisplay()}</span>
      </section>
    );
  }
}
export default Display;
