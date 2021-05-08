import React from 'react';

const Button = ({icon, handleClick}) => {
    return (
        <button onClick={() => handleClick({icon})}>{icon}</button>
    )
}

export default Button;