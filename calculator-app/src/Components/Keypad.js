import React, {Component} from 'react';
import "../Styles/KeypadStyle.css"
 
class Keypad extends Component {
 
 
   render() {
       const {handleClick, handleOperation, calculate, clear, negateNum} = this.props
       return (
           <div className="containerButtons">
 
               <div className="row1">
                   <button value="(" >(</button>
                   <button value="AC" onClick={clear}>AC</button>
                   <button value=")" >)</button>
                   <button value="+/-" onClick={negateNum}>+/-</button><br/>
               </div>
 
               <div className="row2">
                   <button  value="1" onClick={handleClick}>1</button>
                   <button  value="2" onClick={handleClick}>2</button>
                   <button  value="3" onClick={handleClick}>3</button>
                   <button  value="+" onClick={handleOperation}>+</button><br/>
               </div>
 
               <div className="row3">
                   <button  value="4" onClick={handleClick}>4</button>
                   <button  value="5" onClick={handleClick} >5</button>
                   <button  value="6"onClick={handleClick} >6</button>
                   <button  value="-" onClick={handleOperation}>-</button><br/>
               </div>
             
               <div className="row4">
                   <button  value="7" onClick={handleClick} >7</button>
                   <button  value="8" onClick={handleClick}>8</button>
                   <button  value="9"onClick={handleClick} >9</button>
                   <button value="*" onClick={handleOperation}>x</button><br/>
               </div>
              
 
               <div className="row5">
                   <button value="." onClick={handleClick}>.</button>
                   <button  value="0" onClick={handleClick}>0</button>
                   <button  value="=" onClick={calculate}>=</button>
                   <button  value="/" onClick={handleOperation}>÷</button><br/>
               </div>       
           </div>
       );
   }
}
 
 
export default Keypad;
