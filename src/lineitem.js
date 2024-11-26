import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

function lineitem({item,handleclick, deleteOrder}) {
  return (
    <li className="item">
    <input
      type="checkbox"
      onChange={() => handleclick(item.id)}
      checked={item.checked}
    ></input>

    <label
      style={item.checked ? { textDecoration: "line-through" } : null}
      onDoubleClick={() => handleclick(item.id)}
    >
      {item.item}
    </label>

    <FaTrashAlt
      onClick={() => deleteOrder(item.id)}
      role="button"
      tabIndex="0"
    />
  </li>

  );
}

export default lineitem;
