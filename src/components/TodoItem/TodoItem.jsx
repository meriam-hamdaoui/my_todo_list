import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>Deadline: {item.deadline || "No deadline"}</p>
      <p>Priority: {item.priority || "None"}</p>
      <p>Status: {item.completed ? "Completed" : "Not completed"}</p>
      {/* <button onClick={() => console.log(`Edit ${item.id}`)}>Edit</button>
      <button onClick={() => console.log(`Delete ${item.id}`)}>Delete</button> */}
    </div>
  );
};

export default TodoItem;
