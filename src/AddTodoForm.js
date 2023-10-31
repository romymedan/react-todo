import React, { useState } from "react";
import './styles.css';

function AddTodoForm ({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };    


        console.log(newTodo);
        onAddTodo(newTodo);
        setTodoTitle("");
    }
    return (
        <form className="add-todo" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;