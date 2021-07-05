import React, { useRef } from "react";
import { connect } from "react-redux";

import Items from "./Items";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo,
} from "../store/actions/todos.action";

function Todos(props) {
  const { todos, dispatch } = props;
  const inputEl = useRef(null);

  const addItem = (e) => {
    e.preventDefault();

    dispatch(
      handleAddTodo(inputEl.current.value, () => (inputEl.current.value = ""))
    );
  };

  const removeItem = async (todo) => {
    dispatch(handleRemoveTodo(todo));
  };

  const toggleItem = (todo) => {
    dispatch(handleToggleTodo(todo.id));
  };

  return (
    <div>
      <h2>Todos</h2>

      <input type="text" placeholder="Add Todo" ref={inputEl} />
      <button onClick={addItem}>Add Todo</button>

      <Items items={todos} removeItem={removeItem} toggleItem={toggleItem} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
