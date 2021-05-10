import React from "react";
// import buttonData from "../Data/buttonData";
// import numberData from "../Data/numberData";
// import Numbers from "./Numbers";

const Buttons = ({ handleClear, handleEqual, handleNumber, handleOperator, operator, handleDecimal, handleNegative
  // negaviteInput
 }) => {
  // {() => removeToDos(toDo.id)}
  const equalOperator = operator;
  return (
    <section className="calculator">
      <button  className="clear" onClick={handleClear} name="clear">
        AC
      </button>
      <button  className="posNeg"  onClick={handleNegative} name="posNeg" value="&plusmn;">
        &plusmn;
      </button>
      <button  className="numero" value="1" onClick={handleNumber} name={1} >
        1
      </button>
      <button  className="numero" onClick={handleNumber} name="two" value="2">
        2
      </button>
      <button  className="numero" onClick={handleNumber} name="three" value="3">
        3
      </button>
      <button  className="numero" onClick={handleNumber} name="four" value="4">
        4
      </button>
      <button  className="numero" onClick={handleNumber} name="five" value="5">
        5
      </button>
      <button  className="numero" onClick={handleNumber} name="six" value="6">
        6
      </button>
      <button  className="numero" onClick={handleNumber} name="seven" value="7">
        7
      </button>
      <button  className="numero" onClick={handleNumber} name="eight" value="8">
        8
      </button>
      <button  className="numero" onClick={handleNumber} name="nine" value="9">
        9
      </button>
      <button  className="numero" onClick={handleNumber} name="zero" value="0">
        0
      </button>
      {/* <button  className="decimal" onClick={handleDecimal} name="decimal" value=".">.</button> */}
      <button  className="operator" onClick={handleOperator} name="plus" value="+">
        +
      </button>
      <button  className="operator"
        onClick={handleOperator}
        name="subtract"
        value="&minus;"
      >
        &minus;
      </button>
      <button  className="operator"
        onClick={handleOperator}
        name="multiply"
        value="&times;"
      >
        &times;
      </button>
      <button  className="operator"
        onClick={handleOperator}
        name="divide"
        value="&divide;"
      >
        &divide;
      </button>
      <button  className="equal" onClick={() => handleEqual(equalOperator)} name="equal" value="=">
        =
      </button>
      {/* <button  className="backspace" name="backspace">backspace arrow</button> */}
    </section>
  );
};

export default Buttons;

// const Number = ({ num }) => {
//   // const { character } = numValues;
//   console.log({ num });
//   return (
//   );
// };

// export default Number;
