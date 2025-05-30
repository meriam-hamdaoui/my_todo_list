import React, { useState } from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import TodoFormFields from "../TodoFormFields/TodoFormFields.jsx";

const TodoItem = ({ todo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = (e) => {
    const updatedTodo = {
      ...todo,
      completed: e.target.checked,
    };

    onUpdate(todo.id, updatedTodo);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { elements } = e.target;
    const updatedTodo = {
      ...todo,
      name: elements.name.value,
      description: elements.description.value,
      deadline: elements.deadline.value,
      priority: elements.priority.value,
      completed: todo.completed, // Keep the current completed status
    };

    onUpdate(todo.id, updatedTodo);
    setIsEditing(false);
  };

  const todoItemTemplate = (
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

  const editingTemplate = (
    <form
      className={styles.Content}
      onReset={() => setIsEditing(false)}
      onSubmit={handleFormSubmit}
    >
      <TodoFormFields todo={todo} />

      <div className={styles.Controls}>
        <input type="submit" value="💾" />
        <input type="reset" value="❌" />
      </div>
    </form>
  );

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? editingTemplate : todoItemTemplate}
    </li>
  );
};

export default TodoItem;
