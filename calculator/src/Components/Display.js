import React from "react";
import "./Display.css";

const Display = ({ input }) => {
	console.log(input);
	return <section className="display">{input}from display.js</section>;
};
export default Display;
