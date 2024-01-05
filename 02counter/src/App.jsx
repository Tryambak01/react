import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15); 

  const AddValue = () => {
      setCounter(counter + 1)
  }

  const RemoveValue = () => {
      setCounter(counter - 1)
  }

  return (
    <>
    <h1>React Course Counter {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button 
    onClick = {AddValue} 
    >Add value</button> {"    "}
    <button 
    onClick = {RemoveValue} 
    >Remove value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
