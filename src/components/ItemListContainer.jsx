import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

// Simulación de productos
const productos = [
  {
    id: 1,
    title: "Smartphone",
    price: 299,
    category: "electronica",
    image:
      "https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/474x712/paris/810185999/variant/images/5064ebc1-9d36-4193-bba9-56d753bb268d/810185999-0000-002.jpg",
  },
  {
    id: 2,
    title: "Camisa",
    price: 49,
    category: "ropa",
    image:
      "https://tiendatolquien.com/cdn/shop/products/retrogamernegro.jpg?v=1647786357&width=990",
  },
  {
    id: 3,
    title: "Laptop",
    price: 899,
    category: "electronica",
    image:
      "https://i5.walmartimages.cl/asr/452741b2-5766-432d-9428-18dd391236d4.a14abd77d4d40669d3f56a4699b3908e.jpeg?null=&odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: 4,
    title: "Pantalón",
    price: 59,
    category: "ropa",
    image: "https://m.media-amazon.com/images/I/81u3ZWte2vL._AC_UY1000_.jpg",
  },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter((item) => item.category === categoryId));
        } else {
          resolve(productos);
        }
      }, 500);
    });

    fetchItems.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
