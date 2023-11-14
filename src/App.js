import React, { useState, useEffect } from "react"; 
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './styles.css';

function useSemiPersistentState () {
  const key = "savedTodoList";
  const savedValue = JSON.parse(localStorage.getItem(key)) || [];
  const [value, setValue] = useState(savedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];

}

function App () {
  
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo = {addTodo} />
      <TodoList  todoList={todoList} />
      
    </>
  );
}

export default App;
