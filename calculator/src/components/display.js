import React from "react";
import "../styles/display.css"

const Display = ({ display }) => {
    return (
      <section className="outputDisplay">
          {Number(display).toLocaleString()}
      </section>
    );
  }

export default Display;
