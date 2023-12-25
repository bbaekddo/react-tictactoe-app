import React, { useState } from 'react';
import './Board.css';
import Square from './Square'

const Board = () => {
    // getter, setter
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    let status = `Next player: ${isNext ? 'X' : 'O'}`;
    let winner;

    const handleClick = (i) => {
        // 종료 조건
        if (winner || squares[i]) return;

        const clickSquares = squares.slice();
        clickSquares[i] = isNext ? 'X' : 'O';
        setIsNext(!isNext);
        setSquares(clickSquares);
    };

    const renderSquare = (i) =>  {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    const calculateWinner = (squares) => {
        const winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // 우승자 확인
    winner = calculateWinner(squares);
    if (winner) {
        status = `Winner : ${winner}`;
    }

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
