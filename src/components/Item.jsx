import React from "react";

function Item(props) {
  const { item, removeItem, toggleItem } = props;

  return (
    <li>
      <span
        onClick={() => toggleItem && toggleItem(item)}
        style={{ textDecoration: item.complete ? "line-through" : "none" }}
      >
        {item.name}
      </span>
      <button onClick={() => removeItem(item)} style={{ marginLeft: "5px" }}>
        X
      </button>
    </li>
  );
}

export default Item;
