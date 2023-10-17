import react from "react";
import todoListData from './todoListData';
import TodoListItem from "./TodoListItem";
import './styles.css';

function TodoList() {
    return (
      <ul>
        {todoListData.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
}

export default TodoList;