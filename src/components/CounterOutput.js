import React from "react";

function CounterOutput(props) {
  return (
    <div
      style={{
        width: "200px",
        border: "1px solid red",
        padding: "20px",
        margin: "0 auto 10px auto",
        textAlign: "center"
      }}
    >
      {props.value}
    </div>
  );
}

export default CounterOutput;
