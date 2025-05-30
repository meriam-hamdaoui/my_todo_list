import React, { useState } from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import TodoFormFields from "../TodoFormFields/TodoFormFields.jsx";
import EditTemplate from "../todoTemplates/EditTemplate.jsx";
import ItemTemplate from "../todoTemplates/ItemTemplate.jsx";

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

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? (
        <EditTemplate
          handleFormSubmit={handleFormSubmit}
          setIsEditing={setIsEditing}
        >
          <TodoFormFields todo={todo} />
        </EditTemplate>
      ) : (
        <ItemTemplate
          todo={todo}
          handleCheckboxChange={handleCheckboxChange}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
};

export default TodoItem;
