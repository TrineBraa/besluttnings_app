import React from 'react';
import { useNavigate } from "react-router-dom";

const RestartBtn = ({ choicesArray, setPoints, setPointsPerClick }) => {
  const navigate = useNavigate()

  function restartGame(){
    choicesArray = []
    setPoints(0);
    setPointsPerClick(1);
    navigate("/");
  }

  return (
    <button 
      onClick={() => restartGame()}  
      className="
        relative inline-flex items-center justify-center
        p-4 px-8 text-lg font-extrabold text-white tracking-wide uppercase
        bg-gradient-to-r from-purple via-pink-500 to-yellow-500
        bg-[length:200%] rounded-full shadow-xl
        animate-bg-slide hover:scale-125 transition-transform duration-500 ease-in-out
        ring-4 ring-purple-500 hover:ring-pink-500 transform-gpu
        hover:animate-pulse
      "
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-lg animate-sparkle"></span>
      Make a new decision
    </button>
  );
};

export default RestartBtn;
