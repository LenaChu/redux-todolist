import { createStore } from "redux";

//Action Types
const ADD_TODO = "todos/addtodo";
const REMOVE_TODO = "todos/removetodo";
const actionTypes = {
    ADD_TODO,
    REMOVE_TODO,
};

const addtodo = () => {
  return {
    type: actionTypes.ADD_TODO,
  };
};

const removetodo = () => {
  return {
    type: actionTypes.REMOVE_TODO,
  };
};

export const actionCreator = {
  addtodo,
  removetodo,
};

function todosReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { value: state.value + 1 };
    case actionTypes.REMOVE_TODO:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
export const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
