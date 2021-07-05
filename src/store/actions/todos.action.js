import API from "goals-todos-api";

// ACTIONS
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// ACTION CREATORS
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

// ASYNC ACTION CREATORS
export const handleAddTodo = (value, callback) => (dispatch) => {
  API.saveTodo(value)
    .then((todo) => {
      dispatch(addTodo(todo));
      callback();
    })
    .catch((e) => alert("Error has occured"));
};

export const handleRemoveTodo = (todo) => (dispatch) => {
  dispatch(removeTodo(todo.id));
  API.deleteTodo(todo.id).catch((e) => {
    alert("Error has occured");
    dispatch(addTodo(todo));
  });
};

export const handleToggleTodo = (id) => (dispatch) => {
  dispatch(toggleTodo(id));
  API.saveTodoToggle(id).catch((e) => {
    alert("Error has occured");
    dispatch(toggleTodo(id));
  });
};
