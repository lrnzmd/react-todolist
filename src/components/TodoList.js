import { render } from '@testing-library/react';
import React from 'react';
import Todo from './Todo'

const TodoList = ({todos}) =>{
    return(
        <div className="too-container">
            <ul className="too-list">
                {todos.map(todo => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;