import React from 'react'

function Display(props) {
    return (
        <div>
            <h1 className="display">{props.displayString}</h1>
        </div>
    )
}

export default Display