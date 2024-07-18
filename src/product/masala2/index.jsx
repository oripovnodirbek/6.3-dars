import React, { useState } from 'react';
import './index.css';

export default function Masala2() {
    const [name, setName] = useState('');

    function handleButtonClick(newName) {
        setName(newName);
    }

    return (
        <>
            <div className="container masala2">
                <div>
                    <h2>{name}</h2>
                </div>
                <div className='buttons'>
                    <button onClick={() => handleButtonClick('Ali')}>Ali</button>
                    <button onClick={() => handleButtonClick('Bobur')}>Bobur</button>
                    <button onClick={() => handleButtonClick('Odil')}>Odil</button>
                </div>

            </div>
        </>
    );
}
