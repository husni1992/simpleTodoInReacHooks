import React, { useState } from 'react';
import '../../App.css';

export default () => {
    const [count, setCount] = useState(0);
    return (
        <div className="centered-and-bordered">
            <p>You clicked count {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};
