import React from "react";

function TodoListItem({ todo }){
    const { id, title } = todo;

        return (
            <li>
                <span>{id}. </span>
                <span>{title}</span>
            </li>
        );
    
}

export default TodoListItem;