import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(previousCount => previousCount + 1);
    }
    const handleDecrement = ()=>{
        setCount(previousCount => previousCount - 1);
    }
    return (
        <div>
            <Count count={count}></Count>
            <div className='flex gap-4 justify-center items-center'>
            <button className='bg-green-400 p-2 rounded-md' onClick={handleIncrement}>Increment</button>
            <button className='bg-red-600 p-2 rounded-md' onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;