import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const CartWidget = () => {
  return (
    <Badge count={3} showZero>
      <ShoppingCartOutlined style={{ fontSize: "24px", color: "white" }} />
    </Badge>
  );
};

export default CartWidget;
