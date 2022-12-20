import React from 'react';
import {useState, useEffect} from "react";
import Loader from './components/Loader';

import './App.css';

function App() {
const [todos, setTodos] = useState([])
const [error, setError] = useState({})

interface Todo {
  title: string;
  id:number;
  completed:boolean;
}

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
// the first one 0 until index 9
.then(res => setTodos(res.slice(0,10)))
// error handling
.catch(err => setError(err))
}, [])



  return (
    <div className="App">
      <>
      {todos.length > 0 ?  todos.map((todo:Todo )=> console.log(todo.title)): (<Loader  />)}
      </>
    </div>
  );
}

export default App;
