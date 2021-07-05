import { ADD_GOAL } from "../actions/goals.action";
import { ADD_TODO } from "../actions/todos.action";

const logger = (store) => (next) => (action) => {
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Bitcoin not allowed");
  }

  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Bitcoin not allowed");
  }

  return next(action);
};

export default logger;
