import { useState } from 'react'
import './App.css'

function App(){

  const name = "Syed Safeer Uddin"
  
  // using useState hook
  
  const [count, setCount] = useState(0)

  function addValue(){
    setCount(count + 1)
    if(count === 20){
      setCount(20)
    }
  }

  function removeValue(){
    setCount(count - 1)
    if(count === 0){
      setCount(0)
    }
  }

  return(
    <>
      <h1>Hello! {name}</h1>
      <h2>Counting Numbers : {count} </h2>
      <button onClick = {addValue}>ADD COUNT</button>
      <button onClick = {removeValue}>REMOVE COUNT</button>
    </>
  )
}

export default App
