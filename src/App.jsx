import { useState, useEffect, useCallback } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.jsx";
import styles from "./App.module.css";
// import { TODOS_DEFAULT } from "./constants/data.js";
import {
  getTodos,
  createTodos,
  deleteTodo,
  updateTodo,
} from "./api/CRUD_Todo.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodo = useCallback(() => {
    getTodos(setTodos, filters);
  }, [filters]);

  const handleCreate = (newTodo) => createTodos(newTodo, fetchTodo);

  const handleUpdate = (id, editTodo) => updateTodo(id, editTodo, fetchTodo);

  const handleDelete = (id) => deleteTodo(id, fetchTodo);

  // const handleFilters = (todo) => {
  //   const { completed, priority } = filters;

  //   return (
  //     (completed === "" || todo.completed === completed) &&
  //     (priority === "" || todo.priority === priority)
  //   );
  // };

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
