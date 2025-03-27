import { ShoppingCartOutlined } from "@ant-design/icons";
import "../style.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCartOutlined className="cart-icon" />
      <span className="cart-count">3</span>{" "}
      {/* Hardcodeado como indica la consigna */}
    </div>
  );
};

export default CartWidget;
