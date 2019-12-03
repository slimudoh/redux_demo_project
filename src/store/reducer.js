import * as types from "./actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case types.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case types.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case types.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        })
      };
    case types.DELETE_RESULT:
      const newArr = state.results.filter(
        result => result.id !== action.payload
      );
      return {
        ...state,
        results: newArr
      };
  }

  return state;
};

export default reducer;
