import API from "goals-todos-api";

// ACTIONS
export const RECEIVE_DATA = "RECEIVE_DATA";

// ACTION CREATORS
export function receiveData(goals, todos) {
  return {
    type: RECEIVE_DATA,
    goals,
    todos,
  };
}

// ASYNC ACTION CREATORS
export const handleFetchData = () => async (dispatch) => {
  const [goals, todos] = await Promise.all([
    API.fetchGoals(),
    API.fetchTodos(),
  ]);

  dispatch(receiveData(goals, todos));
};
