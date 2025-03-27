import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  SkinOutlined,
  DesktopOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CartWidget from "./CartWidget";

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => {
  const items = [
    { key: "1", icon: <ReadOutlined />, label: "Revistas" },
    { key: "2", icon: <DesktopOutlined />, label: "VideoJuegos" },
    { key: "3", icon: <SkinOutlined />, label: "Poleras" },
    {
      key: "4",
      icon: <SettingOutlined />,
      label: "Más",
      children: [
        { key: "5", label: "Accesorios" },
        { key: "6", label: "Ofertas" },
      ],
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Title level={3} style={{ color: "white", margin: 0 }}>
          RetroArcade
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1 }}
        />
        <CartWidget />
      </Header>
    </Layout>
  );
};

export default NavBar;
