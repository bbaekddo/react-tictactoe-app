import Board from './components/Board';
import React, { useState } from 'react';

export default function App() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null)}]);
    const [isNext, setIsNext] = useState(true);

    // 승자 확인
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

    // 현재 위치 확인
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    // 경기 상태 확인
    let status = `Next player: ${isNext ? 'X' : 'O'}`;
    if (winner) {
        status = `Winner : ${winner}`;
    }

    const handleClick = (i) => {
        const newSquares = current.squares.slice();

        // 종료 조건
        if (calculateWinner(newSquares) || newSquares[i]) return;

        newSquares[i] = isNext ? 'X' : 'O';
        setIsNext((isNext) => !isNext);
        setHistory([...history, { squares: newSquares }]);
    };

    // 이동 기록
    const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : `Go to Game Start`;

        return (
            <li>
                <button>{desc}</button>
            </li>
        )
    })

    return (
        <div className='game'>
            <div className='status'>{status}</div>
            <div className='game-board'>
                <Board squares={current.squares} onClick={(i) => handleClick(i)} />
            </div>
            <div className='game-info`'>game info</div>
            <div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}
