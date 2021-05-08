import React from 'react';
import Button from './Button';
import { ClearButton } from './ClearButton';

export default class KeyLayout extends React.Component {
    render () {
        const {handleClear,handleClick, handleEqual, handleZero, handleDecimal} = this.props;
        return (
            <div className='CalcButtons'>
                <ClearButton icon={'AC'} handleClear={handleClear}/>
                <Button icon={'±'} handleClick={handleClick}/>
                <Button icon={'%'} handleClick={handleClick}/>
                <Button icon={'÷'} handleClick={handleClick}/>
                <Button icon={'7'} handleClick={handleClick}/>
                <Button icon={'8'} handleClick={handleClick}/>
                <Button icon={'9'} handleClick={handleClick}/>
                <Button icon={'*'} handleClick={handleClick}/>
                <Button icon={'4'} handleClick={handleClick}/>
                <Button icon={'5'} handleClick={handleClick}/>
                <Button icon={'6'} handleClick={handleClick}/>
                <Button icon={'-'} handleClick={handleClick}/>
                <Button icon={'1'} handleClick={handleClick}/>
                <Button icon={'2'} handleClick={handleClick}/>
                <Button icon={'3'} handleClick={handleClick}/>
                <Button icon={'+'} handleClick={handleClick}/>
                <Button icon={'0'} handleClick={handleZero}/>
                <Button icon={'.'} handleClick={handleDecimal}/>
                <Button icon={'='} handleClick={() => handleEqual()}/>
                {/* <button className='ZeroKey'>0</button> */}
            </div>
        )
    }
}