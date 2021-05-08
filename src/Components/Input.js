import React from 'react';

export const Input = ({input,result}) => {
    return (
        <div>
            <div className='Display'>{input}</div>
            <div className='Display'>{result}</div>
        </div>
    )
}