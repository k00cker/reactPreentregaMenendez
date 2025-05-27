import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <IconButton component={Link} to="/cart" color="inherit">
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
