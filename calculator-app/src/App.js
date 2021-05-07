import React, { Component } from "react"
import Screen from "./Components/Screen"
import Buttons from "./Components/Buttons"
import numeral from "numeral"
import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      displayValue: "0",
      prevValue: "",
      operation: ""
    }
  }
  
  handleDisplay = (e) => {
    this.setState({ displayValue: numeral((this.state.displayValue.concat(e.target.value))).format('0,0') })
  }
  
  handleNegative = () =>{
    this.setState({ displayValue: numeral(this.state.displayValue.split(',').join("") * -1).format('0,0') })
  }
  
  handleOperation = (e) => {
    this.setState( prevState => ({ prevValue: prevState.displayValue, displayValue: "", operation: e.target.value}))
  }

  handleResult = () => {
    if(this.state.operation === "+"){
      this.setState({ displayValue: String(Number(this.state.prevValue.split(',').join("")) + Number(this.state.displayValue.split(',').join(""))) })
    } else if(this.state.operation === "-"){
      this.setState({ displayValue: String(this.state.prevValue.split(',').join("") - this.state.displayValue.split(',').join("")) })
    } else if(this.state.operation === "*"){
      this.setState({ displayValue: String(this.state.prevValue.split(',').join("") * this.state.displayValue.split(',').join("")) })
    } else if(this.state.operation === "/"){
      this.setState({ displayValue: String(Math.round(this.state.prevValue.split(',').join("") / this.state.displayValue.split(',').join(""))) })
    }
  }

  handleReset = () => {
    this.setState({ displayValue: "0", prevValue: "", operation: "" })
  }

  render() {
    return (
      <section>
        <h1>Simple Calculator</h1>
        <div className="calc">
          <Screen displayValue={this.state.displayValue} />
          <Buttons handleDisplay={this.handleDisplay} handleNegative={this.handleNegative} handleReset={this.handleReset} handleOperation={this.handleOperation} handleResult={this.handleResult}/>
        </div>
      </section>
    )
  }
}

export default App
