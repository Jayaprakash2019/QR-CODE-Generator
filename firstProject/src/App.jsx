import React from 'react'
import LearnComponents from './Components/LearnComponents'
import { functionSample } from './Components/functionSample'
import NewSample from './Components/NewSample'

const App = () => {

  const handleClick = () => {
    alert("Button clicked")
  }

  return (
    <>
    <NewSample handleClick={handleClick}/>
    </>
  )

  
}



export default App



