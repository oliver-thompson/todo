import React from "react";
import { useState } from "react";
import TodoList from "./TodoList/TodoList";

const Todos = () => {
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(String(e.target.value));
  };

  const handleClick = (e) => {
    // NEED TO ADD A CHECK FOR NULL, SHOULD NOT WORK

    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: description,
        date: date,
      }),
    };
    fetch("http://localhost:8080/todos/", req).then((response) =>
      console.log(response)
    );
  };

  return (
    <div>
      <h3>My To-dos</h3>
      <TodoList />

      <form>
        <label>What do you need to do?</label>
        <input onChange={handleChange} />
        <label>Due date</label>
        <input type="date" onChange={handleDateChange} />
        <button onClick={handleClick}>Add to-do</button>
      </form>
    </div>
  );
};

export default Todos;
