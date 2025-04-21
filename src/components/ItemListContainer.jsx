import React from "react";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
  ];

  return (
    <div>
      <p>Logica de Producto</p>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
