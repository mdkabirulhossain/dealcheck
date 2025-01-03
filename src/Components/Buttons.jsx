import React from 'react';

const Buttons = ({ children, type, handler }) => {
    const style =
        type === 'danger' ?
            'bg-red-600 p-2 rounded-md' : 'bg-green-400 p-2 rounded-md';

    return (
        <div>
            <button className={style} onClick={handler}>
                {children}
            </button>
        </div>
    );
};

export default Buttons;