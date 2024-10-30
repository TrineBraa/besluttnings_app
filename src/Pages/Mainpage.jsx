import React, {useState} from 'react'
import UpgradeBox from "../Components/UpgradeBox";
import MysteryBox from '../Components/MysteryBox';
import SkipGameBtn from '../Components/SkipGameBtn'
import FakeEndPage from './FakeEndPage';

const Mainpage = ({points, setPoints, pointsPerClick, setPointsPerClick}) => {
    
    function increasePoints() {
        setPoints(points + pointsPerClick);
    }
  return (
    <div className= "bg-zinc-950 text-white w-screen flex-col items-center mx-auto justify-center h-screen text-center">
        <h1 className="pt-10 text-4xl">Points: {points}</h1>
        <br/>
        <button className="font-bold py-3 px-10 rounded-lg mt-1  bg-lime-500 active:bg-lime-600" onClick={() => increasePoints()}>Click</button>
        
        <div className="grid-cols-3 flex justify-center pt-8" >
            <UpgradeBox 
                text={"Cost: 50"}
                cost={50}
                increase={1}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
            <UpgradeBox 
                text={"Cost: 100"}
                cost={100}
                increase={2}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
            <UpgradeBox 
                text={"Cost: 500"}
                cost={500}
                increase={3}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
        </div>
        <div className='flex justify-center pt-8'>
            <MysteryBox
                text={"Cost: 1000"}
                points={points}
                cost={1000}
            />
            <MysteryBox
                text={"Cost: 2000"}
                points={points}
                cost={2000}
            />
            <MysteryBox
                text={"Cost: 3000"}
                points={points}
                cost={3000}
            />
        </div>
        <div className='flex justify-center pt-8'>
            <SkipGameBtn/>
        </div>
    </div>
  )
}

export default Mainpage
