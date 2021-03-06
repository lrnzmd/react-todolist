import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFileredTodos] = useState([]);

useEffect(()=> {
  getLoclalTodos();
}, []);

  useEffect(()=>{
   filterHandler();
   saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed': 
      setFileredTodos(todos.filter(todo=> todo.completed === true));
      break;

      case 'uncomplited':
      setFileredTodos(todos.filter(todo=> todo.completed === false));
      break;
    
      default:
      setFileredTodos(todos);
      break;
    }
  }

  const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLoclalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
     let todoLocal = JSON.parse(localStorage.setItem('todos'))
     setTodos(todoLocal)
    }
  }

  return (  
    <div className="App">
        <header>
          <h1>Lorenzo's Todo List</h1>
        </header>   
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        />
      <TodoList
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} 
      
      />
    </div>
  );
}

export default App;
