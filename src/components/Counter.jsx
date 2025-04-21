import { useState, useEffect } from "react";
import { Button } from "primereact/button";

const Counter = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`el contador cambió a ${contador}`);
  }, [contador]);

  return (
    <div className="p-3">
      <h1>Agregar</h1>
      <p>Llevas: {contador}</p>
      <div className="flex gap-2">
        <Button
          borderRadius="100%"
          icon="pi pi-plus"
          className="p-button-rounded p-button-success"
          severity="warning"
          rounded
          onClick={() => setContador(contador + 1)}
        />

        <Button
          borderRadius="100%"
          icon="pi pi-minus"
          className="p-button-rounded p-button-danger"
          severity="warning"
          rounded
          onClick={() => setContador(contador - 1)}
        />
        <Button
          label="Reset"
          severity="secondary"
          rounded
          onClick={() => setContador(0)}
        />
      </div>
    </div>
  );
};

export default Counter;
