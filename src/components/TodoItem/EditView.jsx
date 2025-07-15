import styles from "./TodoItem.module.css";
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import { MdOutlineSave, MdOutlineCancel } from "react-icons/md";

export default function EditView({ todo }) {
  return (
    <form>
      <div className={styles.Content}>
        <TodoFormFields todo={todo} />

        <div className={styles.Controls}>
          <div className={styles.Wrapper}>
            <MdOutlineSave className={styles.Icon} />
            <input type="submit" className={styles.Input} value="" />
          </div>
          <div className={styles.Wrapper}>
            <MdOutlineCancel className={styles.Icon} />
            <input type="submit" className={styles.Input} value="" />
          </div>
        </div>
      </div>
    </form>
  );
}
