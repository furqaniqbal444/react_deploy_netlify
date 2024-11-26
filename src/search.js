import React from 'react';

function search({searchItem, searchnewItem}) {
  return (
   <form className="searchForm" >
    <label forhtml="serachItem">Search Item</label>
    <input
    id="serachItem"
    type="text"
    placeholder="Search Item"
    value={searchItem}
 
    onChange={(e)=>searchnewItem(e.target.value)}
    />
   </form>
  );
}

export default search;
