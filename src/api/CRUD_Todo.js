export const getTodos = (fonction) => {
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((response) => !!response.ok && response.json())
    .then(fonction);
};

export const createTodos = (newTodo, fonction) => {
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newTodo),
  })
    .then((response) => !!response.ok && response.json())
    .then(fonction);
};

export const deleteTodo = (id, fonction) =>
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  })
    .then((response) => !!response.ok && response.json())
    .then(fonction);
