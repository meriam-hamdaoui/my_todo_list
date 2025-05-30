import React, { useState } from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import TodoFormFields from "../TodoFormFields/TodoFormFields.jsx";
import EditTemplate from "../todoTemplates/EditTemplate.jsx";
import ItemTemplate from "../todoTemplates/ItemTemplate.jsx";

const TodoItem = ({ todo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? (
        <EditTemplate
          setIsEditing={setIsEditing}
          todo={todo}
          onUpdate={onUpdate}
        >
          <TodoFormFields todo={todo} />
        </EditTemplate>
      ) : (
        <ItemTemplate
          todo={todo}
          onUpdate={onUpdate}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
};

export default TodoItem;
