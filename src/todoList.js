import react from "react";
import todoListData from './todoListData';
import './styles.css';

function TodoList() {
    return (
        <ul>
        {todoListData.map(function (item){
          return (
            <li key={item.id}>
              <span>{item.id}. </span>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    );
}

export default TodoList;