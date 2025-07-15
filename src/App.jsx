import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import { TODOS_DEFAULT } from "./constants/data.js";
import TodoList from "./components/TodoList/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);

  const handleCreate = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  };

  const handleUpdate = (id, newTodos) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...newTodos } : todo
      )
    );
  };

  const handleDelete = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/img/to-do-list.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
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
