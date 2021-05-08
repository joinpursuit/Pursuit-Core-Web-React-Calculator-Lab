import React from "react";
import "../Components/Button.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button" name="AC" onClick={(e) => this.props.onClick(e.target.name)}>
          AC
        </button>
        <button className="button" name="sign" onClick={(e) => this.props.onClick(e.target.name)}>
          +/-
        </button>
        <button className="button" name="%" onClick={(e) => this.props.onClick(e.target.name)}>
          %
        </button>
        <button className="button-right" name="/" onClick={(e) => this.props.onClick(e.target.name)}>
          /
        </button>{" "}
        <br />
        <button className="button" name="7" onClick={(e) => this.props.onClick(e.target.name)}>
          7
        </button>
        <button className="button" name="8" onClick={(e) => this.props.onClick(e.target.name)}>
          8
        </button>
        <button className="button" name="9" onClick={(e) => this.props.onClick(e.target.name)}>
          9
        </button>
        <button className="button-right" name="*" onClick={(e) => this.props.onClick(e.target.name)}>
          x
        </button>
        <br />
        <button className="button" name="4" onClick={(e) => this.props.onClick(e.target.name)}>
          4
        </button>
        <button className="button" name="5" onClick={(e) => this.props.onClick(e.target.name)}>
          5
        </button>
        <button className="button" name="6" onClick={(e) => this.props.onClick(e.target.name)}>
          6
        </button>
        <button className="button-right" name="-" onClick={(e) => this.props.onClick(e.target.name)}>
          -
        </button>
        <br />
        <button className="button" name="1" onClick={(e) => this.props.onClick(e.target.name)}>
          1
        </button>
        <button className="button" name="2" onClick={(e) => this.props.onClick(e.target.name)}>
          2
        </button>
        <button className="button" name="3" onClick={(e) => this.props.onClick(e.target.name)}>
          3
        </button>
        <button className="button-right" name="+" onClick={(e) => this.props.onClick(e.target.name)}>
          +
        </button>
        <br />
        <button className="button zero" name="0" onClick={(e) => this.props.onClick(e.target.name)}>
          0
        </button>
        <button className="button" name="." onClick={(e) => this.props.onClick(e.target.name)}>
          .
        </button>
        <button className="button-right" name="=" onClick={(e) => this.props.onClick(e.target.name)}>
          =
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default Button;
