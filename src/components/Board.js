import React, { useState } from 'react';
import './Board.css';
import Square from './Square'

const Board = () => {
    // getter, setter
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const status = `Next player: ${isNext ? 'X' : 'O'}`;

    const handleClick = (i) => {
        const clickSquares = squares.slice();
        clickSquares[i] = isNext ? 'X' : 'O';
        setIsNext(!isNext);
        setSquares(clickSquares);
    };

    const renderSquare = (i) =>  {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
