import React from "react";

export const GraphingCalculator: React.FC = () => {
    return (
      <iframe
        src="https://www.desmos.com/calculator"
        title="Desmos Calculator"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc" }}
      ></iframe>
    );
  };