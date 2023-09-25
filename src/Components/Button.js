

import React from 'react'

const Button = ({ label = "Save", color = "white", bgColor = "red", disabled = false, handleClick}) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
        width: "100%",
        borderRadius: "10px",
        border: "none",
        padding: "10px",
        fontSize: "1.2rem",
        cursor: "pointer"
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};


export default Button