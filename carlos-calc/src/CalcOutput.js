import React, {Component} from 'react'

class CalcOuput extends Component {


    render() {
        const {result} = this.props
        return (
            <div className='result'>
                <p>{Number(result).toLocaleString('en-US')} </p>
            </div>
        )
    }
}

export default CalcOuput