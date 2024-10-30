import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { TiDeleteOutline } from "react-icons/ti";

const DecisionForm = ({setChoicesArray, increaseOpacity}) => {

    
    const [input, setInput] = useState('')
    const [choices, setChoices] = useState([]);
    const navigate = useNavigate()

    const submitInput = () => {
        if (choices.length > 8) {
            toast.error('You cannot have more than 8 choices my man..')
        } else {
        if (input.length > 0){
        setChoices((prev) => [...prev, input])
        setInput('');
        increaseOpacity();
        
    } else if (input.length > 0) {
        toast.error('Please write something before submitting, you fucking idiot')
    }
}
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const deleteChoice = (index) => {
        const newList = choices.filter((_, i) => i !== index)
        setChoices(newList)
    }

    const startGame = () => {
        if (choices.length < 2){
            toast.error('Need at least 2 choices to start the game')
        } else {
        setChoicesArray(choices)
        navigate('/main')
        }
    }


  return (
    <div className="flex-1 mt-8">
        <Toaster/>
            <input className="p-2 mx-2 text-zinc-600" value={input} onChange={handleInput} placeholder="Enter a choice here" />
            <button onClick={submitInput} className="bg-zinc-800 active:bg-zinc-900 text-white p-2">Submit</button>
        
        <div className="flex flex-col w-2/12 mx-auto">
        {choices.map((choice, i) => {
            return (
                <div key={i} className="flex p-4 m-2 bg-blue-500 rounded-md">
                    <h3 className="flex-1 text-xl font-semibold">{choice}</h3>
                    <button className="text-2xl" onClick={() => deleteChoice(i)}><TiDeleteOutline /></button>
                </div>
            )
        })}
        </div>
        <button className="bg-lime-500 text-2xl px-4 py-2 mt-8 rounded-full" onClick={startGame}>Start Game</button>
    </div>
  )
}

export default DecisionForm