import React from "react";

function CounterControl(props) {
  return (
    <div
      style={{
        border: "1px solid red",
        width: "100px",
        padding: "20px 0",
        float: "left",
        textAlign: "center",
        margin: "0 10px",
        cursor: "pointer"
      }}
      onClick={props.Clicked}
    >
      {props.label}
    </div>
  );
}

export default CounterControl;
