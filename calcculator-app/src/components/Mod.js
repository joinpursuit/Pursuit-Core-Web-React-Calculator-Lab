import React from "react";
import "./styles/Mod.css";

const Mod = ({ handleMod,first,mod,second,input }) => {



  const finalMod = {
    input:input,
    first: Number(first) *-1,
    mod: mod,
    second: second,
   
  };

  //   const modButtons = ["+", "-", "÷", "*","+/-"];
  const modButtons = {
    sum: "+",
    subtract: "-",
    divide: "÷",
    multiply: "*",
    plusMinus: "+/-",
 
  };

  return (


      <ul className="parent-mod">
        {Object.entries(modButtons).map((el) => {// use entries method to have access to both symbol and string of moderator
          return (
            <li type={el[0]} key={el[0]} value={el[1]} className="all-mods">
              <button onClick={() => handleMod(el[0],finalMod)}>{el[1]}</button>
            </li>
          );
        })}
      </ul>

  );
};

export default Mod;
