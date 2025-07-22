import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import styles from "./TodoFormFields.module.css";
export default function TodoFormFields({
  showField = true,
  todo = {},
  register,
}) {
  return (
    <div className={styles.FormFields}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo.name}
          {...register("name", { required: true, minLength: 3, maxLength: 30 })}
        />
      </div>
      {showField && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              defaultValue={todo.description}
              rows={3}
              {...register("description", { maxLength: 200 })}
            />
          </div>
          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                defaultValue={todo.deadline}
                // to make this work for edit form check the ID
                {...register(
                  "deadline",
                  !todo.id && {
                    min: new Date().toISOString().split("T")[0],
                  }
                )}
              />
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                id="priority"
                {...register("priority")}
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key + Math.random()} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
