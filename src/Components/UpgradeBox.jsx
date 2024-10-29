import React from 'react'

function UpgradeBox({cost, increase, points, setPoints, pointsPerClick, setPointsPerClick}) {
    function buyUpgrade(){
        setPoints(points-cost)
        setPointsPerClick(pointsPerClick+increase)
    }
  return (
    <div className="shadow-md purple">
        <h1>Upgrade 1</h1>
        <button 
            onClick={() => buyUpgrade()}
            disabled={points < cost}
            >
            Claim
        </button>
    </div>
  )
}

export default UpgradeBox
