import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items ,setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearchedItems] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => { 
      const name = item.name.toLowerCase()
     return name.includes(searchedItems)
    })
    .filter((item) => {

      if (selectedCategory === "All") return true;

      return item.category === selectedCategory
    })


    ;

  return (
    <div className="ShoppingList">
      <ItemForm setItems = {setItems} items={items}/>
      <Filter onCategoryChange={handleCategoryChange}
        setSearchedItems={setSearchedItems}
        searchedItems={searchedItems}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
