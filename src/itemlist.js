import { FaTrashAlt } from "react-icons/fa";
import Lineitem from "./lineitem";
function itemlist({ items, handleclick, deleteOrder }) {
  return (
    <ul>
      {items.map((item) => (
        <Lineitem
          key={item.id}
          item={item}
          handleclick={handleclick}
          deleteOrder={deleteOrder}
        />
      ))}
    </ul>
  );
}

export default itemlist;
