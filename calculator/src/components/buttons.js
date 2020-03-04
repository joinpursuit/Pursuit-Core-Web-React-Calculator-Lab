import React from "react";
import NumberFormat from "react-number-format";

const Buttons = ({
  currentVal,
  numButtonsHandler,
  clearButtonHandler,
  oppHandler,
  equalHandler,
  toggleHandler,
  clearSymbol,
  handlePercent
}) => {
  return (
    <div className="grid-container">
      <div className="display">
        <NumberFormat
          value={currentVal}
          displayType={"text"}
          thousandSeparator={true}
          renderText={value => <h1>{value}</h1>}
        />
      </div>
      <div className="zero">
        <button onClick={numButtonsHandler} name="0" value="0">
          0
        </button>
      </div>
      <div className="dot">
        <button onClick={numButtonsHandler} name="." value=".">
          .
        </button>
      </div>
      <div id="opperator" className="equal">
        <button onClick={equalHandler} id="opperator" name="=" value="=">
          =
        </button>
      </div>
      <div className="ac">
        <button onClick={clearButtonHandler} name="ac" value="ac">
          {clearSymbol === true ? "C" : "AC"}
        </button>
      </div>
      <div className="percent">
        <button onClick={handlePercent} name="%" value="%">
          %
        </button>
      </div>
      <div className="negPos">
        <button onClick={toggleHandler} id="neggPos" name="-+" value="-+">
          +
        </button>
      </div>

      <div className="divide">
        <button onClick={oppHandler} id="opperator" name="/" value="/">
          /
        </button>
      </div>
      <div className="multiply">
        <button onClick={oppHandler} id="opperator" name="*" value="*">
          *
        </button>
      </div>
      <div className="subtract">
        <button onClick={oppHandler} id="opperator" name="-" value="-">
          -
        </button>
      </div>
      <div className="add">
        <button onClick={oppHandler} id="opperator" name="+" value="+">
          +
        </button>
      </div>
      <div className="seven">
        <button onClick={numButtonsHandler} name="7" value="7">
          7
        </button>
      </div>
      <div className="eight">
        <button onClick={numButtonsHandler} name="8" value="8">
          8
        </button>
      </div>
      <div className="nine">
        <button onClick={numButtonsHandler} name="9" value="9">
          9
        </button>
      </div>
      <div className="four">
        <button onClick={numButtonsHandler} name="4" value="4">
          4
        </button>
      </div>
      <div className="five">
        <button onClick={numButtonsHandler} name="5" value="5">
          5
        </button>
      </div>
      <div className="six">
        <button onClick={numButtonsHandler} name="6" value="6">
          6
        </button>
      </div>
      <div className="one">
        <button onClick={numButtonsHandler} name="1" value="1">
          1
        </button>
      </div>
      <div className="two">
        <button onClick={numButtonsHandler} name="2" value="2">
          2
        </button>
      </div>
      <div className="three">
        <button onClick={numButtonsHandler} name="3" value="3">
          3
        </button>
      </div>
    </div>
  );
};

export default Buttons;
