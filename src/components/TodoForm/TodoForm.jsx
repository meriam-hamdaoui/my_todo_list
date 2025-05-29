import React, { useState } from "react";
import styles from "./Todo.module.css";

const periorities = [
  { value: "none", label: "None" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const TodoForm = ({ onCreate }) => {
  const [showField, setShowField] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { elements } = event.target;
    if (elements.name.value === "") return;

    onCreate({
      name: elements.name.value,
      description: elements.description?.value ?? "",
      deadline: elements.deadline?.value ?? "",
      priority: elements.priority?.value ?? "",
      completed: false,
    });

    event.target.reset();
  };

  const handleShowField = () => setShowField(!showField);

  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button onClick={handleShowField}>
          {showField ? "Hide" : "Show"} All Field
        </button>
      </h3>

      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.FormFields}>
          <div className={styles.FormField}>
            <input
              type="text"
              aria-label="Name*"
              placeholder="Name*"
              name="name"
              autoComplete="off"
            />
          </div>
          {showField && (
            <>
              {" "}
              <div className={styles.FormField}>
                <textarea
                  aria-label="Description"
                  placeholder="Description"
                  name="description"
                  rows="3"
                />
              </div>
              <div className={styles.FormGroup}>
                <div className={styles.FormField}>
                  <label htmlFor="deadline">Deadline</label>
                  <input type="date" id="deadline" name="deadline" />
                </div>

                <div className={styles.FormField}>
                  <label htmlFor="priority">Priority</label>
                  <select defaultValue="none" id="priority" name="priority">
                    {periorities.map((priority) => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
