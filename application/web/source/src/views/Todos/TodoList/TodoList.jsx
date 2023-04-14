import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleDelete = (e, todoId) => {
    const req = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: todoId,
      }),
    };

    fetch(`http://localhost:8080/todos/${todoId}`, req).then(
      setTodos(todos.filter((todo) => todo.id !== todoId))
    );
  };

  return todos.length ? (
    <ul>
      {todos.map((todo) => {
        return <Todo handleDelete={handleDelete} todo={todo} key={todo.id} />;
      })}
    </ul>
  ) : (
    <p>You have no to-dos</p>
  );
};

export default TodoList;
