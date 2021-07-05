import { combineReducers } from "redux";
import loading from "./loading.reducer.";
import goals from "./goals.reducer";
import todos from "./todos.reducer";

export default combineReducers({
  loading,
  goals,
  todos,
});
