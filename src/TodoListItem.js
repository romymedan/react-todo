import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  const { id, title } = todo;

  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    <li>
      <span>{title} </span>
      <button type="button" onClick={handleRemoveClick}>❌ Remove</button>
    </li>
  );

}

export default TodoListItem;