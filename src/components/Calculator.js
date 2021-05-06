import React from 'react'
import Buttons from './Buttons'
import Display from './Display'


function Calculator (props) {

  const {buttons, input, operation, display, evaluate, number , prevEva, prevNum, prevRes, result, deleted, formatter}  = props

  return (
    <div className='calculator'>
      <Display 
        display={display}
        evaluate={evaluate}
        number={number}
        result={result}
        deleted ={deleted}
        formatter ={formatter}
      />
      <Buttons 
        buttons={buttons} 
        input={input} 
        operation={operation}/>
    </div>
  )
}

export default Calculator
