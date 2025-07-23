export const getTodos = (set, filters) => {
  const searchParams = new URLSearchParams({ ...filters }).toString();

  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos?${searchParams}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((response) => {
      if (response.ok) return response.json();
      if (response.status === 404) return [];
    })
    .then(set);
};

export const createTodos = (newTodo, fetchData) =>
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newTodo),
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);

export const deleteTodo = (id, fetchData) =>
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);

export const updateTodo = (id, editTodo, fetchData) =>
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(editTodo),
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);
