import styles from "./TodoList.module.css"; // Assuming you have a CSS file for styling
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todoList, onUpdate, onDelete }) => {
  return (
    <div>
      <h3>{todoList.length ? "To-Do's" : "Nothing To Do"}</h3>

      <ul className={styles.TodoList}>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id + Math.random()}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
