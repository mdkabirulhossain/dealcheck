import React, { useState } from 'react';
import Count from './Count';
import Buttons from './Buttons';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(previousCount => previousCount + 1);
    }
    const handleDecrement = ()=>{
        setCount(previousCount => previousCount - 1);
    }
    return (
        <div className='border-orange-200 border-4 shadow-2xl'>
            <Count count={count}></Count>
            <div className='flex gap-4 justify-center items-center my-5'>
            {/* <button className='bg-green-400 p-2 rounded-md' onClick={handleIncrement}>Increment</button>
            <button className='bg-red-600 p-2 rounded-md' onClick={handleDecrement}>Decrement</button> */}
            <Buttons handler={handleIncrement}>Increment</Buttons>
            <Buttons type="danger" handler={handleDecrement}>Decrement</Buttons>
            </div>
        </div>
    );
};

export default Counter;