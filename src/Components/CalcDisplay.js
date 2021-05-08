import React from 'react';
import { Input } from './Input';

export default class CalcDisplay extends React.Component {    
    render () {
        const {result,input} = this.props;
        return (
            <div className='CalcDisplay'>
                <Input input={input} result={result}/>
            </div>
        )
    }
}