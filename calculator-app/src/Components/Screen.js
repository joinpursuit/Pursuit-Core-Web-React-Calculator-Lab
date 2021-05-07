import React, { Component } from "react"
import "./Screen.css"

export class Screen extends Component {
  render() {
    const { displayValue } = this.props
    return (
      <div className="screen-container">
        <input className="screen" type="text" readOnly value={displayValue}></input>
      </div>
    )
  }
}

export default Screen
