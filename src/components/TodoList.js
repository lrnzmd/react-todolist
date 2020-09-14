import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="too-container">
            <ul className="too-list">
                {todos.map(todo => (
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos}
                    todo={todo} 
                    text={todo.text} 
                    id={todo.id} 
                    key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;