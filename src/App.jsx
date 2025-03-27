import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Layout } from "antd";

const App = () => {
  return (
    <Layout>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a RetroArcade!" />
    </Layout>
  );
};

export default App;
