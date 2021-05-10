import React from 'react'

export default function DisplayButtons({num1,num2,toggleNum,handleNumber,handleNegative,handleClear,handleMath,handleEqual,handlePercent}) {
    let displayNum = num1
    if(num2 !== 0){
        displayNum = num2
    }else{
        displayNum = num1
    }
    return (
        <div className="calculator">
            <p className="display">{Number(displayNum).toLocaleString('en-US')}</p>
            <button className="grey btn"onClick={() => handleClear()}>AC</button>
            <button className="grey btn" onClick={() => handleNegative()}>±</button>
            <button className="grey btn" onClick={() => handlePercent("%")}>%</button>
            <button className="math btn" onClick={() => handleMath("/")}>÷</button>
            <button className="number btn" value={7}  onClick={() => handleNumber(7)}>7</button>
            <button className="number btn" value= {8} onClick={() => handleNumber(8)}>8</button>
            <button className="number btn" value= {9} onClick={() => handleNumber(9)}>9</button>
            <button className="math btn" onClick={() => handleMath("*")}>x</button>
            <button className="number btn" value= {4} onClick={() => handleNumber(4)}> 4</button>
            <button className="number btn" value= {5} onClick={() => handleNumber(5)}>5</button>
            <button className="number btn" value= {6} onClick={() => handleNumber(6)}>6</button>
            <button className="math btn" onClick={() => handleMath("-")}>-</button>
            <button className="number btn" onClick={() => handleNumber(1)}>1</button>
            <button className="number btn" onClick={() => handleNumber(2)}>2</button>
            <button className="number btn" onClick={() => handleNumber(3)}>3</button>
            <button className="math btn"  onClick={() => handleMath("+")}>+</button>
            <button className="number zero btn" onClick={() => handleNumber(0)}>0</button>
            {/* <button className="number btn">.</button> */}
            <button className="math equal" onClick={() => handleEqual()}>=</button>
        </div>
    )
}
