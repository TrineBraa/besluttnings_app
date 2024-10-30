import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";




const MysteryBox = ({cost, points, text}) => {

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    function buyMystery(){
      if (!clicked) {
        window.open('https://gurka.se');
        setClicked(true);
      } 
       else {
        navigate("/credits")
        } 
      
    }
    
  return (
    <div className="shadow-md purple border rounded-2xl w-40 p-2 m-1 text-center">
        <h1 className="font-bold">Mystery Box</h1>
        <h3>{text}</h3>
        <button className = {`font-bold py-2 w-full rounded-lg mt-1 ${
          points >= cost
            ? "bg-blue-500 hover:bg-blue-700 text-black"
            : "bg-gray-400 cursor-not-allowed opacity-50 text-black"
        }`}
        onClick={buyMystery}
        disabled={points < cost}
        >
            Oooh a mystery
        </button>
         {clicked && <p className="mt-2 text-sm text-yellow-300">Waste your time some more!</p>}
    </div>
  
  
  )
}

export default MysteryBox
