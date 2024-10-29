import React from 'react';
import RestartBtn from '../Components/RestartBtn';

const FakeEndPage = () => {
    function Apologise(){
        <RestartBtn />
    }
  return (
    <div>
      <h1> I can't believe you cheated. After all the hard work we put into this game, and you didn't even want to play.</h1>
      you suck
      <button 
      onClick={() => Apologise()}
      >
        Click here to apologise, and you might be able to continue
      </button>
    </div>
  )
}

export default FakeEndPage