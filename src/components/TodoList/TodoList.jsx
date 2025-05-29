import React from "react";

const TodoList = ({ todoList }) => {
  return (
    <div>
      <h3 align="center">To-Do's</h3>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name="completed"
              defaultChecked={todo.completed}
            />
            <div>
              <span>{todo.name}</span> <br />
              <span>{todo.description}</span>
              <br />
              <span>
                {todo.deadline}{" "}
                {todo.priority !== "none" && `- ${todo.priority}`}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
