import { RECEIVE_DATA } from "../actions/common.action";
import { ADD_GOAL, REMOVE_GOAL } from "../actions/goals.action";

const initialState = [];

export default function goals(state = initialState, action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals;
    default:
      return state;
  }
}
