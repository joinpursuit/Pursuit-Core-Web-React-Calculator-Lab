import React, { Component } from "react";

class ResultDisplay extends Component {
  render() {
    const { result } = this.props;
    return <div id="result" className="row">{result}</div>;
  }
}

export default ResultDisplay;
