import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <span>description: {todo.description}</span>
      <span>due date: {todo.date}</span>
    </div>
  );
};

export default Todo;
