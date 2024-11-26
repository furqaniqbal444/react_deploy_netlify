import Itemlist from "./itemlist";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleclick, deleteOrder }) => {
  return (
    <>
      {items.length ? (
        <Itemlist
        items={items}
        handleclick={handleclick}
        deleteOrder={deleteOrder}
        />
      ) : (
        <p style={{ margin: "0.5rem", textAlign:'center' }}>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
