// ButtonGrid.js
import React from 'react';
import './ButtonGrid.css'; // Import the CSS file for styling (create this file next)

const ButtonGrid = ({ buttons }) => {
  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <div key={index} className="button">
          <img src={button.image} alt={button.title} />
          <h3>{button.title}</h3>
          <p>{button.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
