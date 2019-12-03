export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = val => {
  return {
    type: ADD,
    payload: val
  };
};

export const subtract = val => {
  return {
    type: SUBTRACT,
    payload: val
  };
};

//asynchronous
export const store_result = () => {
  return (dispatch, getState) => {
    const getOldState = getState().counter; //get the old state for use
    console.log(getOldState);
    setTimeout(() => {
      dispatch(save_result());
    }, 2000);
  };
};

export const save_result = () => {
  return {
    type: STORE_RESULT
  };
};

export const delete_result = val => {
  return {
    type: DELETE_RESULT,
    payload: val
  };
};
