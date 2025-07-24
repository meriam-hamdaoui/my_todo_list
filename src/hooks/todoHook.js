import { useState, useEffect, useCallback } from "react";

import { axiosAPI } from "../api/AXIOS";

export const useTodoHook = () => {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  //   handle error messages
  const [errorMessage, setErrorMessage] = useState();

  // spiner
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodo = useCallback(async () => {
    /**  my way of calling api's
     * getTodos(setTodos, filters);
     */
    // instructor api's

    setIsLoading(true);
    try {
      const data = await axiosAPI.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Failed to fetch data. Please try again. ");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  /** my CRUD's
 *const handleCreate = (newTodo) => createTodos(newTodo, fetchTodo);
 const handleUpdate = (id, editTodo) => updateTodo(id, editTodo, fetchTodo);
 const handleDelete = (id) => deleteTodo(id, fetchTodo);
 */

  const handleCreate = async (newTodo) => {
    setIsLoading(true);
    try {
      await axiosAPI.todos.create(newTodo);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to create data. Please try again. ");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, editTodo) => {
    setIsLoading(true);
    try {
      await axiosAPI.todos.update(id, editTodo);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to update data. Please try again. ");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axiosAPI.todos.delete(id);
      await fetchTodo();
    } catch (error) {
      setErrorMessage("Failed to delete data. Please try again. ");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo, filters]);

  return {
    isLoading,
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
