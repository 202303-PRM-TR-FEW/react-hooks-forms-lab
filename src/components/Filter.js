import React from "react";

function Filter({ onCategoryChange, setSearchedItems,searchedItems }) {
  return (
    <div className="Filter">
      <input type="text"
       name="search" 
       placeholder="Search..."
        value={searchedItems}
        onChange={(e)=> setSearchedItems(e.target.value)}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
