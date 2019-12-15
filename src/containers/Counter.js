import React from "react";

import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

import CounterControl from "../components/CounterCountrol";
import CounterOutput from "../components/CounterOutput";

function Counter(props) {
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <CounterOutput value={props.ctr} />
        <CounterControl label="Increment" Clicked={props.onIncrementCounter} />
        <CounterControl label="Decrement" Clicked={props.onDecrementCounter} />
        <CounterControl label="Add 5" Clicked={props.onAddCounter} />
        <CounterControl label="Substract 5" Clicked={props.onSubtractCounter} />
      </div>
      <div className="store_btn">
        <button onClick={props.onStoreResult}>Store result</button>
      </div>

      <div className="counter_store">
        <ul>
          {props.res.map(val => (
            <li onClick={() => props.onDeleteResult(val.id)} key={val.id}>
              {val.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    res: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: () => dispatch(actionCreators.store_result()),
    onDeleteResult: id => dispatch(actionCreators.delete_result(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
