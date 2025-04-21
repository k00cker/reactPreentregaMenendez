import React from "react";
import Item from "../components/Item";
import ItemDetails from "./ItemDetails";

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div>
      <p>ItemList</p>
      <Item />
      <ItemDetails />
    </div>
  );
};

export default ItemList;
