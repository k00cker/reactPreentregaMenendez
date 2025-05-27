import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Tu carrito está vacío.
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Volver al inicio
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {cart.map((product) => (
        <Box key={product.id} sx={{ mb: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2">
                Cantidad: {product.quantity}
              </Typography>
              <Typography variant="body2">
                Subtotal: ${product.price * product.quantity}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeFromCart(product.id)}
            >
              Eliminar
            </Button>
          </Stack>
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}

      <Typography variant="h5">Total: ${totalPrice}</Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button variant="contained" color="primary">
          Finalizar Compra
        </Button>
        <Button variant="outlined" color="error" onClick={clearCart}>
          Vaciar Carrito
        </Button>
      </Stack>
    </Box>
  );
};

export default Cart;
