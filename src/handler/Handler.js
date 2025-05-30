// handles form submission for creating a new task on TodoForm component
export function handleSubmit(event, onCreate, handleShowField) {
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
  handleShowField();
}

// handles form submission for updating an existing task on EditTemplate component
export function handleFormSubmit(e, todo, onUpdate, setIsEditing) {
  e.preventDefault();

  const { elements } = e.target;
  const updatedTodo = {
    ...todo,
    name: elements.name.value,
    description: elements.description.value,
    deadline: elements.deadline.value,
    priority: elements.priority.value,
    completed: todo.completed, // Keep the current completed status
  };

  onUpdate(todo.id, updatedTodo);
  setIsEditing(false);
}

// handles checkbox change for toggling task completion on ItemTemplate component
export function handleCheckboxChange(e, todo, onUpdate) {
  const updatedTodo = {
    ...todo,
    completed: e.target.checked,
  };

  onUpdate(todo.id, updatedTodo);
}
