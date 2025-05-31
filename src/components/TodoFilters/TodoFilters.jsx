import React, { useState, useEffect } from "react";
import styles from "./TodoFilters.module.css"; // Assuming you have a CSS file for styling
import { PRIORITIES } from "../../constants/data.js";
import {
  COMPLETED_FILTERS,
  PRIORITY_FILTERS,
} from "../../constants/filters.js";

const TodoFilters = ({ onFilter }) => {
  const [completed, setCompleted] = useState("all");
  const [priority, setPriority] = useState("all");

  useEffect(() => {
    const filters = {
      completed: COMPLETED_FILTERS[completed].value,
      priority: PRIORITY_FILTERS[priority].value,
    };

    onFilter(filters);
  }, [completed, priority, onFilter]);

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
            defaultValue={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            {Object.entries(COMPLETED_FILTERS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="priority">Priority:</label>

          <select
            id="priority"
            name="priority"
            defaultValue={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {Object.entries(PRIORITY_FILTERS).map(([key, { label }]) => (
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
