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
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "3 character minimum",
            },
            maxLength: {
              value: 30,
              message: "30 character maximum",
            },
          })}
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
              {...register("description", {
                maxLength: {
                  value: 200,
                  message: "200 character maximum",
                },
              })}
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
                {...register("deadline", {
                  min: !todo.id && {
                    value: new Date().toISOString().split("T")[0],
                    message: "Deadline can't be in the past",
                  },
                })}
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
                {...register("priority", {
                  validate: (value) =>
                    Object.keys(PRIORITIES).includes(value) || "unvalide value",
                })}
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
