import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
    return (
        <button className='square' onClick={(i) => {
            onClick(i);
        }}>
            {value}
        </button>
    );
};

export default Square;
