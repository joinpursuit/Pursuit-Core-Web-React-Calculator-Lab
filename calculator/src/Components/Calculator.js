import React, { Component } from 'react'
import DisplayButtons from "./DisplayButtons"

export default class Calculator extends Component {
    state = { num1: 0, num2: 0, math: "", toggleNum: true }
    handleNumber = (num) => {
        const { num1, num2, toggleNum } = this.state
        if (toggleNum || Number(num1) === 0) {
            this.setState((prevState) => ({
                num1: prevState.num1 + num.toString()
            }))
        } else {
            this.setState((prevState) => ({
                num2: prevState.num2 + num.toString()
            }))
        }
    }
    handleNegative = () => {
        if (this.state.num1 === 0) {
            this.setState(({
                num1: "-0"
            }))
        }else {
            if (this.state.toggleNum) {
                this.setState((prevState) => ({
                    num1: prevState.num1 * -1
                }))
            } else{
                this.setState((prevState) => ({
                    num2: prevState.num2 * -1
                }))
            }
        }
    }
    handleClear = () => {
        this.setState({
            num1: 0,
            num2: 0,
            math: "",
            toggleNum: true
        })
    }
    handleMath = (value) => {
        if (this.state.math !== "") {
            this.handleEqual()
        }
        this.setState({ math: value })
        if (this.state.num2 === 0 && this.state.num1 !== 0) {
            this.setState({
                toggleNum: false
            })
        }
    }
    handlePercent = () => {
        if (this.state.toggleNum || this.state.num2 === 0) {
            this.setState({ num1: Number(this.state.num1) / 100 })
        } else {
            this.setState({ num2: Number(this.state.num2) / 100 })
        }
    }
    handleEqual = () => {
        if (this.state.num1 !== 0 && this.state.num2 !== 0) {
            if (this.state.math === "+") {
                this.setState({ num1: Number(this.state.num2) + Number(this.state.num1) })
            } else if (this.state.math === "*") {
                this.setState({ num1: Number(this.state.num2) * Number(this.state.num1) })
            } else if (this.state.math === "/") {
                this.setState({ num1: Number(this.state.num1) / Number(this.state.num2) })
            } else if (this.state.math === "-") {
                this.setState({ num1: Number(this.state.num1) - Number(this.state.num2) })
            }
        }
        if (this.state.math !== "") {
            this.setState({ num2: 0, toggleNum: false })
        } else {
            this.setState({ num2: 0, math: "", toggleNum: true })
        }
    }
    render() {
        const { num1, num2, toggleNum } = this.state
        return (
            <div>
                <DisplayButtons num1={num1} num2={num2} toggleNum={toggleNum}
                    handleNumber={this.handleNumber}
                    handleNegative={this.handleNegative}
                    handleClear={this.handleClear}
                    handleMath={this.handleMath}
                    handleEqual={this.handleEqual}
                    handlePercent={this.handlePercent} />
            </div>
        )
    }
}
