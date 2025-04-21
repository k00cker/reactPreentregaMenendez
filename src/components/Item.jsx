import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function Item() {
  const header = <img alt="Imagne" src="https://via.placeholder.com/400x200" />;
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
      <Button label="Detalles" severity="secondary" raised />
    </Card>
  );
}

export default Item;
