import { useState } from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import ItemView from "./ItemView";
import EditView from "./EditView";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => setIsEditing(true);
  const handleReset = () => setIsEditing(false);

  const handleCheckboxChange = (e) => {
    const updatedTodo = {
      ...todo,

      completed: e.target.checked,
    };

    onUpdate(todo.id, updatedTodo);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const { elements } = e.target;
    // if (elements.name.value === "") return;

    onUpdate(todo.id, {
      name: elements.name.value,
      description: elements.description.value,
      deadline: elements.deadline.value ?? e.target.value,
      priority: elements.priority.value,
      completed: todo.completed ?? e.target.value,
    });
    setIsEditing(false);
  };

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? (
        <EditView todo={todo} onCancel={handleReset} onSave={handleEdit} />
      ) : (
        <ItemView
          todo={todo}
          onChangeBox={handleCheckboxChange}
          onClickEdit={handleIsEditing}
          onDelete={onDelete}
        />
      )}
    </li>
  );
};

export default TodoItem;
