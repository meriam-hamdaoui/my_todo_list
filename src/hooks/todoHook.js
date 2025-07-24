import { useState, useEffect, useCallback } from "react";

import { axiosAPI } from "../api/AXIOS";

export const useTodoHook = () => {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  //   handle error messages
  const [errorMessage, setErrorMessage] = useState();

  const fetchTodo = useCallback(async () => {
    /**  my way of calling api's
     * getTodos(setTodos, filters);
     */
    // instructor api's

    try {
      const data = await axiosAPI.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Failed to fetch data. Please try again. ");
      console.error(error);
    }
  }, [filters]);

  /** my CRUD's
 *const handleCreate = (newTodo) => createTodos(newTodo, fetchTodo);
 const handleUpdate = (id, editTodo) => updateTodo(id, editTodo, fetchTodo);
 const handleDelete = (id) => deleteTodo(id, fetchTodo);
 */

  const handleCreate = async (newTodo) => {
    try {
      await axiosAPI.todos.create(newTodo);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to create data. Please try again. ");
      console.error(error);
    }
  };

  const handleUpdate = async (id, editTodo) => {
    try {
      await axiosAPI.todos.update(id, editTodo);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to update data. Please try again. ");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosAPI.todos.delete(id);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to delete data. Please try again. ");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo, filters]);

  return {
    data: todos,
    filter: setFilters,
    fetch: fetchTodo,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
      message: errorMessage,
      clear: () => setErrorMessage(),
    },
  };
};
