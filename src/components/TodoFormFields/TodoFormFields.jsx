import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import styles from "./TodoFormFields.module.css";
export default function TodoFormFields({
  showField = true,
  todo = {},
  register,
  errors = {},
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
          {...register("name")}
        />
        {errors.name && (
          <span className={styles.FormFieldError}>{errors.name.message}</span>
        )}
      </div>
      {showField && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              defaultValue={todo.description}
              rows={3}
              {...register("description")}
            />
            {errors.description && (
              <span className={styles.FormFieldError}>
                {errors.description.message}
              </span>
            )}
          </div>
          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                defaultValue={todo.deadline}
                // to make this work for edit form check the ID
                {...register("deadline")}
              />
              {errors.deadline && (
                <span className={styles.FormFieldError}>
                  {errors.deadline.message}
                </span>
              )}
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
              {errors.priority && (
                <span className={styles.FormFieldError}>
                  {errors.priority.message}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
