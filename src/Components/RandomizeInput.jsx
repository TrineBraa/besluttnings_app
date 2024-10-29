import { choicesArray } from '../Data/Choices'

function RadomizeInput() {
    let randomNumber = Math.floor(Math.random() * choicesArray.length)
    var random = choicesArray[randomNumber];

  return (
    random
  )
}

export default RadomizeInput;
