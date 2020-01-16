import React from "react";
import "normalize.css";
import "./sass/App.scss";
import CardHolder from "./components/CardHolder";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main role="main">
      <Sidebar />
      <CardHolder />
    </main>
  );
}

export default App;
