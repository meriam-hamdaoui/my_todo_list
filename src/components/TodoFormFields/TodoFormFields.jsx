import React from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import styles from "./TodoFormFields.module.css";

const TodoFormFields = ({ showField = true, todo = {} }) => {
  return (
    <div className={styles.FormFields}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          name="name"
          autoComplete="off"
          defaultValue={todo.name}
        />
      </div>
      {showField && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              name="description"
              rows="3"
              defaultValue={todo.description}
            />
          </div>
          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                defaultValue={todo.deadline}
              />
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                id="priority"
                name="priority"
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key} value={key}>
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
};

export default TodoFormFields;
