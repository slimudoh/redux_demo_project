import React from "react";

function CounterControl(props) {
  return (
    <div className="counter_btns" onClick={props.Clicked}>
      {props.label}
    </div>
  );
}

export default CounterControl;
