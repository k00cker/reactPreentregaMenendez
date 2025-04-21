import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import Counter from "./Counter";
import a1 from "../assets/a1.jpg";

function ItemDetails() {
  const header = (
    <img
      alt="Imagen"
      src={a1}
      style={{ width: "300px", height: "200px", objectFit: "cover" }}
    />
  );
  const footer = <span>Este es el pie de la card</span>;
  return (
    <Card
      title="Prueba 1"
      subTitle="Card de prueba"
      footer={footer}
      header={header}
      className="md:w-25rem"
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
      <p>Precio $5.000.000</p>
      <Button label="Agregar Al Carrito" severity="success" rounded />
      <Counter />
    </Card>
  );
}

export default ItemDetails;
