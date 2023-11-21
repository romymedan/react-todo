import React, { useState, useEffect } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './styles.css';


function App() {
  const key = "savedTodoList";
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem(key)) || [];
    const myPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({data: { todoList: savedValue } });
      }, 2000);  
    });

    myPromise.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });

  },[]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoList));
  }, [todoList]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
      )}
    </>
  );
}

export default App;
