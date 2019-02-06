import React, { useState } from 'react';
import Form from './form.component';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="centered-and-bordered">
            <Form onSubmitCb={text => setTodos([...todos, { id: todos.length, text, completed: false }])} />
            <div>
                {todos.map(item => (
                    <div key={item.id}>{item.text}</div>
                ))}
            </div>
        </div>
    );
}
