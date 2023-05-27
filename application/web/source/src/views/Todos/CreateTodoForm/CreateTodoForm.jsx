import { React, useState } from 'react'
import { postTodo } from "../../../api/todo";
import "./CreateTodoForm.css"

const CreateTodoForm = () => {
  // possible to remove description and date state from here? they exist in Todo.jsx
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
      postTodo(description, date);
      resetForm();
    }
  };

  const resetForm = () => {
    setDate()
    setDescription()
    let formElement = document.getElementById("create-todo");
    formElement.reset();
  }

  return (
    <div>
      <form id="create-todo">
        <label>What do you need to do?</label>
        <input onChange={handleDescriptionChange} />
        <label>Due date</label>
        <input type="date" onChange={handleDateChange} />
        <button onClick={handleClick}>Add to-do</button>
        <div id="error-message">{errorMessage}</div>
      </form>
    </div>
  )
}

export default CreateTodoForm