import React, { useState, useEffect } from "react";
import { getAllTodos } from "../../../services/Todo/todoApi";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const renderTodoList = () => {
    return (
      <ul>
        {todos.map((todo) => {
          console.log("todo in todos.jsx", todo);
          return <Todo todo={todo} />;
        })}
      </ul>
    );
  };

  return renderTodoList();
};

export default TodoList;
