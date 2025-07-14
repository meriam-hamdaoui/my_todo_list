import styles from "./TodoList.module.css"; // Assuming you have a CSS file for styling
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todoList, onUpdate }) => {
  return (
    <div>
      <h3 align="center">To-Do's</h3>
      <ul className={styles.TodoList}>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
