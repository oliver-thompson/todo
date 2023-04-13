import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return todos.length ? (
    <ul>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </ul>
  ) : (
    <p>You have no to-dos</p>
  );
};

export default TodoList;
