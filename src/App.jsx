import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.jsx";
import styles from "./App.module.css";
// import { TODOS_DEFAULT } from "./constants/data.js";
import { getTodos, createTodos } from "./api/CRUD_Todo.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodo = () => getTodos(setTodos);

  const handleCreate = (newTodo) => createTodos(newTodo, fetchTodo);

  const handleUpdate = (id, newTodos) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...newTodos } : todo
      )
    );
  };

  const handleDelete = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));

  const handleFilters = (todo) => {
    const { completed, priority } = filters;

    return (
      (completed === "" || todo.completed === completed) &&
      (priority === "" || todo.priority === priority)
    );
  };

  useEffect(() => {
    fetchTodo();
  }, []);

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
          todoList={todos.filter(handleFilters)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
