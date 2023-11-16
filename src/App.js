import React, { useState, useEffect } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './styles.css';

function useSemiPersistentState() {
  const key = "savedTodoList";
  const savedValue = JSON.parse(localStorage.getItem(key)) || [];
  const [value, setValue] = useState(savedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];

}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    
    if (!newTodo.title) {
      alert('Please enter a value');
      return;
    }
    setTodoList([...todoList, newTodo]);

  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };


  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

    </>
  );
}

export default App;
