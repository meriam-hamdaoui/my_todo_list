import { useState, useEffect, useCallback } from "react";

import { axiosAPI } from "../api/AXIOS";

export const useTodoHook = () => {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodo = useCallback(async () => {
    /**  my way of calling api's
     * getTodos(setTodos, filters);
     */
    // instructor api's

    try {
      const data = await axiosAPI.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      !!error && console.error("Failed to fetch data. Please try again ");
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
      !!error && console.error("Failed to create data. Please try again ");
    }
  };

  const handleUpdate = async (id, editTodo) => {
    try {
      await axiosAPI.todos.update(id, editTodo);
      await fetchTodo();
    } catch (error) {
      !!error && console.error("Failed to update data. Please try again ");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosAPI.todos.delete(id);
      await fetchTodo();
    } catch (error) {
      !!error && console.error("Failed to delete data. Please try again ");
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
  };
};
