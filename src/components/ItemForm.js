import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState("")
  const [itemCetagory, setItemCategoty] = useState("Produce")

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id : uuid(),
      name: itemName,
      category: itemCetagory
    }
    props.setItems([...props.items,newItem])
    setItemName("")
    setItemCategoty("Produce")
  }
  return (

    <form className="NewItem" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setItemName(e.target.value)} value={itemName} placeholder="Add new Item"/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setItemCategoty(e.target.value)} value={itemCetagory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
