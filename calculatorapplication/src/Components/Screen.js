import React from "react";

class Screen extends React.Component {
  render() {
    const {currentInput} =this.props
    return (
      <div className="Screen">
        <p className="inner-screen">{Number(currentInput).toLocaleString()}</p>
        {/* <p className="inner-screen">{currentInput}</p> */}
      </div>
    );
  }
}
export default Screen;
