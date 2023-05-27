import React from "react";
import TodoList from "./TodoList/TodoList";
import CreateTodoForm from "./CreateTodoForm";

const TodosView = () => {

  return (
    <div>
      <h3>My To-dos</h3>
      <TodoList />
      <CreateTodoForm />
    </div>
  );
};

export default TodosView;
