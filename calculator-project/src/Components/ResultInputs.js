import React, {Component} from 'react';
import "./ResultInput.css"

class ResultInputs extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultInputs;