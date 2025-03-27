import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const ItemListContainer = ({ greeting }) => {
  return (
    <Card style={{ margin: "20px", textAlign: "center" }}>
      <Title level={3}>{greeting}</Title>
    </Card>
  );
};

export default ItemListContainer;
