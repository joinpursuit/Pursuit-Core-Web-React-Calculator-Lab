import React from 'react'
import { ToastContainer,toast } from "react-toastify";
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
import operation from './helpers/operation'
import formatter from './helpers/formatter'
import data from './helpers/data'

import { create, all } from 'mathjs'
import './App.css'
import 'css-doodle'


const config = { }
const math = create(all, config)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: "",
      number:"",
      evaluate: "",
      result: "",
      prevNum: "",
      prevEva: "",
      prevRes: "",
      deleted: false,
      hasError: false
    }

  }
  
  componentDidCatch(error, info){
    this.setState({hasError: true})
  }


  input =(e)=>{
    const [input,type] = e.target.value.split(',')
    let result = 0
    let expression = [0,false]

    if(type === "number"){
      if(this.state.deleted){
        this.setState({
          number: this.state.number.concat(input),
          display: this.state.number.concat(input),
          evaluate: this.state.prevEva.concat(` ${input}`),
          prevEva: this.state.evaluate.concat(` ${input}`),
          deleted: false
        })
       }else{
        this.setState({
          number: this.state.number.concat(input),
          display: this.state.number.concat(input),
          evaluate: this.state.prevEva.concat(input),
          prevEva: this.state.evaluate.concat(input)
        })
      }

    }else{
      const evaluate = this.state.prevEva.concat(` ${input} `)
      const number = this.state.number || this.state.prevRes
      const prevEva = this.state.prevEva
      const prevRes =this.state.prevRes
      const prevNum = this.state.prevNum
      
      // console.log("EVALUATE : ", evaluate)
      // console.log("NUMBER : ", number)

      expression = operation(input,type,number,prevEva,prevRes,prevNum);

      if(expression[3]){
        this.setState({
          display: "",
          number:"",
          evaluate: "",
          result: "",
          prevNum: "",
          prevEva: "",
          prevRes: "",
          deleted: false,
          hasError: false
        })
       }else if(!expression[1] && !expression[2]){
            this.setState({
             display: this.state.display.concat(` ${input} `),
             prevNum: this.state.number,
             prevEva: evaluate,
             evaluate: evaluate,
             number: ""
           })
         }else if(expression[2]){
           this.setState({
             display: expression[0],
             prevNum: this.state.number,
             prevEva: expression[0],
             evaluate: expression[0],
             number: "",
             prevRes: this.state.prevRes,
             result: "",
             deleted: true
            })
          
         }else{
            // console.log('Expression is complete, let\'s evaluate')

           try{
             result = math.evaluate(expression[0])
             // console.log("Result : ", result)
             this.setState({
              display: result.toString(),
              prevNum: this.state.number,
              prevEva: expression[0],
              evaluate: expression[0],
              number: "",
              prevRes: result.toString(),
              result: result.toString()
             })
           }catch(e){
             this.componentDidCatch()
           }         
         }     
    }   
  }
  

  render() {
    
     const buttons = data
     const {display, evaluate, number , prevEva, prevNum, prevRes, result, deleted} = this.state

    if(this.state.hasError){
      toast.error(`Typo Error! at ${this.state.evaluate}`, {
        position: toast.POSITION.BOTTOM_LEFT,className: 'boldMessage'
      });
      toast.warning(`Please Consider to Clear All`, {
        position: toast.POSITION.UPPER_RIGTH, className: 'boldMessage'
      });
    }


    return ( 
      <>
      <Navigation />
      <Calculator 
        buttons={buttons}
        number = {number}
        input={this.input} 
        operation={this.operation} 
        display={display}
        evaluate={evaluate}
        prevEva={prevEva}
        prevNum={prevNum}
        prevRes={prevRes}
        result={result}
        deleted={deleted}
        formatter ={formatter}
        />

        <ToastContainer transition={Zoom} autoClose={2000}/>
    </>
    )

}
}
export default App



