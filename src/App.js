import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Read Assigment'
  },
  {
    id: 2,
    title: 'Prepare the Environment'
  },
  {
    id: 3,
    title: 'Complete Assigment'
  },
  {
    id: 4,
    title: 'Drink Cofee :)'
  }
];


function App() {
  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      </header>
      <ul style={{ textAlign: 'left'}}>
        {todoList.map(function (item){
          return (
            <li style={{ listStyleType: 'none' }} key={item.id}>
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
