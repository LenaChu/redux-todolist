import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <li className="todo">
      <p className="todo-content">Test</p>
      <button className="remove-btn">Remove</button>
    </li>
  );
}

export default Todo;
