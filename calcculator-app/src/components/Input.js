import React from "react";
import Grid from "./Grid.js";
import Mod from "./Mod.js";
import Equal from "./Equal.js";
import Clear from "./Clear.js";
import "./styles/Input.css";

class Input extends React.Component {
  state = {
    input: [0],
    firstDisplay: [],
    mod: "",
    secondDisplay: [],
    answer: 0,
    // equal:
  };

  handleInputChange = (event) => {
    //let display = event.target.value.split("");

    if (this.state.mod) {
      const { name, value } = event.target; //this makes the state update with each change. Not quite sure why. It was part of forms lesson. I think its deconstructing in some way.
      this.setState({ [name]: value }); // this is part of that^^
      console.log(this.state);
      this.setState((prevState) => ({
        secondDisplay: parseInt([...prevState.input]), //parseInt removes zero
      }));
      console.log(this.state);
      //debugger;
    } else {
      const { name, value } = event.target; //this makes the state update with each change. Not quite sure why. It was part of forms lesson. I think its deconstructing in some way.
      this.setState({ [name]: value }); // this is part of that^^
      console.log(this.state);
      this.setState((prevState) => ({
        firstDisplay: parseInt([...prevState.input]), //parseInt removes zero
      }));
    }
  };

  handleGrid = (event) => {
    let num = 56789345667;
    console.log(num.toLocaleString());
    console.log(this.state);
    if (this.state.input.toString().length === 3) {
      if (this.state.mod) {
        this.setState((prevState) => ({
          input: `${this.state.input.toString().slice(0, 1)},${
            this.state.input.toString().slice(1) + event
          }`,
          secondDisplay: `${prevState.input.toString().slice(0, 1)},${
            prevState.input.toString().slice(1) + event
          }`
            .split(",")
            .filter((el) => el !== ",")
            .join(""),
        }));
      } else {
        console.log(
          this.state.input.toString().slice(0, 1) +
            "," +
            this.state.input.toString().slice(1) +
            event
        );
        this.setState((prevState) => ({
          input: `${prevState.input.toString().slice(0, 1)},${
            this.state.input.toString().slice(1) + event
          }`,
          firstDisplay: `${prevState.input.toString().slice(0, 1)},${
            prevState.input.toString().slice(1) + event
          }`
            .split(",")
            .filter((el) => el !== ",")
            .join(""),
        }));
      }
    } else if (typeof this.state.input === "string") {
      if (this.state.input[this.state.input.length - 4] === ",") {
        //conditional to know when its time to add another comma
        console.log("5", this.state.input + event);
        if (this.state.mod) {
          let nocomma = `${this.state.input}${event}`
            .split("")
            .reverse()
            .filter((el) => el !== ","); //remove commas and reverse so that for loop can place commas properly ever three numbers from the back
          let emptyArray = [];
          for (let i = 0; i < nocomma.length; i++) {
            if (i % 3 === 0 && i !== 0) {
              emptyArray.unshift(nocomma[i] + ",");
            } else {
              emptyArray.unshift(nocomma[i]);
            }
          }
          console.log(emptyArray.join(""));
          this.setState((prevState) => ({
            input: emptyArray.join(""),
            secondDisplay:
              prevState.input
                .split("")
                .filter((el) => el !== ",")
                .join("") + event,
          }));
        } else {
          let nocomma = `${this.state.input}${event}`
            .split("")
            .reverse()
            .filter((el) => el !== ","); //remove commas and reverse so that for loop can place commas properly ever three numbers from the back
          let emptyArray = [];
          for (let i = 0; i < nocomma.length; i++) {
            if (i % 3 === 0 && i !== 0) {
              emptyArray.unshift(nocomma[i] + ",");
            } else {
              emptyArray.unshift(nocomma[i]);
            }
          }
          console.log(emptyArray.join(""));
          this.setState((prevState) => ({
            input: emptyArray.join(""),
            firstDisplay:
              prevState.input
                .split("")
                .filter((el) => el !== ",")
                .join("") + event,
          }));
        }
      } else {
        console.log("hello", event, this.state.input);

        if (this.state.mod) {
          this.setState((prevState) => ({
            input: prevState.input + event,
            secondDisplay:
              prevState.input
                .split(",")
                .filter((el) => el !== ",")
                .join("") + event,
          }));
        } else {
          this.setState((prevState) => ({
            input: prevState.input + event,
            firstDisplay:
              prevState.input
                .split(",")
                .filter((el) => el !== ",")
                .join("") + event,
          }));
        }
      }
    } else {
      if (this.state.mod) {
        this.setState((prevState) => ({
          input: parseInt([prevState.input, ...[event]].join("")),
          secondDisplay: parseInt([prevState.input, ...[event]].join("")),
        }));
      } else {
        this.setState((prevState) => ({
          input: parseInt([prevState.input, ...[event]].join("")),
          firstDisplay: parseInt([prevState.input, ...[event]].join("")),
        }));
      }
    }
  };

  handleMod = (event, eventTwo) => {//eventTwo is object in Mod component that turns input into a negative number and then passes it into this function
    if (event === "plusMinus") {
      this.setState((prevState) => ({
        input: Number(eventTwo.first)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        firstDisplay: Number(eventTwo.first),
        mod: event,
        previous: prevState, // no real functionality just wanted to call prevState so it wouldnt stay faded
      }));
    } else {
      this.setState((prevState) => ({
        input: "",
        // firstDisplay: [...[answer]].join(""),
        mod: event,
        previous: prevState, // no real functionality just wanted to call prevState so it wouldnt stay faded
      }));
    }
  };

  handleClear = (event) => {
    this.setState((prevState) => ({
      input: [0],
      firstDisplay: [],
      mod: "",
      secondDisplay: [],
      answer: 0,
    }));
  };

  handleEqual = (event) => {
    console.log(event);
    if (event.mod === "sum") {
      let answer = Number(event.first) + Number(event.second);
      console.log(answer);
      this.setState((prevState) => ({
        //mimicked first conditional of handleGrid in order for state to make answer first display which resets state each time and allows for cumulative functionality
        input: answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod: "",
      }));
    }
    if (event.mod === "subtract") {
      let answer = Number(event.first) - Number(event.second);
      this.setState((prevState) => ({
        input: answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod: "",
      }));
    }
    if (event.mod === "divide") {
      let answer = Number(event.first) / Number(event.second);
      this.setState((prevState) => ({
        input: answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod: "",
      }));
    }
    if (event.mod === "multiply") {
      let answer = Number(event.first) * Number(event.second);
      this.setState((prevState) => ({
        input: answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod: "",
      }));
    }
    if (event.second.length < 1) {
      this.setState((prevState) => ({
        input: [0],
        firstDisplay: [],
        mod: "",
        secondDisplay: [],
        answer: 0,
      }));
    }

    if (event.mod === "") {
      //this conditional resets state if equal is pressed before problem is inputed
      this.setState((prevState) => ({
        input: [0],
        firstDisplay: [],
        mod: "",
        secondDisplay: [],
        answer: 0,
      }));
    }
  };

  render() {
    return (
      <div className="main-div">
        <div className="input-container">
          <input
            className="calc-input"
            onChange={this.handleInputChange}
            id="Number"
            name="input"
            value={this.state.input}
          />
        </div>

        <main className="main-container">
          <section className="bottom-input">
            <Grid className="grid" handleGrid={this.handleGrid} />
          </section>

          <div className="mod-div">
            <Mod
              className="mod"
              input={this.state.input}
              first={this.state.firstDisplay}
              mod={this.state.mod}
              second={this.state.secondDisplay}
              handleMod={this.handleMod}
              handleClear={this.handleClear}
            />
          </div>
          <div className="right-side">
            <Equal
              className="equal" //will loop values of state properties by making a copy of them in child component and passing in as arguments back to parent function
              first={this.state.firstDisplay}
              mod={this.state.mod}
              second={this.state.secondDisplay}
              handleEqual={this.handleEqual}
            />
            <button className="button-clear" onClick={this.handleClear}>
              AC
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Input;
