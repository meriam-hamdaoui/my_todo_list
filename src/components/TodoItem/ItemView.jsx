import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data";
import { MdOutlineEditNote, MdOutlineDelete } from "react-icons/md";
export default function ItemView({ todo, onChangeBox, onClickEdit, onDelete }) {
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
        <div className={styles.Wrapper}>
          <button className={styles.Btn} onClick={onClickEdit}>
            <MdOutlineEditNote className={styles.Icon} />
          </button>
        </div>
        <div className={styles.Wrapper}>
          <button className={styles.Btn} onClick={() => onDelete(todo.id)}>
            <MdOutlineDelete className={styles.Icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
