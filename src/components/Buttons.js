import React from 'react'
import Button from './Button'

function Buttons (props) {
  const { buttons, input } = props

  class Boton {
    constructor (type, value, symbol, className) {
      this.type = type
      this.value = value
      this.symbol = symbol
      this.className = className
    }
  }

  const keys = buttons.map(item => {
    const { info, className } = item
    const button = new Boton(info.type, info.value, info.symbol, className)

    return (
      <Button
        key={button.symbol}
        type={button.type}
        value={button.value}
        symbol={button.symbol}
        className={button.className}
        input={input}
      />
    )
  })

  return <>{keys}</>
}

export default Buttons
