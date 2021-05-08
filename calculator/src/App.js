/* eslint no-eval: 0 */
import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Buttons from "./components/Buttons";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    resultFunction = () => {
        let checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
    onClick = button => {

        if(button === "="){
            this.resultFunction()
        }

        else if(button === "C"){
            this.resetFunction()
        }
        else if(button === "CE"){
            this.backspaceFunction()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };



    resetFunction = () => {
        this.setState({
            result: ""
        })
    };

    backspaceFunction = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <Results result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;