import Header from "./Header";
import Content from "./content";
import Footer from "./Footer";
import Additem from "./additem";
import Search from "./search";
import Apirequest from "./apirequest";
import { useState, useEffect } from "react";
import apirequest from "./apirequest";

const App = () => {
/*   const API_URL = "http://localhost:3500/items"; */
  const [items, setitems] = useState(
    JSON.parse(localStorage.getItem("orderList")) || []
  );
 /*  const [items, setitems] = useState([]); */
  const [newItem, setnewItem] = useState("");
  const [searchItem, searchnewItem] = useState("");
  const fetchError=false;
  const isload=false;
/*   const [fetchError, setFetchError] = useState(null);
  const [isload, setIsLoad] = useState(true); */
  /* console.log("Before useEffect"); */

 /* useEffect(() => {
     const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");

        const listitems = await response.json();
        setitems(listitems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoad(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);
 */
   useEffect(()=>{
    localStorage.setItem("orderList", JSON.stringify(items));
  },[items])

  /*   console.log("After useEffect"); */

  async function handleclick(id) {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitems(listitems);

  /*   const myitem = listitems.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myitem[0].checked }),
    };
    const reqURL = `${API_URL}/${id}`;
    const result = await Apirequest(reqURL, updateOption);
    if (result) setFetchError(result); */
  }

  const deleteOrder = async (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setitems(listitems);

    /* const deleteOption = { method: "DELETE" };
    const reqURL = `${API_URL}/${id}`;

    const result = await Apirequest(reqURL, deleteOption);
    if (result) setFetchError(result); */
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addnewItem(newItem);
    setnewItem("");
  }

  async function addnewItem(item) {
    const id = String(
      items.length ? parseInt(items[items.length - 1].id) + 1 : 1
    );

    const newitem = { id, checked: false, item };
    const listitems = [...items, newitem];
    setitems(listitems);

   /*  const postOptions = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newitem),
    };
    const result = await Apirequest(API_URL, postOptions);

    if (result) setFetchError(result); */
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <Additem
        newItem={newItem}
        setnewItem={setnewItem}
        handlesubmit={handlesubmit}
      />

      <Search searchItem={searchItem} searchnewItem={searchnewItem} />

      <main>
        {isload && <p style={{ textAlign: "center" }}>Loading Items ...</p>}

        {fetchError && (
          <p
            style={{ color: "red", textAlign: "center" }}
          >{`Error: ${fetchError}`}</p>
        )}

        {!isload && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(searchItem.toLowerCase())
            )}
            handleclick={handleclick}
            deleteOrder={deleteOrder}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
};

export default App;
