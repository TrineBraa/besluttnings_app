import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SkipGameBtn = () => {

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  function SkipGame (){
    if (!clicked) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
      setClicked(true);
    } else {
      navigate ("/fakecredits")
    }
  };


  return (
    <div className ="shadow-md purple border rounded-2xl w-40 p-2 m-1 text-center">
      <h1 className="font-bold">Skip game</h1>
      <button className= "font-bold py-2 w-full rounded-lg mt-1 bg-blue-500 hover:bg-blue-700 text-black"
      onClick = {SkipGame}>
        gosh darn clicker games, give me a decision right now!!!!
      </button>
      {clicked && <p className="mt-2 text-sm text-yellow-300">LOL click me again for real!</p>}
    </div>
  )
}

export default SkipGameBtn
