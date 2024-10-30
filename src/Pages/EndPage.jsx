import React, { useState, useEffect, useRef } from "react";
import Credits from "../Components/Credits";
import RestartBtn from "../Components/RestartBtn";
import { choicesArray } from "../Data/Choices";
import img1 from "../Img/TerjeTrollEyesOpen.png";
import audioFile from "../Img/creditaudio.mp3";

const EndPage = ({ choices, setPoints, setPointsPerClick }) => {
  const [mainChoice, setMainChoice] = useState('');
  const audioRef = useRef(new Audio(audioFile));

  useEffect(() => {
    audioRef.current.volume = 0.2;
    
    let randomNumber = Math.floor(Math.random() * choicesArray.length);
    setMainChoice(choices[randomNumber]);
    audioRef.current.play();
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [choices]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
      <h1 className="text-center text-5xl font-extrabold mb-8 animate-pulse">
        Your choice is: {mainChoice} 
      </h1>
      <img src={img1} alt="hehexd" className="w-48 h-48 mb-8 animate-bounce" />
      <div className="h-3/4 w-full overflow-hidden">
        <div className="animate-roll space-y-12 text-center text-lg">
          <Credits choicesArray={choices} />
        </div>
      </div>
      <div className="mt-auto mb-4">
        <RestartBtn choicesArray={choicesArray} setPoints={setPoints} setPointsPerClick={setPointsPerClick} />
      </div>
    </div>
  );
};

export default EndPage;
