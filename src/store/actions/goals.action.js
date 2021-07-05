import API from "goals-todos-api";

// ACTIONS
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

// ACTION CREATORS
export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

export function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

// ASYNC ACTION CREATORS
export const handleAddGoal = (value, callback) => (dispatch) => {
  API.saveTodo(value)
    .then((goal) => {
      dispatch(addGoal(goal));
      callback();
    })
    .catch((e) => alert("Error has occured"));
};

export const handleRemoveGoal = (goal) => (dispatch) => {
  dispatch(removeGoal(goal.id));
  API.deleteGoal(goal.id).catch((e) => {
    alert("Error has occured");
    dispatch(addGoal(goal));
  });
};
