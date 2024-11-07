import React from 'react';
import './Cell.css';

export const Cell = (props) => {
  const cellStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: props.isOn ? props.bgColor : 'white'
  };

  return (
    <button
      onClick={props.onClick}
      className="cell"
      style={cellStyle}
    />
  );
};