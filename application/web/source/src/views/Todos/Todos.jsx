import React, { useState, useEffect } from "react";
import getTodos from "./getTodos";
import Todo from "./Todo/Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const renderTodoList = () => {
    console.log(todos);
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

export default Todos;
