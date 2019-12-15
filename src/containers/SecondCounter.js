import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CounterControl from "../components/CounterCountrol";
import CounterOutput from "../components/CounterOutput";
import * as types from "../store/actions";

function SecondCounter(props) {
  const ctr = useSelector(state => state.counter);
  const res = useSelector(state => state.results);
  const dispatch = useDispatch();

  // const mapStateToProps = state => {
  //   return {
  //     ctr: state.counter,
  //     res: state.results
  //   };
  // };

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     onIncrementCounter: () => dispatch(actionCreators.increment()),
  //     onDecrementCounter: () => dispatch(actionCreators.decrement()),
  //     onAddCounter: () => dispatch(actionCreators.add(5)),
  //     onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
  //     onStoreResult: () => dispatch(actionCreators.store_result()),
  //     onDeleteResult: id => dispatch(actionCreators.delete_result(id))
  //   };
  // };

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <CounterOutput value={ctr} />
        <CounterControl
          label="Increment"
          Clicked={() => dispatch(types.increment())}
        />
        <CounterControl
          label="Decrement"
          Clicked={() => dispatch(types.decrement())}
        />
        <CounterControl label="Add 5" Clicked={() => dispatch(types.add(5))} />
        <CounterControl
          label="Substract 5"
          Clicked={() => dispatch(types.subtract(5))}
        />
      </div>
      <div className="store_btn">
        <button onClick={() => dispatch(types.store_result())}>
          Store result
        </button>
      </div>

      <div className="counter_store">
        <ul>
          {res.map(val => (
            <li
              onClick={() => dispatch(types.delete_result(val.id))}
              key={val.id}
            >
              {val.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SecondCounter;
