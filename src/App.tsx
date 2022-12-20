import React from 'react';
import {useState, useEffect} from "react";

import './App.css';

function App() {
const [todos, setTodos] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(res => console.log(res))
}, [])



  return (
    <div className="App">

    </div>
  );
}

export default App;
