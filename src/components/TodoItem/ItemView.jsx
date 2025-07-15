import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import { MdEditDocument } from "react-icons/md";
export default function ItemView({ todo, onChangeBox, onClickEdit }) {
  return (
    <div className={styles.Content}>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        className={styles.Status}
        onChange={onChangeBox}
      />
      <div className={styles.Info}>
        <span>{todo.name}</span>
        {todo.description && (
          <span className={styles.Description}>{todo.description}</span>
        )}

        <div className={styles.AdditionalInfo}>
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
        </div>
      </div>
      <div className={styles.Controls}>
        <button onClick={onClickEdit}>
          <MdEditDocument />{" "}
        </button>
      </div>
    </div>
  );
}
