import { useState, useEffect } from "react";
import styles from "./TodoFilters.module.css";
import {
  COMPLETED_FILTERS,
  PRIORITY_FILTERS,
} from "../../constants/filters.js";

export default function TodoFilters({ onFilter }) {
  const [periority, setPeriority] = useState("all");
  const [completed, setCompleted] = useState("all");

  useEffect(() => {
    const filters = {
      completed: COMPLETED_FILTERS[completed].value,
      periority: PRIORITY_FILTERS[periority].value,
    };

    onFilter(filters);
  }, [completed, periority]);

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
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="periority">Periority</label>
        <select
          id="periority"
          defaultValue="all"
          onChange={(e) => setPeriority(e.target.value)}
        >
          {Object.entries(PRIORITY_FILTERS).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
