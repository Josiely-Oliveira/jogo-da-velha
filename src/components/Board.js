import React from 'react';

import Square from './Square';

function Board({ squares, onPlay }) {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onPlay(i)} />
  );

  return (
    <div className="d-flex flex-wrap" style={{ width: '180px' }}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className="p-1">
          {renderSquare(i)}
        </div>
      ))}
    </div>
  );
}

export default Board;

