//function - just displaying the total, updating the effects of numbers & operators

import React from "react";

const Display = ({
  inputValue,
  toggleDisplay,
  functionEntered,
  elementOne,
}) => {
  console.log(
    `input= ${inputValue}, toggle= ${toggleDisplay}, function= ${functionEntered}, el1= ${elementOne}`
  );
  //   let totalDisplay = 0;

  //   if ({ elementOne } > 0 && { functionEntered } > 0 && !{ inputValue } ) {
  //     totalDisplay += { elementOne };
  //   }
  // const styleObj = {
  //     transform: scale(0.36)
  // }

  return (
    <div className="display">
      <h3>
        {elementOne > 0 && toggleDisplay && functionEntered ? (
          <p className="text">
            {Math.round(elementOne).toLocaleString("en-US")}
          </p>
        ) : (
          <p className="text">
            {Math.round(inputValue).toLocaleString("en-US")}
          </p>
        )}
      </h3>
    </div>
  );
};

export default Display;

// else {
//     totalDisplay += { inputValue };
//   }
