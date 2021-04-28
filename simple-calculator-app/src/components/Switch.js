import React from 'react'
import './Switch.css'

 class Switch extends React.Component{
   
render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}
export default Switch