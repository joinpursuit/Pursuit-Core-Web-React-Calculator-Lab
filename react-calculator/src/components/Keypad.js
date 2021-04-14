import React from 'react';
import './css/Keypad.css';

class Keypad extends React.Component{

    render(){
        return(
            <div className="keypad">
            {/* <div className="row1"> */}
            <div className='bAC'>
                <button name="AC">AC</button>
            </div>
            <div className="b%">
                <button name="%">%</button>
            </div>
            <div className="divide">
                <button id="divide" name="b/" ><span>&#247;</span></button>
            </div>
            <div className="b+-">
                <button name="+-"> +-</button>
                {/* </div> */}
            </div>
            <div className="b7">
                <button name="7">7</button>
            </div>
            <div className="b8">
                <button name="8">8</button>
            </div>
            <div className="b9">
                <button name="9">9</button>
            </div>
            <div className="multiply">
                <button id="multiply" name="multiply">X</button>
            </div>
            <div className="b4">
                <button name="4">4</button>
            </div>
            <div className="b5">
                <button name="5">5</button>
            </div>
            <div className="b6">
                <button name="6">6</button>
            </div>
            <div className="minus">
                <button id="minus" name="-">-</button>
            </div>
            <div className="b1">
                <button name="1">1</button>
            </div>
            <div className="b2">
                <button name="2">2</button>
            </div>
            <div className="b3">
                <button name="3">3</button>
            </div>
            <div className="plus">
                <button id="plus" name="+">+</button>
            </div>
            <div className="b0">
                <button name="0">0</button>
            </div>
            <div className="b.">
                <button name=".">.</button>
            </div>
            <div className="b=">
                <button id="equal" name="=">=</button>
            </div>

            </div>
        )
    }
}

export default Keypad;