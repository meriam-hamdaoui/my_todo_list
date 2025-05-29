import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import { TODOS_DEFAULT } from "./components/const/data.js";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([...TODOS_DEFAULT]);

  const handleCreate = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  };

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/img/to-do-list.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
