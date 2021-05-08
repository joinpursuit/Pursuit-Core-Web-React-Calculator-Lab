import React from "react";

const Output = ({ result }) => {
  return (
    <section className="result">
      <p>{result || 0}</p>
    </section>
  );
};

export default Output;
