import React from 'react';

export const ClearButton = ({icon,handleClear}) => {
    return (
        <button onClick={() => {handleClear()}}>{icon}</button>
    )
}