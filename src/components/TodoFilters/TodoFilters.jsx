import React, { useState } from "react";
import styles from "./TodoFilters.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES } from "../../constants/data.js";

const TodoFilters = () => {
  const [completed, setCompleted] = useState("all");
  const [priority, setPriority] = useState("all");

  return (
    <section>
      <h3>Filters</h3>
      <div className={styles.Filters}>
        <div>
          {" "}
          <label htmlFor="completed">Completed:</label>
          <select
            id="completed"
            name="completed"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority">Priority:</label>

          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="all">All</option>
            {Object.entries(PRIORITIES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default TodoFilters;
