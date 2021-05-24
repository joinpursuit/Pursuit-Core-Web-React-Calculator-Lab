import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
setInput(input.concat(e.target.name))
  };

  const evaluate = () => {
    setInput(eval(input).toString());
  };

  const sign = (e) => {
    if (setInput(e.target.name) === "-") {
      setInput((input * -1).concat(e.target.name)) ;
    }
  };

  return (
    <div className="calc-container">
      <form>
        <input type="text" value={input} />
      </form>

      <div className="keys">
        <button onClick={() => setInput(0)} id="reset" className="pop">
          AC
        </button>
        <button onClick={sign} name="-" className="pop">
          ±
        </button>
        <button className="pop" onClick={handleClick} name="*">
          &times;
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="pop" name="/" onClick={handleClick}>
          &divide;
        </button>

        <button onClick={handleClick} name="4">
          4
        </button>
        <button onClick={handleClick} name="5">
          5
        </button>
        <button onClick={handleClick} name="6">
          6
        </button>
        <button className="pop" name="+" onClick={handleClick}>
          +
        </button>

        <button onClick={handleClick} name="1">
          1
        </button>
        <button onClick={handleClick} name="2">
          2
        </button>
        <button onClick={handleClick} name="3">
          3
        </button>
        <button onClick={handleClick} name="-" className="pop">
          &ndash;
        </button>

        <button onClick={handleClick} name="0">
          0
        </button>
        <button onClick={handleClick} name=".">
          .
        </button>

        <button
          onClick={evaluate}
          id="equal"
          className="pop"
          value={input}
          name="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;