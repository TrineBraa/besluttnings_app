import React from 'react';

const RestartBtn = ({ onRestart }) => {
  return (
    <button onClick={onRestart}  
    className="
    relative inline-flex items-center justify-center
    p-4 text-lg font-extrabold text-white tracking-wide uppercase
    bg-gradient-to-r from-purple to-white
    bg-[length:300%] rounded-lg shadow-lg
    transition-transform duration-300
    animate-color-flag hover:animate-rotate hover:scale-110
    ">
      Make a new decision
    </button>
  );
};

export default RestartBtn;
