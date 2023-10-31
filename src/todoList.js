import React from "react";
import TodoListItem from "./TodoListItem";
import './styles.css';

function TodoList({ todoList }) {
    return (
      <ul>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
}

export default TodoList;