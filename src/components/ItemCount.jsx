import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count > 0) {
      addToCart(item, count);
      setCount(0);
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
      <Button variant="outlined" onClick={decrement} disabled={count === 0}>
        -
      </Button>
      <span style={{ minWidth: "24px", textAlign: "center" }}>{count}</span>
      <Button variant="outlined" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={handleAdd} disabled={count === 0}>
        Agregar al carrito
      </Button>
    </Stack>
  );
};

export default ItemCount;
