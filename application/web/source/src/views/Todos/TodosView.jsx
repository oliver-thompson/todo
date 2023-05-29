import { React, useState } from "react";
import TodoList from "./TodoList/TodoList";
import CreateTodoForm from "./CreateTodoForm/CreateTodoForm";

const TodosView = () => {
  const [isCreateFormShown, setIsCreateFormShown] = useState(false);

  const setCreateFormShown = () => {
    setIsCreateFormShown(!isCreateFormShown)
  }

  return (
    <div>
      <h3>My To-dos</h3>
      <TodoList />

      {isCreateFormShown ?
        <CreateTodoForm isCreateFormShown={isCreateFormShown} setCreateFormShown={setCreateFormShown} />
        :
        <button onClick={setCreateFormShown}>Add task</button>
      }

    </div>
  );
};

export default TodosView;
