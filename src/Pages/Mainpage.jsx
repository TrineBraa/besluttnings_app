import React, {useState} from 'react'
import UpgradeBox from "../Components/UpgradeBox";

const Mainpage = ({choices}) => {
    const [points, setPoints] = useState(0);
    const [pointsPerClick, setPointsPerClick] = useState(1);
    
    function increasePoints() {
        setPoints(points + pointsPerClick);
    }
  return (
    <div>
        <h1>Points: {points}</h1>
        <button onClick={() => increasePoints()}>Click</button>
        <div className="grid-cols-5 flex justify-center" >
            <UpgradeBox 
                cost={50}
                increase={1}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
            <UpgradeBox 
                cost={2000}
                increase={2}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
            <UpgradeBox 
                cost={3000}
                increase={3}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
        </div>
    </div>
  )
}

export default Mainpage
