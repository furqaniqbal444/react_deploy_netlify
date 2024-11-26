import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setitems] = useState([
    {
      id: 1,
      checked: true,
      item: "Mango",
    },
    {
      id: 2,
      checked: false,
      item: "Orange",
    },
    {
      id: 3,
      checked: false,
      item: "Banana",
    },
  ]);

function handleclick(id){
  const listitems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
  console.log(listitems);
  setitems(listitems);
  localStorage.setItem('orderList',JSON.stringify(listitems));
}

function deleteOrder(id)
{
  const listitems=items.filter((item)=>item.id !==id);
  setitems(listitems);
  localStorage.setItem('orderList',JSON.stringify(listitems));

}


  return (
    <main>
      {items.length?(
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
            type="checkbox" 
            onChange={()=>handleclick(item.id)}

            checked={item.checked}>

            </input>

            
            <label 
            style={item.checked?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleclick(item.id)}>
              {item.item}
              </label>

            <FaTrashAlt 
            onClick={()=>deleteOrder(item.id)}
            role="button" 
            tabIndex="0"/>

          </li>
        ))}

      </ul>
      ):
      <p style={{margin:'2rem'}}>Your list is empty</p>}
    </main>
  );
};

export default Content;
