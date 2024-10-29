import React from 'react'
import { choicesArray } from '../Data/Choices';
import EndPage from '../Pages/EndPage';
import RandomInput from './RandomizeInput'; //Denne randomizer inputs (om det er satt opp rett, KEKW)

const MysteryBox = ({cost, points, setPoints, choices}) => {
    function buyMystery(){
        setPoints(points-cost)
        choicesArray(choices)

    }
    function buyMystery2(){
        setPoints(points-cost)
        EndPage();

    }
  return (
    <div className="shadow-md">
        <h1>Mystery Boxes ooooh</h1>
        <button
        onClick={() => buyMystery()}
        >
            Get yourself a mystery box. Exciting?
        </button>
        <button
        onClick={() => buyMystery2()}
        >
            Dare you to click.
        </button>
      
    </div>
  
  )
}

export default MysteryBox
