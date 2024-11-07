import React, { useState } from 'react';
import { Cell } from './Cell';
import './Grid.css';

export const Grid = () => {
  const rows = 2;
  const columns = 2;
  
  const [cells, setCells] = useState(
    Array(rows).fill().map(() => Array(columns).fill(false))
  );

  const toggleCell = (row, col) => {
    setCells(prevCells => {
      const newCells = prevCells.map(r => [...r]);
      newCells[row][col] = !newCells[row][col];
      return newCells;
    });
  };

  const activeCount = cells.flat().filter(cell => cell).length;

  return (
    <div className="container">
      <div className="counter">
        Count: {activeCount}
      </div>
      <div className="grid">
        {cells.map((row, rowIndex) => (
          row.map((isOn, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              size={100}          
              bgColor="black"      
              isOn={isOn}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))
        ))}
      </div>
    </div>
  );
};