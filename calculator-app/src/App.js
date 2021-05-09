import React from 'react';
import './App.css';
import Keypad from "./Components/Keypad"
import DisplayResult from "./Components/DisplayResult"
 
class App extends React.Component {
 constructor(){
   super()
   this.state ={
     displayValue: "0", //this is whats going to dispkay
     previousValue:"",
     //curent value- going to be whats previous value , handle the operations
     operation:"",
    }
   }
   
   //add new piece of state -boolean if waiting for new val ; if just calculated then do somehting else  
//    - displayValue (What the screen currently displays)
// - previousValue (What value the user selected before pressing an operation button)
// - operation (What operation the user is performing (+/-/÷/x))
 
    handleClick =(e)=>{
      
      if(this.state.displayValue === '0'){
        this.setState({displayValue:e.target.value})
      } else {

        let displayVal = this.state.displayValue
        displayVal += e.target.value
        this.setState({displayValue:displayVal})
      }
    }





    


    handleOperation=(e)=>{ 

        this.setState({previousValue: this.state.displayValue, operation: e.target.value, displayValue:""});  
     }  
    
    calculate = () =>{
      let total = 0

      const { previousValue, operation,displayValue} = this.state

      if (operation === "+"){
        total = parseFloat(previousValue) + parseFloat(displayValue)
        this.setState({displayValue:total, operation:""})
        
      } else if (operation === "-"){
        total = parseFloat(previousValue) - parseFloat(displayValue)
        this.setState({displayValue:total})
      } else if (operation === "/"){
        total =  (parseFloat(previousValue) / parseFloat(displayValue))
        this.setState({displayValue:total.toFixed(2)})
      } else if (operation === "*"){
        total = parseFloat(previousValue) * parseFloat(displayValue)
        this.setState({displayValue:total})
      }       
   
    }
    

    clear = () =>{
      this.setState({displayValue:'0', previousValue:"", operation:""})
    }

    negateNum = ()=>{
      const {displayValue} = this.state
      if(displayValue){
       let num =  (displayValue) * (-1)
        this.setState({displayValue: num})
      }
    }
 
 render(){

 return (
   <div className="App">
   <DisplayResult displayValue={Number(this.state.displayValue).toLocaleString("en-US")} />
    <Keypad handleClick={this.handleClick} handleOperation={this.handleOperation} calculate={this.calculate} clear={this.clear} negateNum={this.negateNum}/>
   </div>
 );
 
}
}
 
export default App;

