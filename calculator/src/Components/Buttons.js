import React from 'react';
import './Buttons.css'; 

const Buttons = ({handleInput, handleEqual, handleClear, handleOp, handleZero }) =>  {
   
   return (
        <div className="calculator-container">
          
          <div className ="row">
                <button  onClick={handleClear}className="buttons" value="clear">AC</button> 
                <button className="buttons">+/-</button>
                <button className="buttons">%</button>
                <button onClick={handleOp}className="buttons" id="operator" value='/'>÷</button>
             </div>

             <div className ="row">
                <button onClick={handleInput}className="buttons" value='7'>7</button> 
                <button onClick={handleInput}className="buttons"value='8'>8</button>
                <button onClick={handleInput}className="buttons"value='9'>9</button>
                <button onClick={handleOp}className="buttons" id="operator" value='*'>x</button>
             </div>

             <div className ="row">
                <button onClick={handleInput}className="buttons"value='4'>4</button> 
                <button onClick={handleInput}className="buttons"value='5'>5</button>
                <button onClick={handleInput}className="buttons"value='6'>6</button>
                <button onClick={handleOp}className="buttons" id="operator"value='-'>-</button>
             </div>

             <div className ="row">
                <button onClick={handleInput}className="buttons"value='1'>1</button> 
                <button onClick={handleInput}className="buttons"value='2'>2</button>
                <button onClick={handleInput}className="buttons"value='3'>3</button>
                <button onClick={handleOp}className="buttons" id="operator" value='+'>+</button>
             </div>

             <div className ="row">
                <button onClick={handleZero}className="buttons"value='0'>0</button>
                <button onClick={handleZero}className="buttons"value='00'>00</button>
                <button onClick={handleInput}className="buttons" value='.'>.</button> 
                {/* ^^ line handle differnt function */}
                <button onClick={handleEqual}className="buttons" id="operator"value="equal">=</button>
            </div> 

        </div>
    )
}

export default Buttons; 