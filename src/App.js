import React from 'react';
import './App.css';
import Input from './js/input';
import ToDoList from './js/toDoList';

function App() {
  return (
    <div className="app">
      <Input />
      <ToDoList />
    </div>
  );
}

export default App;
