import React from "react";
import Item from "./Item";

function Items(props) {
  const { items, removeItem, toggleItem } = props;

  return (
    <ul>
      {items &&
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleItem={toggleItem}
          />
        ))}
    </ul>
  );
}

export default Items;
