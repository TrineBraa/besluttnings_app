import React from 'react'
import Credits from '../Components/Credits';
import RestartBtn from '../Components/RestartBtn';
import { choicesArray } from '../Data/Choices';

const EndPage = ({choices}) => {

  return (
    <div>
      <h1 className="text-center text-3x1 font-bold mb-8"> GAME OVER </h1>
      <Credits choicesArray={choices} />
      <RestartBtn />
    </div>
  );
};

export default EndPage