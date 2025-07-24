/** this methodes are the instructor way to make
 * the code cleaner
 * */

const API_BASE_URL = import.meta.env.VITE_MOCKAPI_BASE_URL;

// my touch

const headerConfig = { "content-type": "application/json" };

export const apiTodos = {
  todos: {
    getAll(params = {}) {
      const searchParams = new URLSearchParams(params).toString();

      return fetch(`${API_BASE_URL}/todos?${searchParams}`, {
        method: "GET",
        headers: headerConfig,
      }).then((response) => {
        if (response.ok) return response.json();
        if (response.status === 404) return [];
      });
    },

    create(data) {
      return fetch(`${API_BASE_URL}/todos`, {
        method: "POST",
        headers: headerConfig,
        body: JSON.stringify(data),
      }).then((response) => !!response.ok && response.json());
    },

    update(id, data) {
      return fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "PUT",
        headers: headerConfig,
        body: JSON.stringify(data),
      }).then((response) => !!response.ok && response.json());
    },

    delete(id) {
      return fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "DELETE",
      }).then((response) => !!response.ok && response.json());
    },
  },
};
