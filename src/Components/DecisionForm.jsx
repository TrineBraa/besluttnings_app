import React, {useState} from 'react'
import { choicesArray } from '../Data/Choices';
import { useNavigate } from "react-router-dom";

const DecisionForm = ({setChoicesArray}) => {

    
    const [input, setInput] = useState('')
    const [choices, setChoices] = useState([]);
    const navigate = useNavigate()

    const submitInput = () => {
        if (input.length > 0){
        setChoices((prev) => [...prev, input])
        console.log(choices)
        setInput('');
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
        setChoicesArray(choices)
        
        navigate('/main')
    }


  return (
    <div className="flex-1">
        
            <input value={input} onChange={handleInput} placeholder="Enter a choice here" />
            <button onClick={submitInput} className="bg-black text-white p-2">Submit</button>
        
        <div className="flex flex-col gap-4">
        {choices.map((choice, i) => {
            return (
                <div key={i} className="flex p-8">
                    <h3 className="flex-1">{choice}</h3>
                    <button onClick={() => deleteChoice(i)}>X</button>
                </div>
            )
        })}
        </div>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default DecisionForm