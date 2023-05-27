export function getAllTodos() {
  return fetch("http://localhost:8080/todos/")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function postTodo(description, date) {
  const req = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: description,
      date: date,
    }),
  };
  fetch("http://localhost:8080/todos/", req)
}

export function putTodo(todoId, description, date) {
  const req = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: todoId,
      description: description,
      date: date,
    })
  };
  fetch(`http://localhost:8080/todos/${todoId}`, req)
}

export function deleteTodo(todoId) {
  const req = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: todoId,
    }),
  };

  fetch(`http://localhost:8080/todos/${todoId}`, req)
}