import React from "react";

const Todo = ({ todo, handleDelete }) => {
  return (
    <div>
      <span>description: {todo.description}</span>
      <span>due date: {todo.date}</span>

      <button onClick={(e) => handleDelete(e, todo.id)}>delete</button>
    </div>
  );
};

export default Todo;
