import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import './styles.css';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    console.log(newTodo);
    onAddTodo(newTodo);
    setTodoTitle("");
  };

  return (
    <form className="add-todo" onSubmit={handleAddTodo}>
      <InputWithLabel value={todoTitle} onChange={(newTodoTitle) => setTodoTitle(newTodoTitle)}>
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;