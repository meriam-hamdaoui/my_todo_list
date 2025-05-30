import React, { useState } from "react";
import styles from "./Todo.module.css";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/data.js";
import TodoFormFields from "../TodoFormFields/TodoFormFields.jsx";

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
        <TodoFormFields showField={showField} />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
