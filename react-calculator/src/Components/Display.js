import React from "react"


class Display extends React.Component {

    formatDisplay = (string) => {

        if (string.length === 0) { return "0"; }

        let arr = string.trim().split(" ");
        let newArr = arr.map(element => {
            if (isNaN(element)) {
                return element;
            } else {
                if (element.length > 10) {
                    if (element % 1 === 0) {
                        return Number(element).toExponential(8); //exponential
                    }
                    element = Number(element).toFixed(5) //decimal
                }
                //return numbers wuth commas
                let nf = new Intl.NumberFormat();
                return nf.format(element)
            }
        });
        return newArr.join(" ")

    }

    render() {
        return (<p className="display" >{this.formatDisplay(this.props.display)}</p> )
    }

}

export default Display;


