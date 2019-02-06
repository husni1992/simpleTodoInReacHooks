import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter.component';
import Todo from './components/todo/todo.component';

export default () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h3>React Hooks</h3>
            <section style={{ display: 'flex' }}>
                <Counter />
                <Todo />
            </section>
        </div>
    );
};
