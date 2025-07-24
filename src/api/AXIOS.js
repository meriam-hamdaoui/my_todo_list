// in this file we're gonna do same api's using axis package

import axios from "axios";

// first let's create an instance for our request
const http = axios.create({
  baseURL: import.meta.env.VITE_MOCKAPI_BASE_URL,
  timeout: 1000,
  headers: { "content-type": "application/json" },
});

// second we add interceptors to our request
// to avoid repeating the same logic in every individual API call
// and return our data

http.interceptors.response.use(({ data }) => data);

export const axiosAPI = {
  todos: {
    getAll(params = {}) {
      // with axios we don't need a URLSearchParams to pass our
      // filters param
      // the get request needs the db name and params
      return http.get("todos", { params }).catch((error) => {
        // we need to check if we have an error
        // if the error have a 404 status
        // the response will be an [] otherwise reject the error for now
        error?.response.status === 404 ? [] : Promise.reject(error);
      });
    },

    create(data) {
      return http.post("todos", data);
    },

    update(id, data) {
      return http.put(`todos/${id}`, data);
    },
    delete(id) {
      return http.delete(`todos/${id}`);
    },
  },
};
