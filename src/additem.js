import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const additem = ({ newItem, setnewItem, handlesubmit }) => {
 
    return (
    <form className="addForm" onSubmit={(e) => handlesubmit(e)}>
      <label forhtml="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        onChange={(e) => setnewItem(e.target.value)}
        value={newItem}
        required
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default additem;
