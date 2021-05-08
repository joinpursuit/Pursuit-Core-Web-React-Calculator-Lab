import React from "react";
import "../Styles/Input.css";

export default function Input(props) {
  const { inputA } = props;
  return (
    <div className="input">
      <div id="input">
        <p value={inputA}>{inputA}</p>
      </div>
    </div>
  );
}