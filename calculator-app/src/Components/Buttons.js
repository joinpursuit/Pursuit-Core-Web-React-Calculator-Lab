import React, { Component } from 'react';
import './Buttons.css';
import '../App.css';

class Buttons extends Component {
    buttonClicked = (e) => {
        this.props.buttonClick(e.target.name);
    };

    handleSign = (e) => {
        this.props.handleSign(e.target.name);
    };

    render() {
        
        return (
            <section className='buttons'>
                <div className='button'>
                    <button className='number' name='7' value='7' onClick={this.buttonClicked}>7</button>
                    <button className='number' name='4' value='4' onClick={this.buttonClicked}>4</button>
                    <button className='number' name='1' value='1' onClick={this.buttonClicked}>1</button>
                    <button className='number' name='0' value='0' onClick={this.buttonClicked}>0</button>
                </div>
                <div className='button'>
                    <button className='number' name='8' value='8' onClick={this.buttonClicked}>8</button>
                    <button className='number'  name='5' value='5' onClick={this.buttonClicked}>5</button>
                    <button className='number'  name='2' value='2' onClick={this.buttonClicked}>2</button>
                    <button className='bottom' name='+/-' onClick={this.handleSign}>+/-</button>
                </div>
                <div className='button'>
                    <button className='number'  name='9' value='9' onClick={this.buttonClicked}>9</button>
                    <button className='number'  name='6' value='6' onClick={this.buttonClicked}>6</button>
                    <button className='number'  name='3' value='3' onClick={this.buttonClicked}>3</button>
                    <button className='bottom' name='.' value='.' onClick={this.buttonClicked}>.</button>
                </div>
                <div className='button'>
                    <button className='right-side' name='/' value='/' onClick={this.buttonClicked}>/</button>
                    <button className='right-side' name='*' value='*' onClick={this.buttonClicked}>*</button>
                    <button className='right-side' name='-' value='-' onClick={this.buttonClicked}>-</button>
                    <button className='right-side' name='+' value='+' onClick={this.buttonClicked}>+</button>
                </div> 
            </section>
        );
    };
};

export default Buttons;
