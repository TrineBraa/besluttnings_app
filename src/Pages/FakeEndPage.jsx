import React from 'react';
import sintTerje from '../Img/sintTerje.jpg';
import RestartBtn from '../Components/RestartBtn';
import { useNavigate } from "react-router-dom";

const FakeEndPage = ({choices}) => {
  const navigate = useNavigate()

    function Apologise(){
      navigate('/')
    }
    
  return (
    <div className ="bg-zinc-950 text-white w-screen flex-col items-center mx-auto justify-center h-screen text-center">
      <h1> I can't believe you cheated. After all the hard work we put into this game - less than a day!!!, and you didn't even want to play. You suck</h1>
      
      <button 
      onClick={() => Apologise()}
      >
        Click here to apologise, and you might be able to continue
      </button>
      <img src={sintTerje} alt="hahaxd" className="w-300 h-350 mb-8 animate-shake" />
    </div>
  )
}

export default FakeEndPage