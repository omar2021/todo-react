import React, { useState } from "react";
import './App.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  //need to filter items
  return (
    <div className="App">
      <header>
        <h1>Omar's React Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus ={setStatus} />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}/>


    </div>
  );
}

export default App;
