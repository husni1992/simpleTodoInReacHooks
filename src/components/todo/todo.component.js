import React, { useState } from 'react';
import Form from './form.component';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const toggleTodoState = index => {
        // edit item in array using the index is efficient as it doesn't need to loop through, ideal way is loop and modify item.
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };
    return (
        <div>
            <Form onSubmitCb={text => setTodos([...todos, { id: todos.length, text, completed: false }])} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflowY: 'scroll', height: 300 }}>
                {todos.map((item, index) => (
                    <div
                        style={{ cursor: 'pointer', textDecoration: item.completed ? 'line-through' : '' }}
                        onClick={() => {
                            toggleTodoState(index);
                        }}
                        key={item.id}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
