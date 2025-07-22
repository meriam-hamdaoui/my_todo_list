import { useState } from "react";
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import styles from "./Todo.module.css";

const TodoForm = ({ onCreate }) => {
  const [showField, setShowField] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { elements } = event.target;
    // if (elements.name.value === "") return;

    onCreate({
      name: elements.name.value,
      description: elements.description?.value ?? "",
      deadline: elements.deadline?.value ?? "",
      priority: elements.priority?.value ?? "",
      completed: false,
    });
    setShowField(false);

    event.target.reset();
  };

  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button onClick={() => setShowField(!showField)}>
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
