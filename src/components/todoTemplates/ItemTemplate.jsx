import React from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import styles from "../TodoItem/TodoItem.module.css";

const ItemTemplate = ({ todo, handleCheckboxChange, setIsEditing }) => {
  return (
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
      <div className={styles.Controls}>
        <button onClick={() => setIsEditing(true)}>📝</button>
      </div>
    </div>
  );
};

export default ItemTemplate;
