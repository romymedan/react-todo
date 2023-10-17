import react from "react";

function TodoListItem(props){
    const { id, title } = props.todo;

        return (
            <li>
                <span>{id}. </span>
                <span>{title}</span>
            </li>
        );
    
}

export default TodoListItem;