import React from 'react'
import { useSelector } from 'react-redux'
import "./App.css"

const App = () => {

const {count} = useSelector((state) => state.counter);

  return (
    <div className="App">
      <div>Count is: {count}</div>
      <button>Increment</button>
      <button>Decerement</button>
      <button>Increment by 100</button>
    </div>
  )
}

export default App
