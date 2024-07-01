import React from "react";

const items = [
  { name: "Item 1", priority: 1 },
  { name: "Item 2", priority: 2 },
  { name: "Item 3", priority: 3 },
  { name: "Item 4", priority: 4 },
];

const ItemSelector = ({ setSelectedItem }) => {
  return (
    <select onChange={(e) => setSelectedItem(items[e.target.value])}>
      <option value="">Select an item</option>
      {items.map((item, index) => (
        <option key={index} value={index}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default ItemSelector;