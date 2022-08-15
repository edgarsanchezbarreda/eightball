import React, { useState } from 'react';
import './Eightball.css';
const Eightball = ({ answers }) => {
    const idx = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[idx];

    const roll = () => {
        setText(randomAnswer.msg);
        setColor(randomAnswer.color);
    };

    const [text, setText] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    return (
        <div className='Eightball'>
            <button
                style={{ backgroundColor: color }}
                className='Eightball-button'
                onClick={roll}
            >
                {text}
            </button>
        </div>
    );
};

export default Eightball;
