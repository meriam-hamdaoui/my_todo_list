import React from "react";
import styles from "../TodoItem/TodoItem.module.css"; // Assuming you have a CSS file for styling

const EditTemplate = ({ children, setIsEditing, handleFormSubmit }) => {
  return (
    <form
      className={styles.Content}
      onReset={() => setIsEditing(false)}
      onSubmit={handleFormSubmit}
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
