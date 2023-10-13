import react from "react";
import './styles.css';

function AddTodoForm () {
    return (
        <form className="add-todo">
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;