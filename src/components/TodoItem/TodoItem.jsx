import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./TodoItem.module.css"; // Assuming you have a CSS file for styling
import ItemView from "./ItemView";
import EditView from "./EditView";
import { getTodoSchema } from "../../schemas/todoSchema";
// import { PRIORITY_DEFAULT } from "../../constants/data";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(getTodoSchema()),
    defaultValues: todo,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => setIsEditing(true);
  const handleReset = () => setIsEditing(false);

  const handleCheckboxChange = (e) => {
    const updatedTodo = {
      ...todo,

      completed: e.target.checked,
    };

    onUpdate(todo.id, updatedTodo);
  };

  const handleEdit = (data) => {
    onUpdate(todo.id, data);
    setIsEditing(false);
  };

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? (
        <EditView
          todo={todo}
          onCancel={handleReset}
          onSave={handleSubmit(handleEdit)}
          register={register}
        />
      ) : (
        <ItemView
          todo={todo}
          onChangeBox={handleCheckboxChange}
          onClickEdit={handleIsEditing}
          onDelete={onDelete}
        />
      )}
    </li>
  );
};

export default TodoItem;
