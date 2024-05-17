import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [select, setSelect] = useState("All")
  const itemsToDisplay = items.filter((item) =>{
    if(select === 'All') return true;
    else return select === item.category
  })
  function handelChange(e){
    setSelect(e.target.value)   
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handelChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;