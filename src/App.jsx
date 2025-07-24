import { useState, useEffect, useCallback } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.jsx";
import styles from "./App.module.css";
// import { TODOS_DEFAULT } from "./constants/data.js";
// import {
//   getTodos,
//   createTodos,
//   deleteTodo,
//   updateTodo,
// } from "./api/CRUD_Todo.js";

import { apiTodos } from "./api/API.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodo = useCallback(() => {
    /**  my way of calling api's
     * getTodos(setTodos, filters);
     */
    // instructor api's

    apiTodos.todos.getAll(filters).then(setTodos);
  }, [filters]);

  /** my CRUD's
   *const handleCreate = (newTodo) => createTodos(newTodo, fetchTodo);
   const handleUpdate = (id, editTodo) => updateTodo(id, editTodo, fetchTodo);
   const handleDelete = (id) => deleteTodo(id, fetchTodo);
   */

  const handleCreate = (newTodo) =>
    apiTodos.todos.create(newTodo).then(fetchTodo);

  const handleUpdate = (id, editTodo) =>
    apiTodos.todos.update(id, editTodo).then(fetchTodo);

  const handleDelete = (id) => apiTodos.todos.delete(id).then(fetchTodo);

  /**this is the used filter before the mockAPI
   const handleFilters = (todo) => {
     const { completed, priority } = filters;

     return (
       (completed === "" || todo.completed === completed) &&
       (priority === "" || todo.priority === priority)
     );
   };*/

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo, filters]);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/img/to-do-list.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilters} />
        <TodoList
          todoList={todos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
