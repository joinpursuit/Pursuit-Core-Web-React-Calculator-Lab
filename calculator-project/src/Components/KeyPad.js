import React from "react"
import Solution from "./Solution"


const KeyPad = ({result, handleNum, handleOperator, handleZero, calculate}) => {
    return (
        <section className="container">
            <Solution result={result}/>
            <button onClick={e => calculate(e.target.value)} className="child key10" value="AC">AC</button>
            <button onClick={e => handleOperator(e.target.value)} className="child key11" value="+/-">+/-</button>
            <button onClick={e => handleOperator(e.target.value)} className="child key12" value="÷">÷</button>
            <button onClick={e => handleNum(e.target.value)} className="child key7" value="7">7</button>
            <button onClick={e => handleNum(e.target.value)} className="child key8" value="8">8</button>
            <button onClick={e => handleNum(e.target.value)} className="child key9" value="9">9</button>
            <button onClick={e => handleOperator(e.target.value)} className="child key13" value="x">x</button>
            <button onClick={e => handleNum(e.target.value)} className="child key4" value="4">4</button>
            <button onClick={e => handleNum(e.target.value)} className="child key5" value="5">5</button>
            <button onClick={e => handleNum(e.target.value)} className="child key6" value="6">6</button>
            <button onClick={e => handleOperator(e.target.value)} className="child key14" value="-">-</button>
            <button onClick={e => handleOperator(e.target.value)} className="child key15" value="+">+</button>
            <button onClick={e => handleNum(e.target.value)} className="child key1" value="1">1</button>
            <button onClick={e => handleNum(e.target.value)} className="child key2" value="2">2</button>
            <button onClick={e => handleNum(e.target.value)} className="child key3" value="3">3</button>
            <button onClick={e => calculate(e.target.value)} className="child key16" value="=" >=</button>
            <button onClick={e => handleZero(e.target.value)} className="child key0" value="0">0</button>
        </section>
    )
}

export default KeyPad 