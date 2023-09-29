import React from 'react'; 
import todoList from './todoList';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <ul>
        {todoList.map(function (item){
          return (
            <li key={item.id}>
              <span>{item.id}. </span>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
