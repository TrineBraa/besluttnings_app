import React, {useState} from 'react'
import DecisionForm from '../Components/DecisionForm'

const StartPage = ({setChoices}) => {

   const [formDisplay, setFormDisplay] = useState(true)
   const [quit, setQuit] = useState(false)

   const changeFormDisplay = () => {
    setFormDisplay(false);
   }
   const changeQuitState = () => {
    setQuit(true)
   }


  return (
    <div className="flex-col items-center mx-auto w-5/6 justify-center">
        <div className="text-4xl flex-col">
            <h1>Decision Maker Game Thing</h1>
            <h3>by Team clicker</h3>
        </div>
        {formDisplay ? 
        <div className="flex justify-center text-black">
            <button onClick={changeFormDisplay} className="bg-lime-400 p-4">Start</button>
            <button onClick={changeQuitState} className="bg-red-400 p-4">Quit?</button>
            {quit && <h1>You can't quit</h1>}
        </div>
        : 
        <DecisionForm setChoicesArray={setChoices}/>}
    </div>
  )
}

export default StartPage