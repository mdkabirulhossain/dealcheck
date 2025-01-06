import React from 'react';

const Stats = ({total}) => {
    return (
        <div className='shadow-2xl border-orange-200 border-4'>
            <h3 className='text-2xl font-bold'>Sum of Two Counter: {total}</h3>
        </div>
    );
};

export default Stats;