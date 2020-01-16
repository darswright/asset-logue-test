import React from "react";
import "normalize.css";
import "./sass/App.scss";
import CardHolder from "./components/CardHolder";
import Sidebar from "./components/Sidebar";
import GithubLink from "./components/GithubLink";

function App() {
  return (
    <main role="main">
      <Sidebar />
      <CardHolder />
      <GithubLink />
    </main>
  );
}

export default App;
