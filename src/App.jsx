import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.jsx";
import styles from "./App.module.css";

import { useTodoHook } from "./hooks/todoHook.js";
import Alert from "./components/Alert/Alert.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const todos = useTodoHook();

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/img/to-do-list.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader />}
        <TodoForm onCreate={todos.create} />
        {!!todos.error.message && (
          <Alert onClear={todos.error.clear}>{todos.error.message}</Alert>
        )}
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
