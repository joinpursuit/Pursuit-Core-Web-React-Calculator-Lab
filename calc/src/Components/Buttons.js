import React from "react";
import Input from "./Input";
import "../Styles/Buttons.css";

class Buttons extends React.Component {
  render() {
    const {
      inputA,
      numberButton,
      operators,
      equals,
      allClear,
      positiveNegative,
      percentage,
    } = this.props;
    return (
      <div id="wrapper">
        <div id="input-btn">
          <Input className="row" inputA={inputA} numberButton={numberButton} />
          <div className="row">
            <button id="all-clear" onClick={allClear}>
              AC
            </button>
            <button id="others">()</button>
            <button id="others" onClick={() => percentage("%")}>
              %
            </button>
            <button id="operators" onClick={() => operators("÷")}>
              ÷
            </button>
          </div>
          <div className="row">
            <button id="numbers" onClick={() => numberButton("7")}>
              7
            </button>
            <button id="numbers" onClick={() => numberButton("8")}>
              8
            </button>
            <button id="numbers" onClick={() => numberButton("9")}>
              9
            </button>
            <button id="operators" onClick={() => operators("*")}>
              *
            </button>
          </div>
          <div className="row">
            <button id="numbers" onClick={() => numberButton("4")}>
              4
            </button>
            <button id="numbers" onClick={() => numberButton("5")}>
              5
            </button>
            <button id="numbers" onClick={() => numberButton("6")}>
              6
            </button>
            <button id="operators" onClick={() => operators("-")}>
              -
            </button>
          </div>
          <div className="row">
            <button id="numbers" onClick={() => numberButton("1")}>
              1
            </button>
            <button id="numbers" onClick={() => numberButton("2")}>
              2
            </button>
            <button id="numbers" onClick={() => numberButton("3")}>
              3
            </button>
            <button id="operators" onClick={() => operators("+")}>
              +
            </button>
          </div>
          <div className="row">
            <button id="others" onClick={() => positiveNegative("-1")}>
              +/-
            </button>
            <button id="numbers" onClick={() => numberButton("0")}>
              0
            </button>
            <button id="others">.</button>
            <button id="equals" onClick={() => equals()}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
