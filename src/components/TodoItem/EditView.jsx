import styles from "./TodoItem.module.css";
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import { MdOutlineSave, MdOutlineCancel } from "react-icons/md";

export default function EditView({ todo, onSave, onCancel, register }) {
  return (
    <form className={styles.Content} onSubmit={onSave} onReset={onCancel}>
      <TodoFormFields todo={todo} register={register} />

      <div className={styles.Controls}>
        <div className={styles.Wrapper}>
          <button type="submit" className={styles.Btn}>
            <MdOutlineSave className={styles.Icon} />
          </button>
        </div>

        <div className={styles.Wrapper}>
          <button type="reset" className={styles.Btn}>
            <MdOutlineCancel className={styles.Icon} />
          </button>
        </div>
      </div>
    </form>
  );
}
