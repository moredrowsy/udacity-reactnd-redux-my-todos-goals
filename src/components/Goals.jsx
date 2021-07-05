import React, { useRef } from "react";
import { connect } from "react-redux";

import Items from "./Items";
import { handleAddGoal, handleRemoveGoal } from "../store/actions/goals.action";

function Goals(props) {
  const { goals, dispatch } = props;
  const inputEl = useRef(null);

  const addItem = (e) => {
    e.preventDefault();

    dispatch(
      handleAddGoal(inputEl.current.value, () => (inputEl.current.value = ""))
    );
  };

  const removeItem = async (goal) => {
    dispatch(handleRemoveGoal(goal));
  };

  return (
    <div>
      <h2>Goals</h2>

      <input type="text" placeholder="Add goal" ref={inputEl} />
      <button onClick={addItem}>Add Goal</button>

      <Items items={goals} removeItem={removeItem} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  goals: state.goals,
});

export default connect(mapStateToProps)(Goals);
