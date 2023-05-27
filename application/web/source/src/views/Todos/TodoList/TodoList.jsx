import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import { getAllTodos, putTodo, deleteTodo } from "../../../api/todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(response => setTodos(response))
  }, [todos]);

  const handleDelete = (e, todoId) => {
    deleteTodo(todoId)
    setTodos(todos.filter((todo) => todo.id !== todoId))
  };

  const handleUpdate = (e, todoId, description, date) => {
    putTodo(todoId, description, date)
  }

  return todos.length ? (
    <ul>
      {todos.map((todo) => {
        return <Todo handleDelete={handleDelete} handleUpdate={handleUpdate} todo={todo} key={todo.id} />;
      })}
    </ul>
  ) : (
    <p>You have no to-dos</p>
  );
};

export default TodoList;
