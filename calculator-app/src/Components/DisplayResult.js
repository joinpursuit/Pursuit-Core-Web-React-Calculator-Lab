import React from "react"
import "../Styles/DisplayResultStyle.css"
 
class DisplayResult extends React.Component{
   render(){
           const {displayValue} = this.props;
       return (
           <div className="result">
               <p>{displayValue}</p>
           </div>
       )
   }
}
 
export default DisplayResult