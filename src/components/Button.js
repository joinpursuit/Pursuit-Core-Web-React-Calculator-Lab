import React from 'react'

function Button (props) {
  const { type, value, symbol, className, input } = props

  return (
    <button
      type={type}
      value={`${value},${type}`}
      className={className}
      onClick={input}
    >
      {symbol}
    </button>
  )
}

export default Button
