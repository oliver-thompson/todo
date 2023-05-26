import React from "react";
import { useState } from "react";
import TodoList from "./TodoList/TodoList";

const TodosView = () => {
  // possible to remove description and date from here?
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [errorMessage, setErrorMessage] = useState("")

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(String(e.target.value));
  };

  const handleClick = (e) => {
    e.preventDefault()
    if (description === undefined || date === undefined) {
      setErrorMessage("Description and date are required.");
    } else {
      setErrorMessage("")
      postTodo();
    }
  };

  const postTodo = () => {
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: description,
        date: date,
      }),
    };
    fetch("http://localhost:8080/todos/", req)
    resetForm()
  }

  const resetForm = () => {
    setDate()
    setDescription()
    let formElement = document.getElementById("create-todo");
    formElement.reset();
  }

  return (
    <div>
      <h3>My To-dos</h3>
      <TodoList />

      <form id="create-todo">
        <label>What do you need to do?</label>
        <input onChange={handleDescriptionChange} />
        <label>Due date</label>
        <input type="date" onChange={handleDateChange} />
        <button onClick={handleClick}>Add to-do</button>
        <div>{errorMessage}</div>
      </form>

    </div>
  );
};

export default TodosView;
