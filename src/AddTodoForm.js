import React from "react";
import './styles.css';

function AddTodoForm (props) {
    const onAddTodo = props.onAddTodo;  
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target[0].value;
        console.log(todoTitle);
        onAddTodo(todoTitle);
        event.target.reset();
    }
    return (
        <form className="add-todo" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;