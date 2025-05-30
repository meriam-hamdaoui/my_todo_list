import React, { useState } from "react";
import styles from "./Todo.module.css";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import TodoFormFields from "../TodoFormFields/TodoFormFields.jsx";

import { handleSubmit } from "./../../handler/Handler";

const TodoForm = ({ onCreate }) => {
  const [showField, setShowField] = useState(false);

  const handleShowField = () => setShowField(!showField);

  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button onClick={handleShowField}>
          {showField ? "Hide" : "Show"} All Field
        </button>
      </h3>

      <form
        className={styles.Form}
        onSubmit={(e) => handleSubmit(e, onCreate, handleShowField)}
      >
        <TodoFormFields showField={showField} />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
