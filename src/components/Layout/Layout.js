import React from "react";
import "./Layout.css";
import Todolist from "../Todolist/Todolist";
import Header from "../Header/Header";

function Layout(props) {
  return (
    <div className="app-container">
      <Header></Header>
      <Todolist></Todolist>
    </div>
  );
}

export default Layout;
