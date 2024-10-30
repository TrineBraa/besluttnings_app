import React, {useState} from 'react'
import DecisionForm from '../Components/DecisionForm'
import terje from "../Img/terje.png";


const StartPage = ({setChoices}) => {

   const [formDisplay, setFormDisplay] = useState(false)
   const [quit, setQuit] = useState(false)
   const [quitCounter, setQuitCounter] = useState(0)
   const [quitText, setQuitText] = useState('You cant quit.')
   const [quitStyle, setQuitStyle] = useState('text-xl')
   const [opacity, setOpacity] = useState(0.01)
   const [gameOver, setGameOver] = useState(false)
   

   const changeFormDisplay = () => {
    setFormDisplay(true);
   }
   const changeQuitState = () => {
    setQuit(true)
    setOpacity((prev) => prev + 0.05)
    setQuitCounter((prev) => prev + 1)
    if (quitCounter === 2){
      setQuitText('YOU CANT QUIT')
      setQuitStyle('text-2xl')
    } else if (quitCounter === 3){
      setQuitText('THERE IS NO ESCAPE')
      setQuitStyle('text-3xl')
    } else if (quitCounter === 4){
      setQuitText('THIS IS WHERE YOU DIE')
      setQuitStyle('text-6xl')
    } else if (quitCounter === 6){
      setQuitStyle('text-7xl')}
      else if (quitCounter === 7){
        setQuitStyle('text-8xl')}
      else if (quitCounter === 8){
      setGameOver(true)
    }
   }

   const increaseOpacity = () => {
    setOpacity((prev) => prev + 0.02)
    console.log(opacity)
   }

   if (gameOver){
    return (
      <div className="bg-zinc-950 h-screen w-screen"><h1 className="text-2xl text-white">you died.</h1></div>
    )
   }
  return (
    <div className="bg-zinc-950 text-white w-screen flex-col items-center mx-auto relative justify-center h-screen text-center overflow-hidden"
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center z-0 pointer-events-none ${formDisplay && 'animate-shake'}`}
        style={{ backgroundImage: `url(${terje})`, opacity: opacity }}
      ></div>
        <div className="flex-col pt-12">
            <h1 className="text-4xl">Decision Maker Game Thing</h1>
            <h3 className="text-2xl">by Team clicker</h3>
        </div>
        {!formDisplay ? 
        <div className="flex-1 min-h-72 items-end mt-8 text-white z-10">
            <button onClick={changeFormDisplay} className="rounded-xl z-10 bg-lime-500 hover:bg-lime-600 text-2xl mx-2 px-6 py-2">Start</button>
            <button onClick={changeQuitState} className="rounded-xl z-10 bg-red-500 hover:bg-red-600 text-2xl mx-2 px-6 py-2">Quit</button>
            {quit && <h1 className={quitStyle}>{quitText}</h1>}
           
        </div>
        
        : 
        <DecisionForm setChoicesArray={setChoices} increaseOpacity={increaseOpacity}/>}
    </div>
  )
}

export default StartPage