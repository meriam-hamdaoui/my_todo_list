import React from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import styles from "./TodoList.module.css"; // Assuming you have a CSS file for styling

const TodoList = ({ todoList }) => {
  return (
    <div>
      <h3 align="center">To-Do's</h3>
      <ul className={styles.TodoList}>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={styles.TodoListItem}
            data-completed={todo.completed}
          >
            <div className={styles.Content}>
              <input
                type="checkbox"
                name="completed"
                defaultChecked={todo.completed}
                className={styles.Status}
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
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
