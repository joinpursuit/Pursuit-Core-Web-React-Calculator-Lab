import React from 'react'


function Display (props) {
  const { display, evaluate, number, result, deleted, formatter } = props
  const lenResult = result.length

  let formatted = ""
  let infix = (deleted) ? display : evaluate;

    if(result !=="" && display===result){
        if(lenResult < 21){
          formatted = formatter(result, true)
        }else{
            formatted = formatter(result, false)
        }
    }else{
        formatted = (isNaN(parseFloat(number))) ? 0 : formatter(number, true)
    }
 
  return (
    <div className='display glass'>
      {formatted || '0'}
      <div className='preview'>{infix.trim().toLocaleString() || '0'}</div>
    </div>
  )
}

export default Display
