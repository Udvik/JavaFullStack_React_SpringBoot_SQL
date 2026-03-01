import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Increment(){
    setCount(count+1);
  }

  function Decrement(){
    setCount(count-1);
  }

  function Reset(){
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
