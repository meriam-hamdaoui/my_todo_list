import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.jsx";
import styles from "./App.module.css";

import { useTodoHook } from "./hooks/todoHook.js";

function App() {
  const todos = useTodoHook();

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/img/to-do-list.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={todos.create} />
        <TodoFilters onFilter={todos.filter} />
        <TodoList
          todoList={todos.data}
          onUpdate={todos.update}
          onDelete={todos.delete}
        />
      </div>
    </div>
  );
}

export default App;
