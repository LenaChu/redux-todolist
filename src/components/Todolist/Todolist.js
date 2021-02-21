import React from "react";
import "./Todolist.css";
import Todo from "../Todo/Todo";

function Todolist(props) {
  return (
    <section className="section-todolist">
      <form className="todolist-form">
        <input
          className="todo-input"
          placeholder="Type your todo"
          type="text"
        ></input>
      </form>
      <ul className="todolist">
        <Todo></Todo>
      </ul>
    </section>
  );
}

export default Todolist;
