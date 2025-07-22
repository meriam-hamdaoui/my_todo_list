import { useState, useEffect } from "react";
import styles from "./TodoFilters.module.css";
import {
  COMPLETED_FILTERS,
  PRIORITY_FILTERS,
} from "../../constants/filters.js";

export default function TodoFilters({ onFilter }) {
  const [priority, setPriority] = useState("all");
  const [completed, setCompleted] = useState("all");

  useEffect(() => {
    const filters = {
      completed: COMPLETED_FILTERS[completed].value,
      priority: PRIORITY_FILTERS[priority].value,
    };

    onFilter(filters);
  }, [completed, priority]);

  return (
    <section>
      <h3>Filters</h3>
      <div className={styles.Filters}>
        <label htmlFor="completed">Completed</label>

        <select
          id="completed"
          defaultValue="all"
          onChange={(e) => setCompleted(e.target.value)}
        >
          {Object.entries(COMPLETED_FILTERS).map(([key, { label }]) => (
            <option key={key + Math.random()} value={key}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          defaultValue="all"
          onChange={(e) => setPriority(e.target.value)}
        >
          {Object.entries(PRIORITY_FILTERS).map(([key, { label }]) => (
            <option key={key + Math.random()} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
