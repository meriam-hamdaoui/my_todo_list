import React from "react";
import styles from "../TodoItem/TodoItem.module.css"; // Assuming you have a CSS file for styling
import { handleFormSubmit } from "../../handler/Handler";

const EditTemplate = ({ children, setIsEditing, todo, onUpdate }) => {
  return (
    <form
      className={styles.Content}
      onReset={() => setIsEditing(false)}
      onSubmit={(e) => handleFormSubmit(e, todo, onUpdate, setIsEditing)}
    >
      {children}
      <div className={styles.Controls}>
        <input type="submit" value="💾" />
        <input type="reset" value="❌" />
      </div>
    </form>
  );
};

export default EditTemplate;
