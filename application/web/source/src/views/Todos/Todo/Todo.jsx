import { useState, React } from "react";

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);
  const [isEditable, setIsEditable] = useState(false)

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(String(e.target.value));
  };

  const setEditable = (e) => {
    e.preventDefault();
    setIsEditable(true)
  }

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsEditable(false)
    handleUpdate(e, todo.id, description, date);
  }

  const handleReject = (e) => {
    e.preventDefault();
    setIsEditable(false);
  }

  return (
    <div>
      <form>
        {isEditable ?
          <>
            <label>description: </label>
            <input value={description} onChange={handleDescriptionChange} />
            <label>Due date</label>
            <input type="date" value={date} onChange={handleDateChange} />
            <button onClick={handleConfirm}>confirm changes</button>
            <button onClick={handleReject}>reject changes</button>
          </> :
          <>
            <span>description: {description}</span>
            <span>due date: {date}</span>
            <button onClick={setEditable}>edit</button>
            <button onClick={(e) => handleDelete(e, todo.id)}>delete</button>
          </>
        }

      </form>
    </div>

  );
};

export default Todo;
