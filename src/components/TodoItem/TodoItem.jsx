import { useState } from "react";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import ItemView from "./ItemView";
import EditView from "./EditView";

const TodoItem = ({ todo, onUpdate }) => {
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

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? (
        <EditView todo={todo} onCancel={handleReset} />
      ) : (
        <ItemView
          todo={todo}
          onChangeBox={handleCheckboxChange}
          onClickEdit={handleIsEditing}
        />
      )}
    </li>
  );
};

export default TodoItem;
