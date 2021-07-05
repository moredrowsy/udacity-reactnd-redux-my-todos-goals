import { RECEIVE_DATA } from "../actions/common.action";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos.action";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, complete: !todo.complete }
      );
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}
