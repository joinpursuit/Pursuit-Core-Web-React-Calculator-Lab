import { Component } from "react"
import Squares from './components/Squares';
import Calculator from "./components/Calculator";
import './App.css';


class App extends Component {
  render(){
    return (
      <main className="App">
        <Squares/>
        <Calculator/>
      </main>
    );
  }
}

export default App;
