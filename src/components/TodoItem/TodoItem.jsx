import React from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";

const TodoItem = ({ todo, onUpdate }) => {
  const handleCheckboxChange = (e) => {
    const updatedTodo = {
      ...todo,
      completed: e.target.checked,
    };

    onUpdate(todo.id, updatedTodo);
  };

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      <div className={styles.Content}>
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          className={styles.Status}
          onChange={(e) => handleCheckboxChange(e)}
        />
        <div className={styles.Info}>
          <span>{todo.name}</span>
          {todo.description && (
            <span className={styles.Description}>{todo.description}</span>
          )}

          <span className={styles.AdditionalInfo}>
            {todo.deadline}
            {todo.priority !== PRIORITY_DEFAULT && (
              <span
                className={styles.Priority}
                style={{
                  color: PRIORITIES[todo.priority].color,
                }}
              >
                {PRIORITIES[todo.priority].label}
              </span>
            )}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
