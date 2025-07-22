import { useState } from "react";
import { useForm } from "react-hook-form";
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import styles from "./Todo.module.css";
import { PRIORITY_DEFAULT } from "../../constants/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { getTodoSchema } from "../../schemas/todoSchema";

const TodoForm = ({ onCreate }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getTodoSchema({ isNew: true })),
    defaultValues: {
      description: "",
      deadline: "",
      priority: PRIORITY_DEFAULT,
      completed: false,
    },
  });
  const [showField, setShowField] = useState(false);

  const handleCreate = (data) => {
    onCreate(data);
    setShowField(false);

    reset();
  };

  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button onClick={() => setShowField(!showField)}>
          {showField ? "Hide" : "Show"} All Field
        </button>
      </h3>

      <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
        <TodoFormFields
          showField={showField}
          register={register}
          errors={errors}
        />

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
