/** thid id my way for making th code cleaner */

const API_BASE_URL = import.meta.env.VITE_MOCKAPI_BASE_URL;

// my touch

const headerConfig = { "content-type": "application/json" };

export const getTodos = (set, filters) => {
  const searchParams = new URLSearchParams({ ...filters }).toString();

  fetch(`${API_BASE_URL}/todos?${searchParams}`, {
    method: "GET",
    headers: headerConfig,
  })
    .then((response) => {
      if (response.ok) return response.json();
      if (response.status === 404) return [];
    })
    .then(set);
};

export const createTodos = (newTodo, fetchData) =>
  fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: headerConfig,
    body: JSON.stringify(newTodo),
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);

export const deleteTodo = (id, fetchData) =>
  fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);

export const updateTodo = (id, editTodo, fetchData) =>
  fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: headerConfig,
    body: JSON.stringify(editTodo),
  })
    .then((response) => !!response.ok && response.json())
    .then(fetchData);
