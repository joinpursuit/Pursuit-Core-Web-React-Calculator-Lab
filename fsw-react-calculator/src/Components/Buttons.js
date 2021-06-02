import React from 'react'
import Display from "./Display";


// const Buttons  = ({displayString, enterNum, addition, subtraction, multiplication, division, posNegButton, equals, clear}) => {
function Buttons (props) {
  
 
    // const {
    //   displayString,
    //   enterNum,
    //   addition,
    //   subtraction,
    //   multiplication,
    //   division,
    //   posNegButton,
    //   equals,
    //   clear,
    // } = props;

    const displayString2 = props.displayString


    return (
      <div className="button-container">

     
        <Display displayString={Number(displayString2).toLocaleString()}/>

        <button
          className="one-button"
          onClick={() => props.enterNum("1")}
          
        >
          1
        </button>
        <button
          className="two-button"
          onClick={() => props.enterNum("2")}
         
        >
          2
        </button>
        <button
          className="three-button"
          onClick={() => props.enterNum("3")}
         
        >
          3
        </button>
        <button
          className="four-button"
          onClick={() => props.enterNum("4")}
         
        >
          4
        </button>
        <button
          className="five-button"
          onClick={() => props.enterNum("5")}
        
        >
          5
        </button>
        <button
          className="six-button"
          onClick={() => props.enterNum("6")}
         
        >
          6
        </button>
        <button
          className="seven-button"
          onClick={() => props.enterNum("7")}
       
        >
          7
        </button>
        <button
          className="eight-button"
          onClick={() => props.enterNum("8")}
         
        >
          8
        </button>
        <button
          className="nine-button"
          onClick={() => props.enterNum("9")}
         
        >
          9
        </button>
        <button
          className="zero-button"
          onClick={() => props.enterNum("0")}
         
        >
          0
        </button>

        <button
          className="add-button"
          onClick={() => props.addition("addition")}
          
        >
          &#43;
        </button>
        <button
          className="subtract-button"
          onClick={() => props.subtraction("subtraction")}
         
        >
          &minus;
        </button>
        <button
          className="multiply-button"
          onClick={() => props.multiplication("multiplication")}
        
        >
          &times;
        </button>
        <button
          className="divide-button"
          onClick={() => props.division("division")}
         
        >
          &divide;
        </button>
        <button
          className="equals-button"
          onClick={() => props.equals()}
         
        >
          &#61;
        </button>
        <button
          className="pos-neg-button"
          onClick={() => props.posNegButton(displayString2)}
          value={displayString2}
        >
          &#177;
        </button>
        <button className="AC-button" onClick={() => props.clear()}>
          AC
        </button>
      </div>
    );
  
}

export default Buttons;
