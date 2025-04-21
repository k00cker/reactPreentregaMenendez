import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default App;
