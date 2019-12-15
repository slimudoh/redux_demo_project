import React from "react";
import "./App.css";

import Counter from "./Counter";
import Usestate from "./Usestate";
import SecondCounter from "./SecondCounter";

function App() {
  return (
    <div className="container">
      <div className="container__divs">
        <p>Redux with useDispatch</p>
        <SecondCounter />
      </div>
      <div className="container__divs">
        <p>testing regular redux with function</p>
        <Counter />
      </div>
      <div className="container__divs">
        <p>Testing api call with redux thunk</p>
        <Usestate />
      </div>
    </div>
  );
}

export default App;
