import React from "react";

const Solution = ({result}) => {

  return <p className="result">{Number(result).toLocaleString() || 0}</p>;
};

export default Solution;
